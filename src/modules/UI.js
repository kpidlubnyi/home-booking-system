class UI {
    constructor(hotel) {
        this.hotel = hotel;
    }
    renderRooms() {
        const container = document.getElementById("roomsContainer");
        container.innerHTML = "";

        this.hotel.rooms.forEach(room => {
            const roomDiv = document.createElement("div");
            roomDiv.className = `Room ${room.isAvailable ? "" : "booked"}`;
            roomDiv.innerHTML = `
        <h3>Room ${room.number} (${room.type})</h3>
        <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
        <button onclick="bookRoom(${room.number})" ${room.isAvailable ? "" : "disabled"}>Book</button>
        <button onclick="cancelBooking(${room.number})" ${room.isAvailable ? "disabled" : ""}>Cancel</button>
        `;
            container.appendChild(roomDiv);
        });
    }
}


module.exports = UI;