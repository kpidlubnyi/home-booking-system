/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: Arial, sans-serif;\n  text-align: center;\n  background-color: #f4f4f4;\n  margin: 0;\n  padding: 20px;\n  color: #333;\n}\n\n#roomsContainer {\n  display: flex;\n  justify-content: center;\n  gap: 25px;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.Room {\n  border: 2px solid #313131;\n  height: fit-content;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 8px;\n  width: 250px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.Room.available {\n  background-color: #a3f3ab;\n}\n.Room.booked {\n  background-color: #ff8b94;\n}\n.Room.premium-room {\n  background-color: #da52f2;\n}\n.Room .room-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.Room button {\n  flex-grow: 1;\n  margin: 0 5px;\n  padding: 8px 15px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.Room .reviews-container {\n  margin-top: 15px;\n  text-align: left;\n  max-height: 200px;\n  overflow-y: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hotel_booking_system/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\n/* harmony import */ var _modules_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\n/* harmony import */ var _modules_services_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services/UI */ \"./src/modules/services/UI.js\");\n/* harmony import */ var _modules_PremiumRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\");\n/* harmony import */ var _modules_services_HotelAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/services/HotelAPI */ \"./src/modules/services/HotelAPI.js\");\n/* harmony import */ var _modules_services_UserManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/services/UserManager */ \"./src/modules/services/UserManager.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst hotel = new _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Grand_Budapesht\")\r\n__webpack_require__.g.hotelInstance = hotel\r\nconst userManager = new _modules_services_UserManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('1')\r\nlet currentUser = null\r\n\r\nconst savedUser = sessionStorage.getItem('loggedInUser')\r\nif (savedUser) {\r\n    let user = JSON.parse(savedUser).username\r\n    document.getElementById('authStatus').textContent = `Logged in as: ${user}`\r\n    document.getElementById('LogoutBtn').style.display = 'inline'\r\n    currentUser = user\r\n}\r\n\r\n\r\nif (hotel.rooms.length === 0){\r\n    const room101 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](101, 'single')\r\n    const room102 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](102, 'double')\r\n    const room103 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](103, 'suite')\r\n    const room201 = new _modules_PremiumRoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"](201, 'single', 'gym free access')\r\n    \r\n    hotel.addRoom(room101)\r\n    hotel.addRoom(room102)\r\n    hotel.addRoom(room103)\r\n    hotel.addRoom(room201)\r\n\r\n    hotel.saveToLocalStorage() \r\n}\r\nelse { hotel.loadFromLocalStorage()}\r\n\r\nconst ui = new _modules_services_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"](hotel)\r\nui.renderRooms()\r\n\r\n__webpack_require__.g.bookRoom = function(number) {\r\n    if (currentUser) {\r\n        const room = hotel.rooms.find(r => r.number === number)\r\n        if (room){\r\n            let success = room.book()\r\n            if (success) {\r\n                room.bookedBy = currentUser\r\n                room.saveChanges()\r\n                alert(`Thanks for booking Room ${room.number}!\\nEntered card is : ${room.getMaskedCardNumber()}\\nBooked by: ${room.bookedBy}`)\r\n            }\r\n            else {\r\n                alert('Card number must contain 16 digits!')\r\n            }\r\n            ui.renderRooms()\r\n        }\r\n    }\r\n}\r\n\r\n__webpack_require__.g.cancelBooking = function (number){\r\n    const room = hotel.rooms.find(r => r.number === number)\r\n\r\n    if (room) {\r\n        room.bookedBy = null\r\n        room.saveChanges()\r\n        alert(room.cancelBooking())\r\n        ui.renderRooms()\r\n    }\r\n}\r\n\r\n__webpack_require__.g.loadRoomReviews = async function(number) {\r\n    const reviewsContainer = document.getElementById(`reviews-${number}`)\r\n\r\n    if (reviewsContainer.innerHTML) {\r\n        reviewsContainer.innerHTML = ''\r\n        return\r\n    }\r\n\r\n    try {\r\n        const reviews = await _modules_services_HotelAPI__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetchReviews()\r\n        const reviewsHTML = reviews.map(review => \r\n            `<div class=\"review\">\r\n                <p><strong>${review.email}:</strong></p>\r\n                <p>${review.body}</p>\r\n            </div>`\r\n        ).join('')\r\n        reviewsContainer.innerHTML = reviewsHTML\r\n    } catch (error) {\r\n        reviewsContainer.innerHTML = `<p>Error loading reviews: ${error.message}</p>`\r\n    }\r\n};\r\n\r\n__webpack_require__.g.registerUser = function() {\r\n    let username = document.getElementById('username').value\r\n    let password = document.getElementById('password').value\r\n\r\n    let successful = userManager.register(username, password)\r\n    if (successful)\r\n        document.getElementById('authStatus').textContent = `Registered: ${username}`\r\n}\r\n\r\n__webpack_require__.g.loginUser = function() {\r\n    let username = document.getElementById('username').value\r\n    let password = document.getElementById('password').value\r\n\r\n    let successful = userManager.login(username, password)\r\n    if (successful) {\r\n        sessionStorage.setItem('loggedInUser', JSON.stringify({'username':username, 'password':password}))\r\n        document.getElementById('authStatus').textContent = `Logged in as: ${username}`\r\n        document.getElementById('LogoutBtn').style.display = 'inline'\r\n        currentUser = username\r\n        ui.renderRooms()\r\n    }\r\n}\r\n\r\n__webpack_require__.g.logoutUser = function() {\r\n    sessionStorage.removeItem('loggedInUser')\r\n    currentUser = null\r\n    document.getElementById('authStatus').textContent = 'Not logged in'\r\n    document.getElementById('LogoutBtn').style.display = 'none'\r\n    ui.renderRooms()\r\n    location.reload()\r\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hotel)\n/* harmony export */ });\n/* harmony import */ var _Room_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.js */ \"./src/modules/Room.js\");\n/* harmony import */ var _PremiumRoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PremiumRoom.js */ \"./src/modules/PremiumRoom.js\");\n\r\n\r\n\r\nclass Hotel {\r\n    constructor(name) {\r\n        this.rooms = [];\r\n        this.name = name;\r\n        this.loadFromLocalStorage();\r\n    }\r\n\r\n    addRoom(room) {\r\n        this.rooms.push(room);\r\n        return `Room ${room.number} has been added`;\r\n    }\r\n\r\n    getAvailableRooms() {\r\n        return this.rooms.filter(room => room.isAvailable);\r\n    }\r\n\r\n    saveToLocalStorage(){\r\n        const roomsData = this.rooms.map(room => {\r\n            const roomData = {\r\n                number: room.number,\r\n                type: room.type,\r\n                isAvailable: room.isAvailable\r\n            };\r\n\r\n            if (room.bookedBy){\r\n                roomData.bookedBy = room.bookedBy;\r\n            }\r\n\r\n            if (room.premiumFeature){\r\n                roomData.premiumFeature = room.premiumFeature;\r\n            }\r\n            return roomData;\r\n        });\r\n\r\n        localStorage.setItem(`hotel_${this.name}`, JSON.stringify(roomsData));\r\n    }\r\n\r\n    loadFromLocalStorage(){\r\n        if (typeof localStorage === 'undefined') {\r\n            return; // Wyjdź wcześnie jeśli localStorage nie jest dostępny (np. w środowisku testowym)\r\n        }\r\n        \r\n        const savedData = localStorage.getItem(`hotel_${this.name}`);\r\n\r\n        if (savedData){\r\n            const roomsData = JSON.parse(savedData);\r\n\r\n            this.rooms = [];\r\n\r\n            roomsData.forEach(roomData => {\r\n                let room;\r\n\r\n                if (roomData.premiumFeature){\r\n                    room = new _PremiumRoom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](roomData.number, roomData.type, roomData.premiumFeature);\r\n                }\r\n                else {\r\n                    room = new _Room_js__WEBPACK_IMPORTED_MODULE_0__.Room(roomData.number, roomData.type);\r\n                }\r\n\r\n                room.isAvailable = roomData.isAvailable;\r\n\r\n                if (roomData.bookedBy) \r\n                    room.bookedBy = roomData.bookedBy;\r\n\r\n                this.rooms.push(room);\r\n            });\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PremiumRoom)\n/* harmony export */ });\n/* harmony import */ var _Room_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.js */ \"./src/modules/Room.js\");\n\r\n\r\nclass PremiumRoom extends _Room_js__WEBPACK_IMPORTED_MODULE_0__.Room {\r\n    constructor(number, type, premiumFeature){\r\n        super(number, type)\r\n        this.premiumFeature = premiumFeature\r\n    }\r\n\r\n    book(){\r\n        return super.book()\r\n    }\r\n\r\n    cancelBooking(){\r\n        return super.cancelBooking()\r\n    }\r\n\r\n    getMaskedCardNumber(){\r\n        return super.getMaskedCardNumber()\r\n    }\r\n\r\n    setCardNumber(number) {\r\n        return super.setCardNumber(number)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Room: () => (/* binding */ Room),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Room {\r\n    #cardNumber;\r\n\r\n    constructor(number, type) {\r\n        this.number = number\r\n        this.type = type\r\n        this.isAvailable = true\r\n        this.bookedBy;\r\n    }\r\n    \r\n    book() {\r\n        this.setCardNumber(prompt(\"Enter your card: \"))\r\n\r\n        if (this.#cardNumber) {\r\n            this.isAvailable = false\r\n            this.saveChanges()\r\n            return true\r\n        }\r\n        else \r\n            return false\r\n    }\r\n    \r\n    cancelBooking() {\r\n        this.#cardNumber = null\r\n        this.isAvailable = true\r\n        this.saveChanges()\r\n        return `Room ${this.number} is free`\r\n    }\r\n\r\n    saveChanges(){\r\n        if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.hotelInstance && __webpack_require__.g.hotelInstance.saveToLocalStorage) {\r\n            __webpack_require__.g.hotelInstance.saveToLocalStorage()\r\n        }\r\n    }\r\n\r\n    setCardNumber(number){\r\n        if (/^\\d{16}$/.test(number)) {\r\n            this.#cardNumber = number;\r\n        }\r\n    }\r\n\r\n    getMaskedCardNumber() { \r\n        return this.#cardNumber ? '**** **** **** ' + this.#cardNumber.slice(-4) : '';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\r\n    #password;\r\n\r\n    constructor(username, password){\r\n        this.username = username\r\n        this.setPassword(password)\r\n    }\r\n\r\n    setPassword(password) {\r\n        if (password.length < 6){\r\n            throw new Error('Hasło musi być większe niż 6 znaków!')\r\n        }\r\n        this.#password = password\r\n    }\r\n\r\n    getPassword() {\r\n        return this.#password\r\n    }\r\n\r\n    validatePassword(password){\r\n        if (password === this.getPassword()) {\r\n            return true\r\n        }\r\n    }\r\n\r\n    toJSON() {\r\n        return {\r\n            username : this.username,\r\n            password : this.getPassword()\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/User.js?");

/***/ }),

/***/ "./src/modules/services/HotelAPI.js":
/*!******************************************!*\
  !*** ./src/modules/services/HotelAPI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HotelAPI)\n/* harmony export */ });\nclass HotelAPI {\r\n    static async fetchReviews() {\r\n        const res = await fetch(\"https://jsonplaceholder.typicode.com/comments?postId=1\")\r\n        const reviews = await res.json()\r\n        \r\n        const shuffled = reviews.sort(() => 0.5 - Math.random())\r\n        const randomReviews = shuffled.slice(0, 3)\r\n\r\n        return randomReviews.map(review => ({\r\n            email: review.email,\r\n            body: review.body\r\n        }))\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/services/HotelAPI.js?");

/***/ }),

/***/ "./src/modules/services/UI.js":
/*!************************************!*\
  !*** ./src/modules/services/UI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n    constructor(hotel) {\r\n        this.hotel = hotel;\r\n    }\r\n    \r\n    renderRooms() {\r\n        const container = document.getElementById(\"roomsContainer\");\r\n        container.innerHTML = \"\";\r\n        \r\n        const isLoggedIn = sessionStorage.getItem('loggedInUser') !== null;\r\n        const currentUser = isLoggedIn ? JSON.parse(sessionStorage.getItem('loggedInUser')).username : null;\r\n\r\n        this.hotel.rooms.forEach(room => {\r\n            const isPremium = room.premiumFeature ? `<p><strong>Premium Service:</strong> ${room.premiumFeature}</p>` : \"\"\r\n            const premiumClass = room.premiumFeature ? \"premium-room\" : \"\"\r\n            const bookedBy = room.bookedBy ? `<p><strong>Booked by:</strong> ${room.bookedBy}</p>` : \"\";\r\n            \r\n            const bookDisabled = !isLoggedIn || !room.isAvailable ? \"disabled\" : \"\";\r\n            const cancelDisabled = room.isAvailable || !isLoggedIn || (room.bookedBy !== currentUser) ? \"disabled\" : \"\";\r\n\r\n            const roomDiv = document.createElement(\"div\");\r\n            roomDiv.id = `room-${room.number}`;\r\n            roomDiv.className = `Room ${premiumClass} ${room.isAvailable ? \"available\" : \"booked\"}`;\r\n            roomDiv.innerHTML = `\r\n                <h3>Room ${room.number} (${room.type})</h3>\r\n                <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\r\n                ${isPremium}\r\n                ${bookedBy}\r\n                <div class=\"room-actions\">\r\n                    <button onclick=\"bookRoom(${room.number})\" ${bookDisabled}>Book</button>\r\n                    <button onclick=\"cancelBooking(${room.number})\" ${cancelDisabled}>Cancel</button>\r\n                    <button onclick=\"loadRoomReviews(${room.number})\">Load Reviews</button>\r\n                </div>\r\n                <div id=\"reviews-${room.number}\" class=\"reviews-container\"></div>\r\n            `;\r\n            container.appendChild(roomDiv);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/services/UI.js?");

/***/ }),

/***/ "./src/modules/services/UserManager.js":
/*!*********************************************!*\
  !*** ./src/modules/services/UserManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserManager)\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../User */ \"./src/modules/User.js\");\n\r\n\r\nclass UserManager {\r\n    constructor(name) {\r\n        this.name = name\r\n        this.users = [];\r\n        this.loadUsers()\r\n    }\r\n\r\n    register(uname, password) {\r\n        if (this.users.find(user => user.username === uname)) {\r\n            alert(\"Username already taken!\")\r\n            return false\r\n        }\r\n\r\n        let user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](uname, password)\r\n        this.users.push(user)\r\n        this.saveUsers()\r\n        return true\r\n    }\r\n\r\n    login(username, password) {\r\n        let user = this.users.find(u => u.username === username)\r\n        if (user && user.validatePassword(password))\r\n            return true\r\n        return false\r\n    }\r\n\r\n    saveUsers() {\r\n        const usersData = this.users.map(user => user.toJSON())\r\n        localStorage.setItem(`userManager_${this.name}`, JSON.stringify(usersData))\r\n    }\r\n\r\n    loadUsers() {\r\n        const savedData = localStorage.getItem(`userManager_${this.name}`)\r\n\r\n        if (savedData){\r\n            const usersData = JSON.parse(savedData)\r\n\r\n            this.users = []\r\n\r\n            usersData.forEach(userData => {\r\n                let user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](userData.username, userData.password)\r\n                this.users.push(user)\r\n            })\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/services/UserManager.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/style.scss?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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