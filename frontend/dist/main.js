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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\n/* harmony import */ var _modules_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\n/* harmony import */ var _modules_services_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services/UI */ \"./src/modules/services/UI.js\");\n/* harmony import */ var _modules_PremiumRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\");\n/* harmony import */ var _modules_services_UserManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/services/UserManager */ \"./src/modules/services/UserManager.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n\n\n\n\n\nconst hotel = new _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Grand_Budapesht\")\n__webpack_require__.g.hotelInstance = hotel\nconst userManager = new _modules_services_UserManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('1')\nlet currentUser = null\n\nconst savedUser = sessionStorage.getItem('loggedInUser')\nif (savedUser) {\n    let user = JSON.parse(savedUser).username\n    document.getElementById('authStatus').textContent = `Logged in as: ${user}`\n    document.getElementById('LogoutBtn').style.display = 'inline'\n    currentUser = user\n}\n\nif (hotel.rooms.length === 0){\n    const room101 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](101, 'single')\n    const room102 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](102, 'double')\n    const room103 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__[\"default\"](103, 'suite')\n    const room201 = new _modules_PremiumRoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"](201, 'single', 'gym free access')\n    \n    hotel.addRoom(room101)\n    hotel.addRoom(room102)\n    hotel.addRoom(room103)\n    hotel.addRoom(room201)\n\n    hotel.saveToLocalStorage() \n}\nelse { hotel.loadFromLocalStorage()}\n\nconst ui = new _modules_services_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"](hotel)\n\n__webpack_require__.g.loadRoomsWithReviews = async function() {\n    try {\n        const response = await fetch(\"http://localhost:3000/reviews\");\n        const reviews = await response.json();\n        ui.renderRooms(reviews);\n    } catch (error) {\n        console.error('Error loading reviews for rooms:', error);\n        ui.renderRooms([]);\n    }\n};\n\nloadRoomsWithReviews();\n\n__webpack_require__.g.bookRoom = function(number) {\n    if (currentUser) {\n        const room = hotel.rooms.find(r => r.number === number)\n        if (room){\n            let success = room.book()\n            if (success) {\n                room.bookedBy = currentUser\n                room.saveChanges()\n                alert(`Thanks for booking Room ${room.number}!\\nEntered card is : ${room.getMaskedCardNumber()}\\nBooked by: ${room.bookedBy}`)\n            }\n            else {\n                alert('Card number must contain 16 digits!')\n            }\n            loadRoomsWithReviews() \n        }\n    }\n}\n\n__webpack_require__.g.cancelBooking = function (number){\n    const room = hotel.rooms.find(r => r.number === number)\n\n    if (room) {\n        room.bookedBy = null\n        room.saveChanges()\n        alert(room.cancelBooking())\n        loadRoomsWithReviews() \n    }\n}\n\n__webpack_require__.g.loadRoomReviews = async function(number) {\n    const reviewsContainer = document.getElementById(`reviews-${number}`)\n\n    if (reviewsContainer.innerHTML) {\n        reviewsContainer.innerHTML = ''\n        return\n    }\n\n    try {\n        const response = await fetch('http://localhost:3000/reviews');\n        const reviews = await response.json();\n        \n        const sample = reviews\n            .filter(r => r.roomNumber === number)\n            .slice(0, 3);\n            \n        const reviewsHTML = sample.map(review => \n            `<div id=\"review-${review.id}\" class=\"review\">\n                <p><strong>${review.email}:</strong></p>\n                <p>${review.body}</p>\n                <div style=\"margin-top: 10px;\">\n                    <button onclick=\"editReview('${review.id}')\" style=\"margin-right: 5px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;\">Edit</button>\n                    <button onclick=\"deleteReview('${review.id}', ${review.roomNumber})\" style=\"padding: 5px 10px; background-color: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;\">Delete</button>\n                </div>\n            </div>`\n        ).join('')\n        \n        reviewsContainer.innerHTML = reviewsHTML || '<p>No reviews for this room yet.</p>'\n    } catch (error) {\n        reviewsContainer.innerHTML = `<p>Error loading reviews: ${error.message}</p>`\n    }\n};\n\n__webpack_require__.g.deleteReview = async function(id, roomNumber) {\n    const confirmed = confirm(\"Are you sure you want to delete this review?\");\n    \n    if (!confirmed) return;\n    \n    try {\n        const response = await fetch(`http://localhost:3000/reviews/${id}`, {\n            method: 'DELETE',\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n        \n        if (response.ok) {\n            alert(\"Review deleted!\");\n            loadRoomReviews(roomNumber);\n            loadRoomsWithReviews();\n        } else {\n            const errorData = await response.json().catch(() => null);\n            const errorMessage = errorData?.message || 'An error occurred while deleting the review.';\n            alert(`Failed to delete review: ${errorMessage}`);\n        }\n        \n    } catch (error) {\n        console.error('Error deleting review:', error);\n        alert(`Failed to delete review: ${error.message || 'Server connection error'}`);\n    }\n};\n\n__webpack_require__.g.editReview = async function(id) {\n    try {\n        const response = await fetch('http://localhost:3000/reviews');\n        const reviews = await response.json();\n        const currentReview = reviews.find(review => review.id === id);\n        \n        if (!currentReview) {\n            alert('No reviews found for editing');\n            return;\n        }\n        \n        const newEmail = prompt('Enter new email:', currentReview.email);\n        if (newEmail === null) return; \n        \n        const newRoomNumber = prompt('Enter the new room number:', currentReview.roomNumber);\n        if (newRoomNumber === null) return; \n        \n        const newBody = prompt('Enter new review content:', currentReview.body);\n        if (newBody === null) return; \n        \n        if (!newEmail.trim()) {\n            alert('Email must not be empty!');\n            return;\n        }\n        \n        if (!newRoomNumber.trim()) {\n            alert('The room number must not be blank!');\n            return;\n        }\n        \n        if (!newBody.trim()) {\n            alert('The content of the review must not be empty!');\n            return;\n        }\n        \n        const roomNumberInt = parseInt(newRoomNumber);\n        if (isNaN(roomNumberInt)) {\n            alert('The room number must be a number!');\n            return;\n        }\n        \n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(newEmail)) {\n            alert('Enter a valid email address!');\n            return;\n        }\n        \n        const roomExists = hotel.rooms.some(room => room.number === roomNumberInt);\n        if (!roomExists) {\n            alert(`Room ${roomNumberInt} does not exist in our hotel!`);\n            return;\n        }\n        \n        const updateResponse = await fetch(`http://localhost:3000/reviews/${id}`, {\n            method: 'PUT',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                email: newEmail.trim(),\n                roomNumber: roomNumberInt,\n                body: newBody.trim()\n            })\n        });\n        \n        if (updateResponse.ok) {\n            alert('The review has been successfully updated!');\n            \n            loadRoomReviews(roomNumberInt);\n            \n            if (roomNumberInt !== currentReview.roomNumber) {\n                loadRoomReviews(currentReview.roomNumber);\n            }\n            \n            loadRoomsWithReviews();\n        } else {\n            const errorData = await updateResponse.json().catch(() => null);\n            const errorMessage = errorData?.message || 'An error occurred while updating the review.';\n            alert(`Failed to update review: ${errorMessage}`);\n        }\n        \n    } catch (error) {\n        console.error('Error when editing reviews:', error);\n        alert(`Failed to update review: ${error.message || 'Server connection error'}`);\n    }\n};\n\n__webpack_require__.g.addReview = async function () {\n    const email = document.getElementById(\"reviewEmail\").value.trim();\n    const roomNumberInput = document.getElementById(\"reviewRoom\").value.trim();\n    const body = document.getElementById(\"reviewBody\").value.trim();\n    \n    if (!email) {\n        alert('Email is required.');\n        return;\n    }\n    \n    if (!roomNumberInput) {\n        alert('Room number is required.');\n        return;\n    }\n    \n    if (!body) {\n        alert('Review content is required.');\n        return;\n    }\n    \n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!emailRegex.test(email)) {\n        alert('Please enter a valid email address.');\n        return;\n    }\n    \n    const roomNumber = parseInt(roomNumberInput);\n    if (isNaN(roomNumber)) {\n        alert('Room number must be a valid number.');\n        return;\n    }\n    \n    const roomExists = hotel.rooms.some(room => room.number === roomNumber);\n    if (!roomExists) {\n        alert(`Room ${roomNumber} does not exist in our hotel.`);\n        return;\n    }\n    \n    try {\n        const response = await fetch('http://localhost:3000/reviews', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ roomNumber, email, body })\n        });\n        \n        if (response.ok) {\n            document.getElementById(\"reviewEmail\").value = '';\n            document.getElementById(\"reviewRoom\").value = '';\n            document.getElementById(\"reviewBody\").value = '';\n            \n            alert('Review added successfully!');\n            \n            loadRoomReviews(roomNumber);\n            loadRoomsWithReviews();\n        } else {\n            const errorData = await response.json().catch(() => null);\n            const errorMessage = errorData?.message || 'An error occurred while adding the review.';\n            alert(`Failed to add review: ${errorMessage}`);\n        }\n    } catch (error) {\n        console.error('Error adding review:', error);\n        alert(`Failed to add review: ${error.message || 'Server connection error'}`);\n    }\n};\n\n__webpack_require__.g.registerUser = async function() {\n    let username = document.getElementById('username').value\n    let password = document.getElementById('password').value\n\n    if (!username || !password) {\n        alert('Please enter both username and password');\n        return;\n    }\n\n    let successful = await userManager.register(username, password)\n    if (successful) {\n        document.getElementById('authStatus').textContent = `Registered: ${username}`\n        document.getElementById('username').value = '';\n        document.getElementById('password').value = '';\n    }\n}\n\n__webpack_require__.g.loginUser = async function() {\n    let username = document.getElementById('username').value\n    let password = document.getElementById('password').value\n\n    if (!username || !password) {\n        alert('Please enter both username and password');\n        return;\n    }\n\n    let successful = await userManager.login(username, password)\n    if (successful) {\n        sessionStorage.setItem('loggedInUser', JSON.stringify({'username':username, 'password':password}))\n        document.getElementById('authStatus').textContent = `Logged in as: ${username}`\n        document.getElementById('LogoutBtn').style.display = 'inline'\n        currentUser = username\n        \n        document.getElementById('username').value = '';\n        document.getElementById('password').value = '';\n        \n        loadRoomsWithReviews() \n    }\n}\n\n__webpack_require__.g.logoutUser = function() {\n    sessionStorage.removeItem('loggedInUser')\n    currentUser = null\n    document.getElementById('authStatus').textContent = 'Not logged in'\n    document.getElementById('LogoutBtn').style.display = 'none'\n    loadRoomsWithReviews() \n    location.reload()\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hotel)\n/* harmony export */ });\n/* harmony import */ var _Room_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.js */ \"./src/modules/Room.js\");\n/* harmony import */ var _PremiumRoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PremiumRoom.js */ \"./src/modules/PremiumRoom.js\");\n\n\n\nclass Hotel {\n    constructor(name) {\n        this.rooms = [];\n        this.name = name;\n        this.loadFromLocalStorage();\n    }\n\n    addRoom(room) {\n        this.rooms.push(room);\n        return `Room ${room.number} has been added`;\n    }\n\n    getAvailableRooms() {\n        return this.rooms.filter(room => room.isAvailable);\n    }\n\n    saveToLocalStorage(){\n        const roomsData = this.rooms.map(room => {\n            const roomData = {\n                number: room.number,\n                type: room.type,\n                isAvailable: room.isAvailable\n            };\n\n            if (room.bookedBy){\n                roomData.bookedBy = room.bookedBy;\n            }\n\n            if (room.premiumFeature){\n                roomData.premiumFeature = room.premiumFeature;\n            }\n            return roomData;\n        });\n\n        localStorage.setItem(`hotel_${this.name}`, JSON.stringify(roomsData));\n    }\n\n    loadFromLocalStorage(){\n        if (typeof localStorage === 'undefined') {\n            return;\n        }\n        \n        const savedData = localStorage.getItem(`hotel_${this.name}`);\n\n        if (savedData){\n            const roomsData = JSON.parse(savedData);\n\n            this.rooms = [];\n\n            roomsData.forEach(roomData => {\n                let room;\n\n                if (roomData.premiumFeature){\n                    room = new _PremiumRoom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](roomData.number, roomData.type, roomData.premiumFeature);\n                }\n                else {\n                    room = new _Room_js__WEBPACK_IMPORTED_MODULE_0__.Room(roomData.number, roomData.type);\n                }\n\n                room.isAvailable = roomData.isAvailable;\n\n                if (roomData.bookedBy) \n                    room.bookedBy = roomData.bookedBy;\n\n                this.rooms.push(room);\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PremiumRoom)\n/* harmony export */ });\n/* harmony import */ var _Room_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.js */ \"./src/modules/Room.js\");\n\n\nclass PremiumRoom extends _Room_js__WEBPACK_IMPORTED_MODULE_0__.Room {\n    constructor(number, type, premiumFeature){\n        super(number, type)\n        this.premiumFeature = premiumFeature\n    }\n\n    book(){\n        return super.book()\n    }\n\n    cancelBooking(){\n        return super.cancelBooking()\n    }\n\n    getMaskedCardNumber(){\n        return super.getMaskedCardNumber()\n    }\n\n    setCardNumber(number) {\n        return super.setCardNumber(number)\n    }\n}\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Room: () => (/* binding */ Room),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Room {\n    #cardNumber;\n\n    constructor(number, type) {\n        this.number = number\n        this.type = type\n        this.isAvailable = true\n        this.bookedBy;\n    }\n    \n    book() {\n        this.setCardNumber(prompt(\"Enter your card: \"))\n\n        if (this.#cardNumber) {\n            this.isAvailable = false\n            this.saveChanges()\n            return true\n        }\n        else \n            return false\n    }\n    \n    cancelBooking() {\n        this.#cardNumber = null\n        this.isAvailable = true\n        this.saveChanges()\n        return `Room ${this.number} is free`\n    }\n\n    saveChanges(){\n        if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.hotelInstance && __webpack_require__.g.hotelInstance.saveToLocalStorage) {\n            __webpack_require__.g.hotelInstance.saveToLocalStorage()\n        }\n    }\n\n    setCardNumber(number){\n        if (/^\\d{16}$/.test(number)) {\n            this.#cardNumber = number;\n        }\n    }\n\n    getMaskedCardNumber() { \n        return this.#cardNumber ? '**** **** **** ' + this.#cardNumber.slice(-4) : '';\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    #password;\n\n    constructor(username, password){\n        this.username = username\n        this.setPassword(password)\n    }\n\n    setPassword(password) {\n        if (password.length < 6){\n            throw new Error('Hasło musi być większe niż 6 znaków!')\n        }\n        this.#password = password\n    }\n\n    getPassword() {\n        return this.#password\n    }\n\n    validatePassword(password){\n        if (password === this.getPassword()) {\n            return true\n        }\n    }\n\n    toJSON() {\n        return {\n            username : this.username,\n            password : this.getPassword()\n        }\n    }\n}\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/User.js?");

/***/ }),

/***/ "./src/modules/services/UI.js":
/*!************************************!*\
  !*** ./src/modules/services/UI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n    constructor(hotel) {\n        this.hotel = hotel;\n    }\n    \n    renderRooms(reviews = []) {\n        const container = document.getElementById(\"roomsContainer\");\n        container.innerHTML = \"\";\n        \n        const isLoggedIn = sessionStorage.getItem('loggedInUser') !== null;\n        const currentUser = isLoggedIn ? JSON.parse(sessionStorage.getItem('loggedInUser')).username : null;\n\n        this.hotel.rooms.forEach(room => {\n            const isPremium = room.premiumFeature ? `<p><strong>Premium Service:</strong> ${room.premiumFeature}</p>` : \"\"\n            const premiumClass = room.premiumFeature ? \"premium-room\" : \"\"\n            const bookedBy = room.bookedBy ? `<p><strong>Booked by:</strong> ${room.bookedBy}</p>` : \"\";\n            \n            const count = reviews.filter(r => r.roomNumber === room.number).length;\n            const reviewsInfo = count === 0 ? \"No reviews yet\" : `${count} review${count === 1 ? '' : 's'}`;\n            \n            const bookDisabled = !isLoggedIn || !room.isAvailable ? \"disabled\" : \"\";\n            const cancelDisabled = room.isAvailable || !isLoggedIn || (room.bookedBy !== currentUser) ? \"disabled\" : \"\";\n\n            const roomDiv = document.createElement(\"div\");\n            roomDiv.id = `room-${room.number}`;\n            roomDiv.className = `Room ${premiumClass} ${room.isAvailable ? \"available\" : \"booked\"}`;\n            roomDiv.innerHTML = `\n                <h3>Room ${room.number} (${room.type})</h3>\n                <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\n                <p><strong>Reviews:</strong> ${reviewsInfo}</p>\n                ${isPremium}\n                ${bookedBy}\n                <div class=\"room-actions\">\n                    <button onclick=\"bookRoom(${room.number})\" ${bookDisabled}>Book</button>\n                    <button onclick=\"cancelBooking(${room.number})\" ${cancelDisabled}>Cancel</button>\n                    <button onclick=\"loadRoomReviews(${room.number})\">Load Reviews</button>\n                </div>\n                <div id=\"reviews-${room.number}\" class=\"reviews-container\"></div>\n            `;\n            container.appendChild(roomDiv);\n        });\n    }\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/services/UI.js?");

/***/ }),

/***/ "./src/modules/services/UserManager.js":
/*!*********************************************!*\
  !*** ./src/modules/services/UserManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserManager)\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../User */ \"./src/modules/User.js\");\n\n\nclass UserManager {\n    constructor(name) {\n        this.name = name\n        this.users = [];\n        this.loadUsers()\n    }\n\n    async register(uname, password) {\n        try {\n            const response = await fetch(\"http://localhost:3000/signup\", {\n                method: \"POST\",\n                headers: { \"Content-Type\": \"application/json\" },\n                body: JSON.stringify({ username: uname, password })\n            });\n\n            const data = await response.json();\n\n            if (response.ok) {\n                let user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](uname, password)\n                this.users.push(user)\n                this.saveUsers()\n                return true;\n            } else {\n                alert(data.message || \"Registration failed\");\n                return false;\n            }\n        } catch (error) {\n            console.error('Registration error:', error);\n            alert(\"Registration failed: Server connection error\");\n            return false;\n        }\n    }\n\n    async login(username, password) {\n        try {\n            const response = await fetch(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: { \"Content-Type\": \"application/json\" },\n                body: JSON.stringify({ username, password })\n            });\n\n            const data = await response.json();\n\n            if (response.ok) {\n                return true;\n            } else {\n                alert(data.message || \"Login failed\");\n                return false;\n            }\n        } catch (error) {\n            console.error('Login error:', error);\n            alert(\"Login failed: Server connection error\");\n            return false;\n        }\n    }\n\n    saveUsers() {\n        const usersData = this.users.map(user => user.toJSON())\n        localStorage.setItem(`userManager_${this.name}`, JSON.stringify(usersData))\n    }\n\n    loadUsers() {\n        const savedData = localStorage.getItem(`userManager_${this.name}`)\n\n        if (savedData){\n            const usersData = JSON.parse(savedData)\n\n            this.users = []\n\n            usersData.forEach(userData => {\n                let user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](userData.username, userData.password)\n                this.users.push(user)\n            })\n        }\n    }\n}\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/services/UserManager.js?");

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