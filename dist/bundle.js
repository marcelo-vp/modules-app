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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bicycle.js":
/*!************************!*\
  !*** ./src/Bicycle.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dangers = {
  knockOver: function knockOver() {
    return "The bicycle ".concat(_this.brand, " ").concat(_this.model, " will be knocked over!");
  }
};

var Bicycle =
/*#__PURE__*/
function () {
  function Bicycle(brand, model) {
    _classCallCheck(this, Bicycle);

    this.brand = brand;
    this.model = model;
    this.currentGear = 1;
    this.changeGear = {
      up: this.gearUp.bind(this),
      down: this.gearDown.bind(this)
    };
  }

  _createClass(Bicycle, [{
    key: "showCurrentGear",
    value: function showCurrentGear() {
      return "Riding on gear ".concat(this.currentGear, "!");
    }
  }, {
    key: "startPedaling",
    value: function startPedaling() {
      return "".concat(this.brand, " ").concat(this.model, " is moving!");
    }
  }, {
    key: "inDanger",
    value: function inDanger() {
      return dangers.knockOver.call(this);
    }
  }, {
    key: "gearUp",
    value: function gearUp() {
      this.currentGear += 1;
    }
  }, {
    key: "gearDown",
    value: function gearDown() {
      this.currentGear -= 1;
    }
  }]);

  return Bicycle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bicycle);

/***/ }),

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.currentGear = 1;
  this.changeGear = {
    up: this.gearUp.bind(this),
    down: this.gearDown.bind(this)
  };

  this.showCurrentGear = function () {
    return this.brand + ' ' + this.model + ' is on gear ' + this.currentGear;
  };

  this.startEngine = function () {
    return this.brand + ' ' + this.model + ' has started!';
  };

  this.inDanger = function () {
    return selfDestroy.call(this);
  };
}

function selfDestroy() {
  return 'The car ' + this.brand + ' ' + this.model + ' will be destroyed!';
}

Car.prototype.gearUp = function () {
  this.currentGear += 1;
}; // Car.prototype.gearDown = function() {
//     this.currentGear -= 1;
// }


module.exports = Car;

/***/ }),

/***/ "./src/Motorcycle.js":
/*!***************************!*\
  !*** ./src/Motorcycle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bicycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bicycle */ "./src/Bicycle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var knockOver = Symbol('knockOver');

var Motorcycle =
/*#__PURE__*/
function (_Bicycle) {
  _inherits(Motorcycle, _Bicycle);

  function Motorcycle(brand, model) {
    _classCallCheck(this, Motorcycle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Motorcycle).call(this, brand, model));
  }

  _createClass(Motorcycle, [{
    key: "showCurrentGear",
    value: function showCurrentGear() {
      return "Driving on gear ".concat(this.currentGear, " and speeding up!");
    }
  }, {
    key: "pressHorn",
    value: function pressHorn() {
      return "Makes annoying horn sound!!";
    }
  }, {
    key: "gearUp",
    value: function gearUp() {
      _get(_getPrototypeOf(Motorcycle.prototype), "gearUp", this).call(this);

      return this.showCurrentGear();
    }
  }, {
    key: knockOver,
    value: function value() {
      return "The motorcycle ".concat(this.brand, " ").concat(this.model, " will be knocked over!");
    }
  }, {
    key: "inDanger",
    value: function inDanger() {
      return this[knockOver]();
    }
  }]);

  return Motorcycle;
}(_Bicycle__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Motorcycle);

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bicycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bicycle */ "./src/Bicycle.js");
/* harmony import */ var _Motorcycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Motorcycle */ "./src/Motorcycle.js");
var Car = __webpack_require__(/*! ./Car */ "./src/Car.js");




Car.prototype.gearDown = function () {
  this.currentGear -= 1;
};

var gol = new Car('VW', 'Gol');
var iguana = new _Bicycle__WEBPACK_IMPORTED_MODULE_0__["default"]('Giant', 'Iguana');
var yamaha = new _Motorcycle__WEBPACK_IMPORTED_MODULE_1__["default"]('Yamaha', 'Stryker');
/**
 *  Car example
 */
// console.log( gol.startEngine() );
// console.log( gol.showCurrentGear() );
// gol.changeGear.up();
// console.log( gol.showCurrentGear() );
// gol.changeGear.down();
// console.log( gol.showCurrentGear() );
// console.log( gol.inDanger() );

/**
 * Bicycle example
 */

console.log(iguana.startPedaling());
console.log(iguana.showCurrentGear());
iguana.changeGear.up();
console.log(iguana.showCurrentGear());
iguana.changeGear.down();
console.log(iguana.showCurrentGear());
console.log(iguana.inDanger());
/**
 * Motorcycle example
 */
// console.log( yamaha.startPedaling() );
// console.log( yamaha.changeGear.up() );
// console.log( yamaha.pressHorn() );
// console.log( yamaha.inDanger() );
// console.log( yamaha[knockOver]() ); // should throw an error

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JpY3ljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW90b3JjeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanMiXSwibmFtZXMiOlsiZGFuZ2VycyIsImtub2NrT3ZlciIsImJyYW5kIiwibW9kZWwiLCJCaWN5Y2xlIiwiY3VycmVudEdlYXIiLCJjaGFuZ2VHZWFyIiwidXAiLCJnZWFyVXAiLCJiaW5kIiwiZG93biIsImdlYXJEb3duIiwiY2FsbCIsIkNhciIsInNob3dDdXJyZW50R2VhciIsInN0YXJ0RW5naW5lIiwiaW5EYW5nZXIiLCJzZWxmRGVzdHJveSIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTeW1ib2wiLCJNb3RvcmN5Y2xlIiwiZ29sIiwiaWd1YW5hIiwieWFtYWhhIiwiY29uc29sZSIsImxvZyIsInN0YXJ0UGVkYWxpbmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFl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QTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeS5qc1wiKTtcbiIsImNvbnN0IGRhbmdlcnMgPSB7XG4gICAga25vY2tPdmVyOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIGJpY3ljbGUgJHt0aGlzLmJyYW5kfSAke3RoaXMubW9kZWx9IHdpbGwgYmUga25vY2tlZCBvdmVyIWA7XG4gICAgfVxufTtcblxuY2xhc3MgQmljeWNsZSB7XG4gICAgY29uc3RydWN0b3IoYnJhbmQsIG1vZGVsKSB7XG4gICAgICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLmN1cnJlbnRHZWFyID0gMTtcbiAgICAgICAgdGhpcy5jaGFuZ2VHZWFyID0ge1xuICAgICAgICAgICAgdXA6IHRoaXMuZ2VhclVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICBkb3duOiB0aGlzLmdlYXJEb3duLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2hvd0N1cnJlbnRHZWFyKCkge1xuICAgICAgICByZXR1cm4gYFJpZGluZyBvbiBnZWFyICR7dGhpcy5jdXJyZW50R2Vhcn0hYDtcbiAgICB9XG4gICAgc3RhcnRQZWRhbGluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYnJhbmR9ICR7dGhpcy5tb2RlbH0gaXMgbW92aW5nIWA7IFxuICAgIH1cbiAgICBpbkRhbmdlcigpIHtcbiAgICAgICAgcmV0dXJuIGRhbmdlcnMua25vY2tPdmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIGdlYXJVcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VhciArPSAxO1xuICAgIH1cbiAgICBnZWFyRG93bigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VhciAtPSAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmljeWNsZTtcbiIsImZ1bmN0aW9uIENhcihicmFuZCwgbW9kZWwpIHtcbiAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuY3VycmVudEdlYXIgPSAxO1xuICAgIHRoaXMuY2hhbmdlR2VhciA9IHtcbiAgICAgICAgdXA6IHRoaXMuZ2VhclVwLmJpbmQodGhpcyksXG4gICAgICAgIGRvd246IHRoaXMuZ2VhckRvd24uYmluZCh0aGlzKVxuICAgIH07XG4gICAgdGhpcy5zaG93Q3VycmVudEdlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJhbmQgKyAnICcgKyB0aGlzLm1vZGVsICsgJyBpcyBvbiBnZWFyICcgKyB0aGlzLmN1cnJlbnRHZWFyO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0RW5naW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyYW5kICsgJyAnICsgdGhpcy5tb2RlbCArICcgaGFzIHN0YXJ0ZWQhJztcbiAgICB9XG4gICAgdGhpcy5pbkRhbmdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gc2VsZkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxmRGVzdHJveSgpIHtcbiAgICByZXR1cm4gJ1RoZSBjYXIgJyArIHRoaXMuYnJhbmQgKyAnICcgKyB0aGlzLm1vZGVsICsgJyB3aWxsIGJlIGRlc3Ryb3llZCEnO1xufVxuXG5DYXIucHJvdG90eXBlLmdlYXJVcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudEdlYXIgKz0gMTtcbn1cbi8vIENhci5wcm90b3R5cGUuZ2VhckRvd24gPSBmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLmN1cnJlbnRHZWFyIC09IDE7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyO1xuIiwiaW1wb3J0IEJpY3ljbGUgZnJvbSAnLi9CaWN5Y2xlJztcblxuY29uc3Qga25vY2tPdmVyID0gU3ltYm9sKCdrbm9ja092ZXInKTtcblxuY2xhc3MgTW90b3JjeWNsZSBleHRlbmRzIEJpY3ljbGUge1xuICAgIGNvbnN0cnVjdG9yKGJyYW5kLCBtb2RlbCkge1xuICAgICAgICBzdXBlcihicmFuZCwgbW9kZWwpO1xuICAgIH1cbiAgICBzaG93Q3VycmVudEdlYXIoKSB7XG4gICAgICAgIHJldHVybiBgRHJpdmluZyBvbiBnZWFyICR7dGhpcy5jdXJyZW50R2Vhcn0gYW5kIHNwZWVkaW5nIHVwIWA7XG4gICAgfVxuICAgIHByZXNzSG9ybigpIHtcbiAgICAgICAgcmV0dXJuIGBNYWtlcyBhbm5veWluZyBob3JuIHNvdW5kISFgO1xuICAgIH1cbiAgICBnZWFyVXAoKSB7XG4gICAgICAgIHN1cGVyLmdlYXJVcCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudEdlYXIoKTtcbiAgICB9XG4gICAgW2tub2NrT3Zlcl0oKSB7XG4gICAgICAgIHJldHVybiBgVGhlIG1vdG9yY3ljbGUgJHt0aGlzLmJyYW5kfSAke3RoaXMubW9kZWx9IHdpbGwgYmUga25vY2tlZCBvdmVyIWA7XG4gICAgfVxuICAgIGluRGFuZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpc1trbm9ja092ZXJdKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3RvcmN5Y2xlO1xuIiwidmFyIENhciA9IHJlcXVpcmUoJy4vQ2FyJyk7XG5pbXBvcnQgQmljeWNsZSBmcm9tICcuL0JpY3ljbGUnO1xuaW1wb3J0IE1vdG9yY3ljbGUgZnJvbSAnLi9Nb3RvcmN5Y2xlJztcblxuQ2FyLnByb3RvdHlwZS5nZWFyRG93biA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudEdlYXIgLT0gMTtcbn1cblxudmFyIGdvbCA9IG5ldyBDYXIoJ1ZXJywgJ0dvbCcpO1xuY29uc3QgaWd1YW5hID0gbmV3IEJpY3ljbGUoJ0dpYW50JywgJ0lndWFuYScpO1xuY29uc3QgeWFtYWhhID0gbmV3IE1vdG9yY3ljbGUoJ1lhbWFoYScsICdTdHJ5a2VyJyk7XG5cbi8qKlxuICogIENhciBleGFtcGxlXG4gKi9cbi8vIGNvbnNvbGUubG9nKCBnb2wuc3RhcnRFbmdpbmUoKSApO1xuLy8gY29uc29sZS5sb2coIGdvbC5zaG93Q3VycmVudEdlYXIoKSApO1xuLy8gZ29sLmNoYW5nZUdlYXIudXAoKTtcbi8vIGNvbnNvbGUubG9nKCBnb2wuc2hvd0N1cnJlbnRHZWFyKCkgKTtcbi8vIGdvbC5jaGFuZ2VHZWFyLmRvd24oKTtcbi8vIGNvbnNvbGUubG9nKCBnb2wuc2hvd0N1cnJlbnRHZWFyKCkgKTtcbi8vIGNvbnNvbGUubG9nKCBnb2wuaW5EYW5nZXIoKSApO1xuXG4vKipcbiAqIEJpY3ljbGUgZXhhbXBsZVxuICovXG5jb25zb2xlLmxvZyggaWd1YW5hLnN0YXJ0UGVkYWxpbmcoKSApO1xuY29uc29sZS5sb2coIGlndWFuYS5zaG93Q3VycmVudEdlYXIoKSApO1xuaWd1YW5hLmNoYW5nZUdlYXIudXAoKTtcbmNvbnNvbGUubG9nKCBpZ3VhbmEuc2hvd0N1cnJlbnRHZWFyKCkgKTtcbmlndWFuYS5jaGFuZ2VHZWFyLmRvd24oKTtcbmNvbnNvbGUubG9nKCBpZ3VhbmEuc2hvd0N1cnJlbnRHZWFyKCkgKTtcbmNvbnNvbGUubG9nKCBpZ3VhbmEuaW5EYW5nZXIoKSApO1xuXG4vKipcbiAqIE1vdG9yY3ljbGUgZXhhbXBsZVxuICovXG4vLyBjb25zb2xlLmxvZyggeWFtYWhhLnN0YXJ0UGVkYWxpbmcoKSApO1xuLy8gY29uc29sZS5sb2coIHlhbWFoYS5jaGFuZ2VHZWFyLnVwKCkgKTtcbi8vIGNvbnNvbGUubG9nKCB5YW1haGEucHJlc3NIb3JuKCkgKTtcbi8vIGNvbnNvbGUubG9nKCB5YW1haGEuaW5EYW5nZXIoKSApO1xuLy8gY29uc29sZS5sb2coIHlhbWFoYVtrbm9ja092ZXJdKCkgKTsgLy8gc2hvdWxkIHRocm93IGFuIGVycm9yXG4iXSwic291cmNlUm9vdCI6IiJ9