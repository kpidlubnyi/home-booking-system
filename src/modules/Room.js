class Room {
    #cardNumber = null

    constructor(number, type) {
        this.number = number
        this.type = type
        this.isAvailable = true
    }
    book() {

        this.setCardNumber(prompt("Enter your card: "))

        if (this.#cardNumber) {
            this.isAvailable = false
            this.saveChanges()
            return `Thanks for booking Room ${this.number}! \nEntered card is : ${this.getMaskedCardNumber()}`
        }
        else {
            return 'Card must contain only 16 digits!'
        }
    }
    cancelBooking() {
        this.#cardNumber = null
        this.isAvailable = true
        this.saveChanges()
        return `Room ${this.number} is free`
    }

    saveChanges(){
        global.hotelInstance.saveToLocalStorage()
    }

    setCardNumber(number){
        if (/^\d{16}$/.test(number)) {
            this.#cardNumber = number;
        }
    }

    getMaskedCardNumber() { 
        return '**** **** **** ' + this.#cardNumber.slice(-4)
    }
}


module.exports = Room