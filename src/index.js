const Hotel = require("./modules/Hotel")
const Room = require("./modules/Room")
const UI = require("./modules/UI")
const PremiumRoom = require("./modules/PremiumRoom")
const HotelAPI = require("./modules/HotelAPI")
const UserManager = require('./modules/UserManager')
import './style.scss'

const hotel = new Hotel("Grand_Budapesht")
global.hotelInstance = hotel
const userManager = new UserManager('1')
let currentUser = null

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
                alert('Card number musy contain 16 digits!')
            }

            ui.renderRooms()
        }
    }
    else
        alert('You must be logged in to book the room!')
}

global.cancelBooking = function (number){
    const room = hotel.rooms.find(r => r.number === number)

    if (currentUser !== room.bookedBy){
        alert(`You must be logged in as ${room.bookedBy} to cancel booking`)
        return
    }

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
        const reviews = await HotelAPI.fetchReviews()
        const reviewsHTML = reviews.map(review => 
            `<div class="review">
                <p><strong>${review.email}:</strong></p>
                <p>${review.body}</p>
            </div>`
        ).join('')
        reviewsContainer.innerHTML = reviewsHTML
    } catch (error) {
        reviewsContainer.innerHTML = `<p>Error loading reviews: ${error.message}</p>`
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
        document.getElementById('authStatus').textContent = `Logged in as: ${username}`
        currentUser = username
    }

}