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

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vehicles_Bicycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles/Bicycle */ "./src/vehicles/Bicycle.js");
var Car = __webpack_require__(/*! ./vehicles/Car */ "./src/vehicles/Car.js");


var gol = new Car('VW', 'Gol');
var iguana = new _vehicles_Bicycle__WEBPACK_IMPORTED_MODULE_0__["default"]('Giant', 'Iguana');
/**
 *  Car example
 */

console.log(gol.startEngine());
console.log(gol.showCurrentGear());
gol.changeGear.up();
console.log(gol.showCurrentGear());
gol.changeGear.down();
console.log(gol.showCurrentGear());
console.log(gol.inDanger());
/**
 * Bicycle example
 */
// console.log( iguana.startPedaling() );
// console.log( iguana.showCurrentGear() );
// iguana.changeGear.up();
// console.log( iguana.showCurrentGear() );
// iguana.changeGear.down();
// console.log( iguana.showCurrentGear() );
// console.log( iguana.inDanger() );

/***/ }),

/***/ "./src/vehicles/Bicycle.js":
/*!*********************************!*\
  !*** ./src/vehicles/Bicycle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dangers = {
  knockOver: function knockOver() {
    return "The bicycle ".concat(this.brand, " ").concat(this.model, " will be knocked over!");
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

/***/ "./src/vehicles/Car.js":
/*!*****************************!*\
  !*** ./src/vehicles/Car.js ***!
  \*****************************/
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
};

Car.prototype.gearDown = function () {
  this.currentGear -= 1;
};

module.exports = Car;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy92ZWhpY2xlcy9CaWN5Y2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWhpY2xlcy9DYXIuanMiXSwibmFtZXMiOlsiQ2FyIiwiZ29sIiwiaWd1YW5hIiwiY29uc29sZSIsImxvZyIsInN0YXJ0RW5naW5lIiwic2hvd0N1cnJlbnRHZWFyIiwiY2hhbmdlR2VhciIsInVwIiwiZG93biIsImluRGFuZ2VyIiwiZGFuZ2VycyIsImtub2NrT3ZlciIsImJyYW5kIiwibW9kZWwiLCJCaWN5Y2xlIiwiY3VycmVudEdlYXIiLCJnZWFyVXAiLCJiaW5kIiwiZ2VhckRvd24iLCJjYWxsIiwic2VsZkRlc3Ryb3kiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtB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QUZEO0FBR0g7O0FBQ0QsU0FBU0MsV0FBVCxHQUF1QjtBQUNuQixTQUFPLGFBQWEsS0FBS1IsS0FBbEIsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBS0MsS0FBckMsR0FBNkMscUJBQXBEO0FBQ0g7O0FBRURkLEdBQUcsQ0FBQ3NCLFNBQUosQ0FBY0wsTUFBZCxHQUF1QixZQUFXO0FBQzlCLE9BQUtELFdBQUwsSUFBb0IsQ0FBcEI7QUFDSCxDQUZEOztBQUdBaEIsR0FBRyxDQUFDc0IsU0FBSixDQUFjSCxRQUFkLEdBQXlCLFlBQVc7QUFDaEMsT0FBS0gsV0FBTCxJQUFvQixDQUFwQjtBQUNILENBRkQ7O0FBSUFPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhCLEdBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJ2YXIgQ2FyID0gcmVxdWlyZSgnLi92ZWhpY2xlcy9DYXInKTtcbmltcG9ydCBCaWN5Y2xlIGZyb20gJy4vdmVoaWNsZXMvQmljeWNsZSc7XG5cbnZhciBnb2wgPSBuZXcgQ2FyKCdWVycsICdHb2wnKTtcbmNvbnN0IGlndWFuYSA9IG5ldyBCaWN5Y2xlKCdHaWFudCcsICdJZ3VhbmEnKTtcblxuLyoqXG4gKiAgQ2FyIGV4YW1wbGVcbiAqL1xuY29uc29sZS5sb2coIGdvbC5zdGFydEVuZ2luZSgpICk7XG5jb25zb2xlLmxvZyggZ29sLnNob3dDdXJyZW50R2VhcigpICk7XG5nb2wuY2hhbmdlR2Vhci51cCgpO1xuY29uc29sZS5sb2coIGdvbC5zaG93Q3VycmVudEdlYXIoKSApO1xuZ29sLmNoYW5nZUdlYXIuZG93bigpO1xuY29uc29sZS5sb2coIGdvbC5zaG93Q3VycmVudEdlYXIoKSApO1xuY29uc29sZS5sb2coIGdvbC5pbkRhbmdlcigpICk7XG5cbi8qKlxuICogQmljeWNsZSBleGFtcGxlXG4gKi9cbi8vIGNvbnNvbGUubG9nKCBpZ3VhbmEuc3RhcnRQZWRhbGluZygpICk7XG4vLyBjb25zb2xlLmxvZyggaWd1YW5hLnNob3dDdXJyZW50R2VhcigpICk7XG4vLyBpZ3VhbmEuY2hhbmdlR2Vhci51cCgpO1xuLy8gY29uc29sZS5sb2coIGlndWFuYS5zaG93Q3VycmVudEdlYXIoKSApO1xuLy8gaWd1YW5hLmNoYW5nZUdlYXIuZG93bigpO1xuLy8gY29uc29sZS5sb2coIGlndWFuYS5zaG93Q3VycmVudEdlYXIoKSApO1xuLy8gY29uc29sZS5sb2coIGlndWFuYS5pbkRhbmdlcigpICk7XG4iLCJjb25zdCBkYW5nZXJzID0ge1xuICAgIGtub2NrT3ZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBgVGhlIGJpY3ljbGUgJHt0aGlzLmJyYW5kfSAke3RoaXMubW9kZWx9IHdpbGwgYmUga25vY2tlZCBvdmVyIWA7XG4gICAgfVxufTtcblxuY2xhc3MgQmljeWNsZSB7XG4gICAgY29uc3RydWN0b3IoYnJhbmQsIG1vZGVsKSB7XG4gICAgICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLmN1cnJlbnRHZWFyID0gMTtcbiAgICAgICAgdGhpcy5jaGFuZ2VHZWFyID0ge1xuICAgICAgICAgICAgdXA6IHRoaXMuZ2VhclVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICBkb3duOiB0aGlzLmdlYXJEb3duLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2hvd0N1cnJlbnRHZWFyKCkge1xuICAgICAgICByZXR1cm4gYFJpZGluZyBvbiBnZWFyICR7dGhpcy5jdXJyZW50R2Vhcn0hYDtcbiAgICB9XG4gICAgc3RhcnRQZWRhbGluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYnJhbmR9ICR7dGhpcy5tb2RlbH0gaXMgbW92aW5nIWA7IFxuICAgIH1cbiAgICBpbkRhbmdlcigpIHtcbiAgICAgICAgcmV0dXJuIGRhbmdlcnMua25vY2tPdmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIGdlYXJVcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VhciArPSAxO1xuICAgIH1cbiAgICBnZWFyRG93bigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VhciAtPSAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmljeWNsZTtcbiIsImZ1bmN0aW9uIENhcihicmFuZCwgbW9kZWwpIHtcbiAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuY3VycmVudEdlYXIgPSAxO1xuICAgIHRoaXMuY2hhbmdlR2VhciA9IHtcbiAgICAgICAgdXA6IHRoaXMuZ2VhclVwLmJpbmQodGhpcyksXG4gICAgICAgIGRvd246IHRoaXMuZ2VhckRvd24uYmluZCh0aGlzKVxuICAgIH07XG4gICAgdGhpcy5zaG93Q3VycmVudEdlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJhbmQgKyAnICcgKyB0aGlzLm1vZGVsICsgJyBpcyBvbiBnZWFyICcgKyB0aGlzLmN1cnJlbnRHZWFyO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0RW5naW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyYW5kICsgJyAnICsgdGhpcy5tb2RlbCArICcgaGFzIHN0YXJ0ZWQhJztcbiAgICB9XG4gICAgdGhpcy5pbkRhbmdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gc2VsZkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxmRGVzdHJveSgpIHtcbiAgICByZXR1cm4gJ1RoZSBjYXIgJyArIHRoaXMuYnJhbmQgKyAnICcgKyB0aGlzLm1vZGVsICsgJyB3aWxsIGJlIGRlc3Ryb3llZCEnO1xufVxuXG5DYXIucHJvdG90eXBlLmdlYXJVcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudEdlYXIgKz0gMTtcbn1cbkNhci5wcm90b3R5cGUuZ2VhckRvd24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRHZWFyIC09IDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==