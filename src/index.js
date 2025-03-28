const Hotel = require("./modules/Hotel")
const Room = require("./modules/Room")
const UI = require("./modules/UI")
const PremiumRoom = require("./modules/PremiumRoom")
const HotelAPI = require("./modules/HotelAPI")
import './style.scss'

const hotel = new Hotel("Grand_Budapesht")
global.hotelInstance = hotel

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
    const room = hotel.rooms.find(r => r.number === number)
    if (room){
        alert(room.book())
        ui.renderRooms()
    }
}

global.cancelBooking = function (number){
    const room = hotel.rooms.find(r => r.number === number)
    if (room) {
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
}