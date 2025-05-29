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

const savedUser = sessionStorage.getItem('loggedInUser')
if (savedUser) {
    let user = JSON.parse(savedUser).username
    document.getElementById('authStatus').textContent = `Logged in as: ${user}`
    document.getElementById('LogoutBtn').style.display = 'inline'
    currentUser = user
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
ui.renderRooms()

global.bookRoom = function(number) {
    if (currentUser) {
        const room = hotel.rooms.find(r => r.number === number)
        if (room){
            let success = room.book()
            if (success) {
                room.bookedBy = currentUser
                room.saveChanges()
                alert(`Thanks for booking Room ${room.number}!\nEntered card is : ${room.getMaskedCardNumber()}\nBooked by: ${room.bookedBy}`)
            }
            else {
                alert('Card number must contain 16 digits!')
            }
            ui.renderRooms()
        }
    }
}

global.cancelBooking = function (number){
    const room = hotel.rooms.find(r => r.number === number)

    if (room) {
        room.bookedBy = null
        room.saveChanges()
        alert(room.cancelBooking())
        ui.renderRooms()
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
            `<div class="review">
                <p><strong>${review.email}:</strong></p>
                <p>${review.body}</p>
                <button onclick="editReview('${review.id}')" style="margin-top: 5px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">Edit</button>
            </div>`
        ).join('')
        
        reviewsContainer.innerHTML = reviewsHTML || '<p>No reviews for this room yet.</p>'
    } catch (error) {
        reviewsContainer.innerHTML = `<p>Error loading reviews: ${error.message}</p>`
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
        
        const updateResponse = await fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
        } else {
            const errorData = await updateResponse.json().catch(() => null);
            const errorMessage = errorData?.message || 'An error occurred while updating the review.';
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
        const response = await fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomNumber, email, body })
        });
        
        if (response.ok) {
            document.getElementById("reviewEmail").value = '';
            document.getElementById("reviewRoom").value = '';
            document.getElementById("reviewBody").value = '';
            
            alert('Review added successfully!');
            
            loadRoomReviews(roomNumber);
        } else {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.message || 'An error occurred while adding the review.';
            alert(`Failed to add review: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error adding review:', error);
        alert(`Failed to add review: ${error.message || 'Server connection error'}`);
    }
};

global.registerUser = function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let successful = userManager.register(username, password)
    if (successful)
        document.getElementById('authStatus').textContent = `Registered: ${username}`
}

global.loginUser = function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let successful = userManager.login(username, password)
    if (successful) {
        sessionStorage.setItem('loggedInUser', JSON.stringify({'username':username, 'password':password}))
        document.getElementById('authStatus').textContent = `Logged in as: ${username}`
        document.getElementById('LogoutBtn').style.display = 'inline'
        currentUser = username
        ui.renderRooms()
    }
}

global.logoutUser = function() {
    sessionStorage.removeItem('loggedInUser')
    currentUser = null
    document.getElementById('authStatus').textContent = 'Not logged in'
    document.getElementById('LogoutBtn').style.display = 'none'
    ui.renderRooms()
    location.reload()
}