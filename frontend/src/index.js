import Hotel from './modules/Hotel'
import Room from './modules/Room'
import UI from './modules/services/UI'
import PremiumRoom from './modules/PremiumRoom'
import UserManager from './modules/services/UserManager'
import './style.scss'

const hotel = new Hotel("Grand_Budapesht")
global.hotelInstance = hotel
const userManager = new UserManager('1')
let currentUser = null

const token = sessionStorage.getItem("token");
if (token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        currentUser = { username: payload.username };
        document.getElementById('authStatus').textContent = `Logged in as: ${currentUser.username}`;
        document.getElementById('LogoutBtn').style.display = 'inline';
    } catch (error) {
        console.error('Invalid token:', error);
        sessionStorage.removeItem("token");
    }
}

if (hotel.rooms.length === 0){
    const room101 = new Room(101, 'single')
    const room102 = new Room(102, 'double')
    const room103 = new Room(103, 'suite')
    const room201 = new PremiumRoom(201, 'single', 'gym free access')
    
    hotel.addRoom(room101)
    hotel.addRoom(room102)
    hotel.addRoom(room103)
    hotel.addRoom(room201)

    hotel.saveToLocalStorage() 
}
else { hotel.loadFromLocalStorage()}

const ui = new UI(hotel)

global.loadRoomsWithReviews = async function() {
    try {
        const response = await fetch("http://localhost:3000/reviews");
        const reviews = await response.json();
        ui.renderRooms(reviews);
    } catch (error) {
        console.error('Error loading reviews for rooms:', error);
        ui.renderRooms([]);
    }
};

loadRoomsWithReviews();

global.bookRoom = function(number) {
    if (currentUser) {
        const room = hotel.rooms.find(r => r.number === number)
        if (room){
            let success = room.book()
            if (success) {
                room.bookedBy = currentUser.username
                room.saveChanges()
                alert(`Thanks for booking Room ${room.number}!\nEntered card is : ${room.getMaskedCardNumber()}\nBooked by: ${room.bookedBy}`)
            }
            else {
                alert('Card number must contain 16 digits!')
            }
            loadRoomsWithReviews() 
        }
    }
}

global.cancelBooking = function (number){
    const room = hotel.rooms.find(r => r.number === number)

    if (room) {
        room.bookedBy = null
        room.saveChanges()
        alert(room.cancelBooking())
        loadRoomsWithReviews() 
    }
}

global.loadRoomReviews = async function(number) {
    const reviewsContainer = document.getElementById(`reviews-${number}`)

    if (reviewsContainer.innerHTML) {
        reviewsContainer.innerHTML = ''
        return
    }

    try {
        const response = await fetch('http://localhost:3000/reviews');
        const reviews = await response.json();
        
        const sample = reviews
            .filter(r => r.roomNumber === number)
            .slice(0, 3);
            
        const reviewsHTML = sample.map(review => 
            `<div id="review-${review.id}" class="review">
                <p><strong>${review.email}:</strong></p>
                <p>${review.body}</p>
                <div style="margin-top: 10px;">
                    <button onclick="editReview('${review.id}')" style="margin-right: 5px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">Edit</button>
                    <button onclick="deleteReview('${review.id}', ${review.roomNumber})" style="padding: 5px 10px; background-color: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">Delete</button>
                </div>
            </div>`
        ).join('')
        
        reviewsContainer.innerHTML = reviewsHTML || '<p>No reviews for this room yet.</p>'
    } catch (error) {
        reviewsContainer.innerHTML = `<p>Error loading reviews: ${error.message}</p>`
    }
};

async function makeAuthenticatedRequest(url, options = {}) {
    const token = sessionStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };
    
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    
    return fetch(url, {
        ...options,
        headers
    });
}

global.deleteReview = async function(id, roomNumber) {
    const confirmed = confirm("Are you sure you want to delete this review?");
    
    if (!confirmed) return;
    
    try {
        const response = await makeAuthenticatedRequest(`http://localhost:3000/reviews/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert("Review deleted!");
            loadRoomReviews(roomNumber);
            loadRoomsWithReviews();
        } else {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.message || errorData?.error || 'An error occurred while deleting the review.';
            alert(`Failed to delete review: ${errorMessage}`);
        }
        
    } catch (error) {
        console.error('Error deleting review:', error);
        alert(`Failed to delete review: ${error.message || 'Server connection error'}`);
    }
};

global.editReview = async function(id) {
    try {
        const response = await fetch('http://localhost:3000/reviews');
        const reviews = await response.json();
        const currentReview = reviews.find(review => review.id === id);
        
        if (!currentReview) {
            alert('No reviews found for editing');
            return;
        }
        
        const newEmail = prompt('Enter new email:', currentReview.email);
        if (newEmail === null) return; 
        
        const newRoomNumber = prompt('Enter the new room number:', currentReview.roomNumber);
        if (newRoomNumber === null) return; 
        
        const newBody = prompt('Enter new review content:', currentReview.body);
        if (newBody === null) return; 
        
        if (!newEmail.trim()) {
            alert('Email must not be empty!');
            return;
        }
        
        if (!newRoomNumber.trim()) {
            alert('The room number must not be blank!');
            return;
        }
        
        if (!newBody.trim()) {
            alert('The content of the review must not be empty!');
            return;
        }
        
        const roomNumberInt = parseInt(newRoomNumber);
        if (isNaN(roomNumberInt)) {
            alert('The room number must be a number!');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            alert('Enter a valid email address!');
            return;
        }
        
        const roomExists = hotel.rooms.some(room => room.number === roomNumberInt);
        if (!roomExists) {
            alert(`Room ${roomNumberInt} does not exist in our hotel!`);
            return;
        }
        
        const updateResponse = await makeAuthenticatedRequest(`http://localhost:3000/reviews/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                email: newEmail.trim(),
                roomNumber: roomNumberInt,
                body: newBody.trim()
            })
        });
        
        if (updateResponse.ok) {
            alert('The review has been successfully updated!');
            
            loadRoomReviews(roomNumberInt);
            
            if (roomNumberInt !== currentReview.roomNumber) {
                loadRoomReviews(currentReview.roomNumber);
            }
            
            loadRoomsWithReviews();
        } else {
            const errorData = await updateResponse.json().catch(() => null);
            const errorMessage = errorData?.message || errorData?.error || 'An error occurred while updating the review.';
            alert(`Failed to update review: ${errorMessage}`);
        }
        
    } catch (error) {
        console.error('Error when editing reviews:', error);
        alert(`Failed to update review: ${error.message || 'Server connection error'}`);
    }
};

global.addReview = async function () {
    const email = document.getElementById("reviewEmail").value.trim();
    const roomNumberInput = document.getElementById("reviewRoom").value.trim();
    const body = document.getElementById("reviewBody").value.trim();
    
    if (!email) {
        alert('Email is required.');
        return;
    }
    
    if (!roomNumberInput) {
        alert('Room number is required.');
        return;
    }
    
    if (!body) {
        alert('Review content is required.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const roomNumber = parseInt(roomNumberInput);
    if (isNaN(roomNumber)) {
        alert('Room number must be a valid number.');
        return;
    }
    
    const roomExists = hotel.rooms.some(room => room.number === roomNumber);
    if (!roomExists) {
        alert(`Room ${roomNumber} does not exist in our hotel.`);
        return;
    }
    
    try {
        const response = await makeAuthenticatedRequest('http://localhost:3000/reviews', {
            method: 'POST',
            body: JSON.stringify({ roomNumber, email, body })
        });
        
        if (response.ok) {
            document.getElementById("reviewEmail").value = '';
            document.getElementById("reviewRoom").value = '';
            document.getElementById("reviewBody").value = '';
            
            alert('Review added successfully!');
            
            loadRoomReviews(roomNumber);
            loadRoomsWithReviews();
        } else {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.message || errorData?.error || 'An error occurred while adding the review.';
            alert(`Failed to add review: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error adding review:', error);
        alert(`Failed to add review: ${error.message || 'Server connection error'}`);
    }
};

global.registerUser = async function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    let successful = await userManager.register(username, password)
    if (successful) {
        document.getElementById('authStatus').textContent = `Registered: ${username}`
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

global.loginUser = async function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    let token = await userManager.login(username, password)
    if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        currentUser = { username: payload.username };
        
        document.getElementById('authStatus').textContent = `Logged in as: ${currentUser.username}`
        document.getElementById('LogoutBtn').style.display = 'inline'
        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        loadRoomsWithReviews() 
    }
}

global.logoutUser = function() {
    sessionStorage.removeItem('token')
    currentUser = null
    document.getElementById('authStatus').textContent = 'Not logged in'
    document.getElementById('LogoutBtn').style.display = 'none'
    loadRoomsWithReviews() 
    location.reload()
}