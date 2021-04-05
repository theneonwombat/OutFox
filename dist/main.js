/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  Object(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__["DOMExample"])();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}

/***/ }),

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/*! exports provided: DOMExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMExample", function() { return DOMExample; });
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");

var DOMExample = function DOMExample() {
  var _testObj$key;

  var testObj = {
    key1: "hi",
    key2: {
      key3: "Hello"
    }
  };
  var greeting = (testObj === null || testObj === void 0 ? void 0 : (_testObj$key = testObj.key2) === null || _testObj$key === void 0 ? void 0 : _testObj$key.key3) || testObj.key1;
  document.body.classList.add("center");
  var randomCard = document.createElement("div");
  randomCard.classList.add("card", "center", "rando");
  var winnerP = document.createElement("p");
  var randomButton = document.createElement("btn");
  randomButton.innerText = "Pick Me!";
  randomCard.append(randomButton, winnerP);
  document.body.append(randomCard);

  randomButton.onclick = function (e) {
    e.preventDefault();
    winnerP.innerHTML = randomJobSeeker();
  };

  var card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = "<h2>".concat(greeting, " World!</h2>");
  document.body.append(card);
  var imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  var imgElement = document.createElement("img");
  imgElement.src = buildAssetPath(_images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
}; // to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
} // function  randomJobSeeker() {
//   let jobSeekers = (process.env.NODE_ENV === 'development') ?
//     require('../../secret').JOBSEEKERS :
//     [
//       "Arthur Dent",
//       "Ford Prefect",
//       "Zaphod Beeblebrox",
//       "Marvin the Paranoid Android",
//       "Trillian",
//       "Slartibartfast",
//     ];
//   const winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
//   return winner;
// }

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy95b2RhLXN0aXRjaC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0RPTUV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRDYW52YXMiLCJzdGFydERPTSIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsImNsZWFyRGVtbyIsIkRPTUV4YW1wbGUiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwic3F1YXJlcyIsIlNxdWFyZSIsImN0eCIsImNvb3JkcyIsImZpbGxDb2xvciIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImNsZWFyQ2FudmFzIiwiZm9yRWFjaCIsInNxIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlubmVyV2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsInB1c2giLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzZXRDb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwibWFwIiwiY28iLCJsZW5ndGgiLCJwb3AiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwidGVzdE9iaiIsImtleTEiLCJrZXkyIiwia2V5MyIsImdyZWV0aW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmFuZG9tQ2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5uZXJQIiwicmFuZG9tQnV0dG9uIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwib25jbGljayIsImUiLCJpbm5lckhUTUwiLCJyYW5kb21Kb2JTZWVrZXIiLCJjYXJkIiwiaW1nQ2FyZCIsImFwcGVuZENoaWxkIiwiaW1nRWxlbWVudCIsInNyYyIsImJ1aWxkQXNzZXRQYXRoIiwic3RpdGNoQW5kWW9kYSIsInN0eWxlIiwib2JqZWN0Rml0IiwiZmlsdGVyIiwiaW1nU3JjIiwicHJvcHMiLCJhbmltYXRpb25EaXIiLCJ3aWR0aCIsImhlaWdodCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY29vcmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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O0FBQ2QsV0FBS3RFLFNBQUwsR0FBaUJzRSxLQUFqQjtBQUNBckYsY0FBUSxDQUFDK0MsSUFBVCxDQUFjNEIsS0FBZCxDQUFvQlcsZUFBcEIsR0FBc0NELEtBQXRDO0FBQ0FyRixjQUFRLENBQUMrQyxJQUFULENBQWM0QixLQUFkLENBQW9CRSxNQUFwQjtBQUNEOzs7Ozs7QUFHWXBFLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q01HLE07QUFDSixrQkFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBMEM7QUFBQSxRQUFqQnVFLEtBQWlCLHVFQUFULE9BQVM7O0FBQUE7O0FBQ3hDLFNBQUt4RSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLdUUsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0wsWUFBTCxHQUFvQixDQUFwQjtBQUNEOzs7O1dBRUQsc0JBQWE7QUFBQTs7QUFDWCxXQUFLbkUsR0FBTCxDQUFTMEUsU0FBVCxHQUFxQixLQUFLRixLQUExQjs7QUFDQSx3QkFBS3hFLEdBQUwsRUFBUzJFLFFBQVQscUNBQXFCLEtBQUsxRSxNQUExQjtBQUNEOzs7V0FDRCxzQkFBYXVFLEtBQWIsRUFBb0I7QUFBQTs7QUFDbEIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS3ZFLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVl3QixHQUFaLENBQWdCLFVBQUNtRCxLQUFEO0FBQUEsZUFBWUEsS0FBSyxJQUFJLElBQUksS0FBSSxDQUFDVCxZQUE5QjtBQUFBLE9BQWhCLENBQWQ7QUFDRDs7O1dBRUQsNEJBQW1CO0FBQ2pCLFdBQUtBLFlBQUwsSUFBcUIsQ0FBQyxDQUF0QjtBQUNEOzs7Ozs7QUFHWXBFLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiO1xuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCB7IERPTUV4YW1wbGUgfSBmcm9tIFwiLi9zY3JpcHRzL0RPTUV4YW1wbGVcIjtcbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1kZW1vXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydENhbnZhcyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0RPTS1kZW1vXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydERPTSk7XG5cbmZ1bmN0aW9uIHN0YXJ0RE9NKCkge1xuICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgY2xlYXJEZW1vKCk7XG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiRE9NREVNT1wiO1xuICBET01FeGFtcGxlKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuICBjbGVhckRlbW8oKTtcbiAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4gIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgXCJ3aW5kb3dcIixcbiAgICBcImtleWRvd25cIixcbiAgICBoYW5kbGVLZXlEb3duLFxuICBdKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgIFwid2luZG93XCIsXG4gICAgXCJtb3VzZWRvd25cIixcbiAgICBoYW5kbGVNb3VzZURvd24sXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbiAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNxdWFyZXMucHVzaChcbiAgICAgIG5ldyBTcXVhcmUoXG4gICAgICAgIGNhbnZhcy5jdHgsXG4gICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4gICAgICAgIGNhbnZhcy5maWxsQ29sb3JcbiAgICAgIClcbiAgICApO1xuICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBsZXQgW1xuICAgICAgc2VsZWN0b3IsXG4gICAgICBldmVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBzdGl0Y2hBbmRZb2RhIGZyb20gXCIuLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG5cbmV4cG9ydCBjb25zdCBET01FeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB0ZXN0T2JqID0ge1xuICAgIGtleTE6IFwiaGlcIixcbiAgICBrZXkyOiB7XG4gICAgICBrZXkzOiBcIkhlbGxvXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4gIGNvbnN0IHJhbmRvbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByYW5kb21DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwicmFuZG9cIik7XG4gIGNvbnN0IHdpbm5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcbiAgcmFuZG9tQnV0dG9uLmlubmVyVGV4dCA9IFwiUGljayBNZSFcIjtcbiAgcmFuZG9tQ2FyZC5hcHBlbmQocmFuZG9tQnV0dG9uLCB3aW5uZXJQKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmFuZG9tQ2FyZCk7XG4gIHJhbmRvbUJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2lubmVyUC5pbm5lckhUTUwgPSByYW5kb21Kb2JTZWVrZXIoKTtcbiAgfTtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4gIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCE8L2gyPmA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcImltYWdlLWNhcmRcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWdFbGVtZW50LnNyYyA9IGJ1aWxkQXNzZXRQYXRoKHN0aXRjaEFuZFlvZGEpO1xuICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuICBpbWdFbGVtZW50LnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcbiAgaW1nRWxlbWVudC5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSg4MCUpXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gIFxufTtcblxuLy8gdG8gcmVzb2x2ZSBwYXRoIGlzc3VlcyBmb3IgaW1hZ2VzIGluIEpTXG5cbmZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xufVxuXG4vLyBmdW5jdGlvbiAgcmFuZG9tSm9iU2Vla2VyKCkge1xuLy8gICBsZXQgam9iU2Vla2VycyA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgP1xuLy8gICAgIHJlcXVpcmUoJy4uLy4uL3NlY3JldCcpLkpPQlNFRUtFUlMgOlxuLy8gICAgIFtcbi8vICAgICAgIFwiQXJ0aHVyIERlbnRcIixcbi8vICAgICAgIFwiRm9yZCBQcmVmZWN0XCIsXG4vLyAgICAgICBcIlphcGhvZCBCZWVibGVicm94XCIsXG4vLyAgICAgICBcIk1hcnZpbiB0aGUgUGFyYW5vaWQgQW5kcm9pZFwiLFxuLy8gICAgICAgXCJUcmlsbGlhblwiLFxuLy8gICAgICAgXCJTbGFydGliYXJ0ZmFzdFwiLFxuLy8gICAgIF07XG4vLyAgIGNvbnN0IHdpbm5lciA9IGpvYlNlZWtlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogam9iU2Vla2Vycy5sZW5ndGgpXTtcbi8vICAgcmV0dXJuIHdpbm5lcjtcbi8vIH1cblxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbMTAsIDEwLCAxNTAsIDEwMF07XG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIHRoaXMuZmlsbENvbG9yID0gYGdyZWVuYDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cbiAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIC8vIH1cbiAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAvLyB9XG5cbiAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgLy8gfVxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gIH1cblxuICBkcmF3U3F1YXJlKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICB9XG4gIHVwZGF0ZVNxdWFyZShjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==