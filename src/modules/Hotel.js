class Hotel {
    constructor() {
        this.rooms = []
    }
    addRoom(room) {
        this.rooms.push(room)
        return `Room ${room.number} has been added`
    }
    getAvailableRooms() {
        return this.rooms.filter(room => room.isAvailable)
    }
}


module.exports = Hotel