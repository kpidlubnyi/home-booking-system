const HotelAPI = require('./HotelAPI')

class UI {
    constructor(hotel) {
        this.hotel = hotel;
    }
    
    renderRooms() {
        const container = document.getElementById("roomsContainer");
        container.innerHTML = "";

        this.hotel.rooms.forEach(room => {
            const isPremium = room.premiumFeature ? `<p><strong>Premium Service:</strong> ${room.premiumFeature}</p>` : ""
            const premiumClass = room.premiumFeature ? "premium-room" : ""

            const roomDiv = document.createElement("div");
            roomDiv.id = `room-${room.number}`;
            roomDiv.className = `Room ${premiumClass} ${room.isAvailable ? "available" : "booked"}`;
            roomDiv.innerHTML = `
                <h3>Room ${room.number} (${room.type})</h3>
                <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
                ${isPremium}
                <div class="room-actions">
                    <button onclick="bookRoom(${room.number})" ${room.isAvailable ? "" : "disabled"}>Book</button>
                    <button onclick="cancelBooking(${room.number})" ${room.isAvailable ? "disabled" : ""}>Cancel</button>
                    <button onclick="loadRoomReviews(${room.number})">Load Reviews</button>
                </div>
                <div id="reviews-${room.number}" class="reviews-container"></div>
            `;
            container.appendChild(roomDiv);
        });
    }
}

module.exports = UI