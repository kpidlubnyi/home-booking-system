class Room {
    constructor(number, type) {
        this.number = number
        this.type = type
        this.isAvailable = true
    }
    book() {
        this.isAvailable = false
        return `Room ${this.number} has been booked`
    }
    cancelBooking() {
        this.isAvailable = true
        return `Room ${this.number} is free`
    }
}


module.exports = Room