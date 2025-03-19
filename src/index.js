const Hotel = require("./modules/Hotel")
const Room = require("./modules/Room")
const UI = require("./modules/UI")

const hotel = new Hotel("Grand Budapesht")
const room101 = new Room(101, 'single')
const room102 = new Room(102, 'double')
const room103 = new Room(103, 'suite')

hotel.addRoom(room101)
hotel.addRoom(room102)
hotel.addRoom(room103)

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