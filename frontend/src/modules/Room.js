export class Room {
    #cardNumber;

    constructor(number, type) {
        this.number = number
        this.type = type
        this.isAvailable = true
        this.bookedBy;
    }
    
    book() {
        this.setCardNumber(prompt("Enter your card: "))

        if (this.#cardNumber) {
            this.isAvailable = false
            this.saveChanges()
            return true
        }
        else 
            return false
    }
    
    cancelBooking() {
        this.#cardNumber = null
        this.isAvailable = true
        this.saveChanges()
        return `Room ${this.number} is free`
    }

    saveChanges(){
        if (typeof global !== 'undefined' && global.hotelInstance && global.hotelInstance.saveToLocalStorage) {
            global.hotelInstance.saveToLocalStorage()
        }
    }

    setCardNumber(number){
        if (/^\d{16}$/.test(number)) {
            this.#cardNumber = number;
        }
    }

    getMaskedCardNumber() { 
        return this.#cardNumber ? '**** **** **** ' + this.#cardNumber.slice(-4) : '';
    }
}

export default Room;