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

/***/ "./src/design-patterns/Singleton.js":
/*!******************************************!*\
  !*** ./src/design-patterns/Singleton.js ***!
  \******************************************/
/*! exports provided: basicSingleton, SingletonTester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicSingleton", function() { return basicSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonTester", function() { return SingletonTester; });
/**
 * Singleton Pattern
*/
var basicSingleton = function () {
  var instance;

  function init() {
    var privateVariable = 'I am private.';
    var privateRandomNumber = Math.random();

    function privateMethod() {
      console.log('I am also private!');
    }

    return {
      publicMethod: function publicMethod() {
        console.log('I am public, so you can see me!');
      },
      publicProperty: 'I am a public property',
      getPrivateNumber: function getPrivateNumber() {
        return privateRandomNumber;
      }
    };
  } // Returns a Revealing Module pattern
  // as the Singleton instance


  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
}();

var SingletonTester = function () {
  function Singleton(options) {
    var options = options || {};
    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  var instance;
  var _static = {
    name: 'SingletonTester',
    getInstance: function getInstance(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }

      return instance;
    } // Returns an instance of the 'Singleton' Constructor patern

  };
  return _static;
}();


/*
** Usage: **

import { basicSingleton, SingletonTester } from './design-patterns/Singleton';

var singletonOne = basicSingleton.getInstance();
var singletonTwo = basicSingleton.getInstance();
var privateNumberOne = singletonOne.getPrivateNumber();
var privateNumberTwo = singletonTwo.getPrivateNumber();

console.log( privateNumberOne === privateNumberTwo );
// Returns true, because both 'singletonOne' and
// 'singletonTwo' hold the same Singleton instance

var singletonTestOne = SingletonTester.getInstance({
    pointX: 4,
    pointY: 25
});
var singletonTestTwo = SingletonTester.getInstance();

console.log( singletonTestOne.name );   // returns 'SingletonTester'
console.log( singletonTestOne.pointX );     // returns 4
console.log( singletonTestOne.pointX === singletonTestTwo.pointX );  // returns true
console.log( singletonTestOne.pointY );     // returns 25
console.log( singletonTestOne.pointY === singletonTestTwo.pointY );  // returns true

// The comparisons between property values return 'true' because singletonTestTwo
// holds the same Singleton instance of singletonTestOne.
// Therefore the Singleton pattern served its purpose.

*/

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_patterns_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design-patterns/Singleton */ "./src/design-patterns/Singleton.js");

var singletonOne = _design_patterns_Singleton__WEBPACK_IMPORTED_MODULE_0__["basicSingleton"].getInstance();
var singletonTwo = _design_patterns_Singleton__WEBPACK_IMPORTED_MODULE_0__["basicSingleton"].getInstance();
var privateNumberOne = singletonOne.getPrivateNumber();
var privateNumberTwo = singletonTwo.getPrivateNumber();
console.log(privateNumberOne === privateNumberTwo); // Returns true, because both 'singletonOne' and
// 'singletonTwo' hold the same Singleton instance

var singletonTestOne = _design_patterns_Singleton__WEBPACK_IMPORTED_MODULE_0__["SingletonTester"].getInstance({
  pointX: 4,
  pointY: 25
});
var singletonTestTwo = _design_patterns_Singleton__WEBPACK_IMPORTED_MODULE_0__["SingletonTester"].getInstance();
console.log(singletonTestOne.name);
console.log(singletonTestOne.name === singletonTestTwo.name);
console.log(singletonTestOne.pointX);
console.log(singletonTestOne.pointX === singletonTestTwo.pointX);
console.log(singletonTestOne.pointY);
console.log(singletonTestOne.pointY === singletonTestTwo.pointY);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbi1wYXR0ZXJucy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIl0sIm5hbWVzIjpbImJhc2ljU2luZ2xldG9uIiwiaW5zdGFuY2UiLCJpbml0IiwicHJpdmF0ZVZhcmlhYmxlIiwicHJpdmF0ZVJhbmRvbU51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJwcml2YXRlTWV0aG9kIiwiY29uc29sZSIsImxvZyIsInB1YmxpY01ldGhvZCIsInB1YmxpY1Byb3BlcnR5IiwiZ2V0UHJpdmF0ZU51bWJlciIsImdldEluc3RhbmNlIiwiU2luZ2xldG9uVGVzdGVyIiwiU2luZ2xldG9uIiwib3B0aW9ucyIsIm5hbWUiLCJwb2ludFgiLCJwb2ludFkiLCJfc3RhdGljIiwidW5kZWZpbmVkIiwic2luZ2xldG9uT25lIiwic2luZ2xldG9uVHdvIiwicHJpdmF0ZU51bWJlck9uZSIsInByaXZhdGVOdW1iZXJUd28iLCJzaW5nbGV0b25UZXN0T25lIiwic2luZ2xldG9uVGVzdFR3byJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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LE1BQTlCO0FBQ0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFhaUIsZ0JBQWdCLENBQUNSLE1BQWpCLEtBQTRCUyxnQkFBZ0IsQ0FBQ1QsTUFBMUQ7QUFDQVYsT0FBTyxDQUFDQyxHQUFSLENBQWFpQixnQkFBZ0IsQ0FBQ1AsTUFBOUI7QUFDQVgsT0FBTyxDQUFDQyxHQUFSLENBQWFpQixnQkFBZ0IsQ0FBQ1AsTUFBakIsS0FBNEJRLGdCQUFnQixDQUFDUixNQUExRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiLyoqXG4gKiBTaW5nbGV0b24gUGF0dGVyblxuKi9cblxudmFyIGJhc2ljU2luZ2xldG9uID0gKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIHZhciBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBwcml2YXRlVmFyaWFibGUgPSAnSSBhbSBwcml2YXRlLic7XG4gICAgICAgIHZhciBwcml2YXRlUmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICBmdW5jdGlvbiBwcml2YXRlTWV0aG9kKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coICdJIGFtIGFsc28gcHJpdmF0ZSEnICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHVibGljTWV0aG9kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0kgYW0gcHVibGljLCBzbyB5b3UgY2FuIHNlZSBtZSEnICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVibGljUHJvcGVydHk6ICdJIGFtIGEgcHVibGljIHByb3BlcnR5JyxcbiAgICAgICAgICAgIGdldFByaXZhdGVOdW1iZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcml2YXRlUmFuZG9tTnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYSBSZXZlYWxpbmcgTW9kdWxlIHBhdHRlcm5cbiAgICAvLyBhcyB0aGUgU2luZ2xldG9uIGluc3RhbmNlXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCAhaW5zdGFuY2UgKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBpbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cbnZhciBTaW5nbGV0b25UZXN0ZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBTaW5nbGV0b24oIG9wdGlvbnMgKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMubmFtZSA9ICdTaW5nbGV0b25UZXN0ZXInO1xuICAgICAgICB0aGlzLnBvaW50WCA9IG9wdGlvbnMucG9pbnRYIHx8IDY7XG4gICAgICAgIHRoaXMucG9pbnRZID0gb3B0aW9ucy5wb2ludFkgfHwgMTA7XG5cbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2U7XG5cbiAgICB2YXIgX3N0YXRpYyA9IHtcblxuICAgICAgICBuYW1lOiAnU2luZ2xldG9uVGVzdGVyJyxcblxuICAgICAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cbiAgICAgICAgICAgIGlmICggaW5zdGFuY2UgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBTaW5nbGV0b24oIG9wdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSAnU2luZ2xldG9uJyBDb25zdHJ1Y3RvciBwYXRlcm5cbiAgICByZXR1cm4gX3N0YXRpYztcblxufSkoKTtcblxuZXhwb3J0IHsgYmFzaWNTaW5nbGV0b24sIFNpbmdsZXRvblRlc3RlciB9O1xuXG4vKlxuKiogVXNhZ2U6ICoqXG5cbmltcG9ydCB7IGJhc2ljU2luZ2xldG9uLCBTaW5nbGV0b25UZXN0ZXIgfSBmcm9tICcuL2Rlc2lnbi1wYXR0ZXJucy9TaW5nbGV0b24nO1xuXG52YXIgc2luZ2xldG9uT25lID0gYmFzaWNTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKTtcbnZhciBzaW5nbGV0b25Ud28gPSBiYXNpY1NpbmdsZXRvbi5nZXRJbnN0YW5jZSgpO1xudmFyIHByaXZhdGVOdW1iZXJPbmUgPSBzaW5nbGV0b25PbmUuZ2V0UHJpdmF0ZU51bWJlcigpO1xudmFyIHByaXZhdGVOdW1iZXJUd28gPSBzaW5nbGV0b25Ud28uZ2V0UHJpdmF0ZU51bWJlcigpO1xuXG5jb25zb2xlLmxvZyggcHJpdmF0ZU51bWJlck9uZSA9PT0gcHJpdmF0ZU51bWJlclR3byApO1xuLy8gUmV0dXJucyB0cnVlLCBiZWNhdXNlIGJvdGggJ3NpbmdsZXRvbk9uZScgYW5kXG4vLyAnc2luZ2xldG9uVHdvJyBob2xkIHRoZSBzYW1lIFNpbmdsZXRvbiBpbnN0YW5jZVxuXG52YXIgc2luZ2xldG9uVGVzdE9uZSA9IFNpbmdsZXRvblRlc3Rlci5nZXRJbnN0YW5jZSh7XG4gICAgcG9pbnRYOiA0LFxuICAgIHBvaW50WTogMjVcbn0pO1xudmFyIHNpbmdsZXRvblRlc3RUd28gPSBTaW5nbGV0b25UZXN0ZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc29sZS5sb2coIHNpbmdsZXRvblRlc3RPbmUubmFtZSApOyAgIC8vIHJldHVybnMgJ1NpbmdsZXRvblRlc3RlcidcbmNvbnNvbGUubG9nKCBzaW5nbGV0b25UZXN0T25lLnBvaW50WCApOyAgICAgLy8gcmV0dXJucyA0XG5jb25zb2xlLmxvZyggc2luZ2xldG9uVGVzdE9uZS5wb2ludFggPT09IHNpbmdsZXRvblRlc3RUd28ucG9pbnRYICk7ICAvLyByZXR1cm5zIHRydWVcbmNvbnNvbGUubG9nKCBzaW5nbGV0b25UZXN0T25lLnBvaW50WSApOyAgICAgLy8gcmV0dXJucyAyNVxuY29uc29sZS5sb2coIHNpbmdsZXRvblRlc3RPbmUucG9pbnRZID09PSBzaW5nbGV0b25UZXN0VHdvLnBvaW50WSApOyAgLy8gcmV0dXJucyB0cnVlXG5cbi8vIFRoZSBjb21wYXJpc29ucyBiZXR3ZWVuIHByb3BlcnR5IHZhbHVlcyByZXR1cm4gJ3RydWUnIGJlY2F1c2Ugc2luZ2xldG9uVGVzdFR3b1xuLy8gaG9sZHMgdGhlIHNhbWUgU2luZ2xldG9uIGluc3RhbmNlIG9mIHNpbmdsZXRvblRlc3RPbmUuXG4vLyBUaGVyZWZvcmUgdGhlIFNpbmdsZXRvbiBwYXR0ZXJuIHNlcnZlZCBpdHMgcHVycG9zZS5cblxuKi9cbiIsImltcG9ydCB7IGJhc2ljU2luZ2xldG9uLCBTaW5nbGV0b25UZXN0ZXIgfSBmcm9tICcuL2Rlc2lnbi1wYXR0ZXJucy9TaW5nbGV0b24nO1xuXG52YXIgc2luZ2xldG9uT25lID0gYmFzaWNTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKTtcbnZhciBzaW5nbGV0b25Ud28gPSBiYXNpY1NpbmdsZXRvbi5nZXRJbnN0YW5jZSgpO1xudmFyIHByaXZhdGVOdW1iZXJPbmUgPSBzaW5nbGV0b25PbmUuZ2V0UHJpdmF0ZU51bWJlcigpO1xudmFyIHByaXZhdGVOdW1iZXJUd28gPSBzaW5nbGV0b25Ud28uZ2V0UHJpdmF0ZU51bWJlcigpO1xuXG5jb25zb2xlLmxvZyggcHJpdmF0ZU51bWJlck9uZSA9PT0gcHJpdmF0ZU51bWJlclR3byApO1xuLy8gUmV0dXJucyB0cnVlLCBiZWNhdXNlIGJvdGggJ3NpbmdsZXRvbk9uZScgYW5kXG4vLyAnc2luZ2xldG9uVHdvJyBob2xkIHRoZSBzYW1lIFNpbmdsZXRvbiBpbnN0YW5jZVxuXG52YXIgc2luZ2xldG9uVGVzdE9uZSA9IFNpbmdsZXRvblRlc3Rlci5nZXRJbnN0YW5jZSh7XG4gICAgcG9pbnRYOiA0LFxuICAgIHBvaW50WTogMjVcbn0pO1xudmFyIHNpbmdsZXRvblRlc3RUd28gPSBTaW5nbGV0b25UZXN0ZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc29sZS5sb2coIHNpbmdsZXRvblRlc3RPbmUubmFtZSApO1xuY29uc29sZS5sb2coIHNpbmdsZXRvblRlc3RPbmUubmFtZSA9PT0gc2luZ2xldG9uVGVzdFR3by5uYW1lICk7XG5jb25zb2xlLmxvZyggc2luZ2xldG9uVGVzdE9uZS5wb2ludFggKTtcbmNvbnNvbGUubG9nKCBzaW5nbGV0b25UZXN0T25lLnBvaW50WCA9PT0gc2luZ2xldG9uVGVzdFR3by5wb2ludFggKTtcbmNvbnNvbGUubG9nKCBzaW5nbGV0b25UZXN0T25lLnBvaW50WSApO1xuY29uc29sZS5sb2coIHNpbmdsZXRvblRlc3RPbmUucG9pbnRZID09PSBzaW5nbGV0b25UZXN0VHdvLnBvaW50WSApOyJdLCJzb3VyY2VSb290IjoiIn0=