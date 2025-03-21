const Room = require("./Room");

class PremiumRoom extends Room {
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
}


module.exports = PremiumRoom