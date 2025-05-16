import { Room } from "./Room.js"

export default class PremiumRoom extends Room {
    constructor(number, type, premiumFeature){
        super(number, type)
        this.premiumFeature = premiumFeature
    }

    book(){
        return super.book()
    }

    cancelBooking(){
        return super.cancelBooking()
    }

    getMaskedCardNumber(){
        return super.getMaskedCardNumber()
    }

    setCardNumber(number) {
        return super.setCardNumber(number)
    }
}
