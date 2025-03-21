/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\")\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\")\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\")\r\nconst PremiumRoom = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\")\r\n\r\n\r\nconst hotel = new Hotel(\"Grand_Budapesht\")\r\n__webpack_require__.g.hotelInstance = hotel\r\n\r\nif (hotel.rooms.length === 0){\r\n    const room101 = new Room(101, 'single')\r\n    const room102 = new Room(102, 'double')\r\n    const room103 = new Room(103, 'suite')\r\n    const room201 = new PremiumRoom(201, 'single', 'gym free access')\r\n    \r\n    \r\n    hotel.addRoom(room101)\r\n    hotel.addRoom(room102)\r\n    hotel.addRoom(room103)\r\n    hotel.addRoom(room201)\r\n\r\n    hotel.saveToLocalStorage() \r\n}\r\nelse { hotel.loadFromLocalStorage()}\r\n\r\nconst ui = new UI(hotel)\r\nui.renderRooms()\r\n\r\n__webpack_require__.g.bookRoom = function(number) {\r\n    const room = hotel.rooms.find(r => r.number === number)\r\n    if (room){\r\n        alert(room.book())\r\n        ui.renderRooms()\r\n    }\r\n}\r\n\r\n__webpack_require__.g.cancelBooking = function (number){\r\n    const room = hotel.rooms.find(r => r.number === number)\r\n    if (room) {\r\n        alert(room.cancelBooking())\r\n        ui.renderRooms()\r\n    }\r\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\")\r\nconst PremiumRoom = __webpack_require__(/*! ./PremiumRoom */ \"./src/modules/PremiumRoom.js\")\r\n\r\nclass Hotel {\r\n    constructor(name) {\r\n        this.rooms = [],\r\n        this.name = name,\r\n        this.loadFromLocalStorage()\r\n    }\r\n\r\n    addRoom(room) {\r\n        this.rooms.push(room)\r\n        return `Room ${room.number} has been added`\r\n    }\r\n\r\n    getAvailableRooms() {\r\n        return this.rooms.filter(room => room.isAvailable)\r\n    }\r\n\r\n    saveToLocalStorage(){\r\n        const roomsData = this.rooms.map(room => {\r\n            const roomData = {\r\n                number: room.number,\r\n                type: room.type,\r\n                isAvailable: room.isAvailable\r\n            }\r\n\r\n            if (room.premiumFeature){\r\n                roomData.premiumFeature = room.premiumFeature\r\n            }\r\n            return roomData\r\n        });\r\n\r\n        localStorage.setItem(`hotel_${this.name}`, JSON.stringify(roomsData))\r\n    }\r\n\r\n    loadFromLocalStorage(){\r\n        const savedData = localStorage.getItem(`hotel_${this.name}`)\r\n\r\n        if (savedData){\r\n            const roomsData = JSON.parse(savedData)\r\n\r\n            this.rooms = []\r\n\r\n            roomsData.forEach(roomData => {\r\n                let room;\r\n\r\n                if (roomData.premiumFeature){\r\n                    room = new PremiumRoom(roomData.number, roomData.type, roomData.premiumFeature)\r\n                }\r\n                else {\r\n                    room = new Room(roomData.number, roomData.type)\r\n                }\r\n\r\n                room.isAvailable = roomData.isAvailable\r\n\r\n                this.rooms.push(room)\r\n            })\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Hotel\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\r\n\r\nclass PremiumRoom extends Room {\r\n    constructor(number, type, premiumFeature){\r\n        super(number, type)\r\n        this.premiumFeature = premiumFeature\r\n    }\r\n\r\n    book(){\r\n        return super.book()\r\n    }\r\n\r\n    cancelBooking(){\r\n        return super.cancelBooking()\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = PremiumRoom\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("class Room {\r\n    constructor(number, type) {\r\n        this.number = number\r\n        this.type = type\r\n        this.isAvailable = true\r\n    }\r\n    book() {\r\n        this.isAvailable = false\r\n        this.saveChanges()\r\n        return `Room ${this.number} has been booked`\r\n    }\r\n    cancelBooking() {\r\n        this.isAvailable = true\r\n        this.saveChanges()\r\n        return `Room ${this.number} is free`\r\n    }\r\n\r\n    saveChanges(){\r\n        __webpack_require__.g.hotelInstance.saveToLocalStorage()\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Room\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module) => {

eval("class UI {\r\n    constructor(hotel) {\r\n        this.hotel = hotel;\r\n    }\r\n    renderRooms() {\r\n        const container = document.getElementById(\"roomsContainer\");\r\n        container.innerHTML = \"\";\r\n\r\n        this.hotel.rooms.forEach(room => {\r\n            const isPremium = room.premiumFeature ? `<p><strong>Premium Service:</strong> ${room.premiumFeature}</p>` : \"\"\r\n            const premiumClass = room.premiumFeature ? \"premium-room\" : \"\"\r\n\r\n            const roomDiv = document.createElement(\"div\");\r\n            roomDiv.className = `Room ${premiumClass} ${room.isAvailable ? \"\" : \"booked\"}`;\r\n            roomDiv.innerHTML = `\r\n        <h3>Room ${room.number} (${room.type})</h3>\r\n        <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\r\n        ${isPremium}\r\n        <button onclick=\"bookRoom(${room.number})\" ${room.isAvailable ? \"\" : \"disabled\"}>Book</button>\r\n        <button onclick=\"cancelBooking(${room.number})\" ${room.isAvailable ? \"disabled\" : \"\"}>Cancel</button>\r\n        `;\r\n            container.appendChild(roomDiv);\r\n        });\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = UI;\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;