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

/***/ "./src/design-patterns/Observer.js":
/*!*****************************************!*\
  !*** ./src/design-patterns/Observer.js ***!
  \*****************************************/
/*! exports provided: Subject, Observer, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }

    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function (context) {
  var observerCount = this.observers.count();

  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
}; // The Observer


function Observer() {
  this.update = function () {// Add later..
  };
} // Extend an object with an extension


function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}



/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design-patterns/Observer */ "./src/design-patterns/Observer.js");
 // References to DOM elements

var controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer'); // Concrete Subject
// Extend the controlling checkbox with the Subject class

Object(_design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["extend"])(controlCheckbox, new _design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["Subject"]()); // Clicking the checkbox will trigger notifications to its observers

controlCheckbox.onclick = function () {
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver; // Concrete Observer

function addNewObserver() {
  // Create a new checkbox to be added
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox'; // Extend the checkbox with the Observer class

  Object(_design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["extend"])(checkbox, new _design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]()); // Override with custom update behaviour

  checkbox.update = function (value) {
    this.checked = value;
  }; // Add the new observer to out list of observers


  controlCheckbox.addObserver(checkbox); // Append the item to the container

  container.appendChild(checkbox);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbi1wYXR0ZXJucy9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanMiXSwibmFtZXMiOlsiT2JzZXJ2ZXJMaXN0Iiwib2JzZXJ2ZXJMaXN0IiwicHJvdG90eXBlIiwiYWRkIiwib2JqIiwicHVzaCIsImNvdW50IiwibGVuZ3RoIiwiZ2V0IiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnRJbmRleCIsImkiLCJyZW1vdmVBdCIsInNwbGljZSIsIlN1YmplY3QiLCJvYnNlcnZlcnMiLCJhZGRPYnNlcnZlciIsIm9ic2VydmVyIiwicmVtb3ZlT2JzZXJ2ZXIiLCJub3RpZnkiLCJjb250ZXh0Iiwib2JzZXJ2ZXJDb3VudCIsInVwZGF0ZSIsIk9ic2VydmVyIiwiZXh0ZW5kIiwiZXh0ZW5zaW9uIiwia2V5IiwiY29udHJvbENoZWNrYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEJ0biIsImNvbnRhaW5lciIsIm9uY2xpY2siLCJjaGVja2VkIiwiYWRkTmV3T2JzZXJ2ZXIiLCJjaGVja2JveCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwidmFsdWUiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUF1QkosUUFBdkI7QUFFSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZnVuY3Rpb24gT2JzZXJ2ZXJMaXN0KCkge1xuICAgIHRoaXMub2JzZXJ2ZXJMaXN0ID0gW107XG59XG5cbk9ic2VydmVyTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlckxpc3QucHVzaCggb2JqICk7XG59O1xuXG5PYnNlcnZlckxpc3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJMaXN0Lmxlbmd0aDtcbn07XG5cbk9ic2VydmVyTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCBpbmRleCApIHtcbiAgICBpZiAoIGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLm9ic2VydmVyTGlzdC5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyTGlzdFtpbmRleF07XG4gICAgfVxufTtcblxuT2JzZXJ2ZXJMaXN0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oIG9iaiwgc3RhcnRJbmRleCApIHtcbiAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG5cbiAgICB3aGlsZSAoIGkgPCB0aGlzLm9ic2VydmVyTGlzdC5sZW5ndGggKSB7XG4gICAgICAgIGlmICggdGhpcy5vYnNlcnZlckxpc3RbaV0gPT09IG9iaiApIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59O1xuXG5PYnNlcnZlckxpc3QucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKCBpbmRleCApIHtcbiAgICB0aGlzLm9ic2VydmVyTGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG59O1xuXG5cbmZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgT2JzZXJ2ZXJMaXN0KCk7XG59XG5cblN1YmplY3QucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24oIG9ic2VydmVyICkge1xuICAgIHRoaXMub2JzZXJ2ZXJzLmFkZCggb2JzZXJ2ZXIgKTtcbn07XG5cblN1YmplY3QucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24oIG9ic2VydmVyICkge1xuICAgIHRoaXMub2JzZXJ2ZXJzLnJlbW92ZUF0KCB0aGlzLm9ic2VydmVycy5pbmRleE9mKCBvYnNlcnZlciwgMCApICk7XG59O1xuXG5TdWJqZWN0LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiggY29udGV4dCApIHtcbiAgICB2YXIgb2JzZXJ2ZXJDb3VudCA9IHRoaXMub2JzZXJ2ZXJzLmNvdW50KCk7XG5cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBvYnNlcnZlckNvdW50OyBpKysgKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmdldCggaSApLnVwZGF0ZSggY29udGV4dCApO1xuICAgIH1cbn07XG5cbi8vIFRoZSBPYnNlcnZlclxuZnVuY3Rpb24gT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQWRkIGxhdGVyLi5cbiAgICB9O1xufVxuXG4vLyBFeHRlbmQgYW4gb2JqZWN0IHdpdGggYW4gZXh0ZW5zaW9uXG5mdW5jdGlvbiBleHRlbmQoIG9iaiwgZXh0ZW5zaW9uICkge1xuICAgIGZvciAoIHZhciBrZXkgaW4gZXh0ZW5zaW9uICkge1xuICAgICAgICBvYmpba2V5XSA9IGV4dGVuc2lvbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU3ViamVjdCwgT2JzZXJ2ZXIsIGV4dGVuZCB9O1xuIiwiaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2ZXIsIGV4dGVuZCB9IGZyb20gJy4vZGVzaWduLXBhdHRlcm5zL09ic2VydmVyJztcblxuLy8gUmVmZXJlbmNlcyB0byBET00gZWxlbWVudHNcbnZhciBjb250cm9sQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21haW5DaGVja2JveCcgKSxcbiAgICBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE5ld09ic2VydmVyJyApLFxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnb2JzZXJ2ZXJzQ29udGFpbmVyJyApO1xuXG4vLyBDb25jcmV0ZSBTdWJqZWN0XG5cbi8vIEV4dGVuZCB0aGUgY29udHJvbGxpbmcgY2hlY2tib3ggd2l0aCB0aGUgU3ViamVjdCBjbGFzc1xuZXh0ZW5kKCBjb250cm9sQ2hlY2tib3gsIG5ldyBTdWJqZWN0KCkgKTtcblxuLy8gQ2xpY2tpbmcgdGhlIGNoZWNrYm94IHdpbGwgdHJpZ2dlciBub3RpZmljYXRpb25zIHRvIGl0cyBvYnNlcnZlcnNcbmNvbnRyb2xDaGVja2JveC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udHJvbENoZWNrYm94Lm5vdGlmeSggY29udHJvbENoZWNrYm94LmNoZWNrZWQgKTtcbn07XG5cbmFkZEJ0bi5vbmNsaWNrID0gYWRkTmV3T2JzZXJ2ZXI7XG5cbi8vIENvbmNyZXRlIE9ic2VydmVyXG5mdW5jdGlvbiBhZGROZXdPYnNlcnZlcigpIHtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBjaGVja2JveCB0byBiZSBhZGRlZFxuICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIC8vIEV4dGVuZCB0aGUgY2hlY2tib3ggd2l0aCB0aGUgT2JzZXJ2ZXIgY2xhc3NcbiAgICBleHRlbmQoIGNoZWNrYm94LCBuZXcgT2JzZXJ2ZXIoKSApO1xuXG4gICAgLy8gT3ZlcnJpZGUgd2l0aCBjdXN0b20gdXBkYXRlIGJlaGF2aW91clxuICAgIGNoZWNrYm94LnVwZGF0ZSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBuZXcgb2JzZXJ2ZXIgdG8gb3V0IGxpc3Qgb2Ygb2JzZXJ2ZXJzXG4gICAgY29udHJvbENoZWNrYm94LmFkZE9ic2VydmVyKCBjaGVja2JveCApO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBpdGVtIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIGNoZWNrYm94ICk7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=