export default class UI {
    constructor(hotel) {
        this.hotel = hotel;
    }
    
    renderRooms(reviews = []) {
        const container = document.getElementById("roomsContainer");
        container.innerHTML = "";
        
        const token = sessionStorage.getItem('token');
        let isLoggedIn = false;
        let currentUser = null;
        
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                isLoggedIn = true;
                currentUser = payload.username;
            } catch (error) {
                console.error('Invalid token:', error);
                sessionStorage.removeItem('token');
            }
        }

        this.hotel.rooms.forEach(room => {
            const isPremium = room.premiumFeature ? `<p><strong>Premium Service:</strong> ${room.premiumFeature}</p>` : ""
            const premiumClass = room.premiumFeature ? "premium-room" : ""
            const bookedBy = room.bookedBy ? `<p><strong>Booked by:</strong> ${room.bookedBy}</p>` : "";
            
            const count = reviews.filter(r => r.roomNumber === room.number).length;
            const reviewsInfo = count === 0 ? "No reviews yet" : `${count} review${count === 1 ? '' : 's'}`;
            
            const bookDisabled = !isLoggedIn || !room.isAvailable ? "disabled" : "";
            const cancelDisabled = room.isAvailable || !isLoggedIn || (room.bookedBy !== currentUser) ? "disabled" : "";

            const roomDiv = document.createElement("div");
            roomDiv.id = `room-${room.number}`;
            roomDiv.className = `Room ${premiumClass} ${room.isAvailable ? "available" : "booked"}`;
            roomDiv.innerHTML = `
                <h3>Room ${room.number} (${room.type})</h3>
                <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
                <p><strong>Reviews:</strong> ${reviewsInfo}</p>
                ${isPremium}
                ${bookedBy}
                <div class="room-actions">
                    <button onclick="bookRoom(${room.number})" ${bookDisabled}>Book</button>
                    <button onclick="cancelBooking(${room.number})" ${cancelDisabled}>Cancel</button>
                    <button onclick="loadRoomReviews(${room.number})">Load Reviews</button>
                </div>
                <div id="reviews-${room.number}" class="reviews-container"></div>
            `;
            container.appendChild(roomDiv);
        });
    }
}