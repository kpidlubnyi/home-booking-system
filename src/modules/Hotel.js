const Room = require('./Room')
const PremiumRoom = require('./PremiumRoom')

class Hotel {
    constructor(name) {
        this.rooms = [],
        this.name = name,
        this.loadFromLocalStorage()
    }

    addRoom(room) {
        this.rooms.push(room)
        return `Room ${room.number} has been added`
    }

    getAvailableRooms() {
        return this.rooms.filter(room => room.isAvailable)
    }

    saveToLocalStorage(){
        const roomsData = this.rooms.map(room => {
            const roomData = {
                number: room.number,
                type: room.type,
                isAvailable: room.isAvailable
            }

            if (room.bookedBy){
                roomData.bookedBy = room.bookedBy
            }

            if (room.premiumFeature){
                roomData.premiumFeature = room.premiumFeature
            }
            return roomData
        });

        localStorage.setItem(`hotel_${this.name}`, JSON.stringify(roomsData))
    }

    loadFromLocalStorage(){
        const savedData = localStorage.getItem(`hotel_${this.name}`)

        if (savedData){
            const roomsData = JSON.parse(savedData)

            this.rooms = []

            roomsData.forEach(roomData => {
                let room;

                if (roomData.premiumFeature){
                    room = new PremiumRoom(roomData.number, roomData.type, roomData.premiumFeature)
                }
                else {
                    room = new Room(roomData.number, roomData.type)
                }

                room.isAvailable = roomData.isAvailable

                if (roomData.bookedBy) 
                    room.bookedBy = roomData.bookedBy

                this.rooms.push(room)
            })
        }
    }
}


module.exports = Hotel