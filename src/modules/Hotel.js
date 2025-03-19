function Hotel() {
    this.rooms = []
}

Hotel.prototype.addRoom = function(room){
    this.rooms.push(room)
    return `Room ${room.number} has been added`
}

Hotel.prototype.getAvailableRooms = function(){
    return this.rooms.filter(room => room.isAvailable)
}

module.exports = Hotel