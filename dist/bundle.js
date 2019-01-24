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

Subject.prototype.getObserverIndex = function (observer) {
  return this.observers.indexOf(observer, 0);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.getObserverIndex(observer));
};

Subject.prototype.notify = function (context) {
  var observerCount = this.observers.count();

  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
}; // The Observer


function Observer(name) {
  this.name = name;

  this.update = function () {// To be customized by each observer..
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
    observerName = document.getElementById('newObserverName'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer');
container.style.marginTop = '20px'; // Concrete Subject
// Extend the controlling checkbox with the Subject class

Object(_design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["extend"])(controlCheckbox, new _design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["Subject"]()); // Clicking the checkbox will trigger notifications to its observers

controlCheckbox.onclick = function () {
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver; // Concrete Observer

function addNewObserver() {
  // Create a wrapper of the observer's content
  var wrapper = document.createElement('div');
  wrapper.style.display = 'inline-block';
  wrapper.style.textAlign = 'center';
  wrapper.style.margin = '0 5px'; // Create an element to hold the observer index

  var index = document.createElement('div'); // Create an element to hold the observer name

  var name = document.createElement('div');
  name.style.display = 'block';
  name.style.margin = '5px auto';
  name.innerText = observerName.value; // Create a checkbox to be updated by the subject,
  // which is the Concrete Observer itself

  var observer = document.createElement('input');
  observer.type = 'checkbox';
  observer.style.display = 'block';
  observer.style.margin = '5px auto'; // Extend the observer with the Observer class

  Object(_design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["extend"])(observer, new _design_patterns_Observer__WEBPACK_IMPORTED_MODULE_0__["Observer"](observerName.value)); // Override with custom update behaviour

  observer.update = function (value) {
    this.checked = value;
  }; // Add the new observer to our list of observers
  // and assign its index


  controlCheckbox.addObserver(observer);
  index.innerHTML = controlCheckbox.getObserverIndex(observer); // Add callback function to remove the observer

  function removeObserver(observer) {
    return function () {
      controlCheckbox.removeObserver(observer);
      container.removeChild(wrapper);
      var count = controlCheckbox.observers.count();

      for (var i = 0; i < count; i++) {
        container.childNodes[i].childNodes[0].innerText = i;
      }
    };
  } // Add button to remove the observer


  var removeBtn = document.createElement('button');
  removeBtn.style.display = 'block';
  removeBtn.style.margin = '5px auto 0';
  removeBtn.innerText = 'Remove';
  removeBtn.onclick = removeObserver(observer); // Append the content to the observer's wrapper

  wrapper.appendChild(index);
  wrapper.appendChild(name);
  wrapper.appendChild(observer);
  wrapper.appendChild(removeBtn); // Append the observer to the container

  container.appendChild(wrapper);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbi1wYXR0ZXJucy9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanMiXSwibmFtZXMiOlsiT2JzZXJ2ZXJMaXN0Iiwib2JzZXJ2ZXJMaXN0IiwicHJvdG90eXBlIiwiYWRkIiwib2JqIiwicHVzaCIsImNvdW50IiwibGVuZ3RoIiwiZ2V0IiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnRJbmRleCIsImkiLCJyZW1vdmVBdCIsInNwbGljZSIsIlN1YmplY3QiLCJvYnNlcnZlcnMiLCJhZGRPYnNlcnZlciIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXJJbmRleCIsInJlbW92ZU9ic2VydmVyIiwibm90aWZ5IiwiY29udGV4dCIsIm9ic2VydmVyQ291bnQiLCJ1cGRhdGUiLCJPYnNlcnZlciIsIm5hbWUiLCJleHRlbmQiLCJleHRlbnNpb24iLCJrZXkiLCJjb250cm9sQ2hlY2tib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZXJOYW1lIiwiYWRkQnRuIiwiY29udGFpbmVyIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJvbmNsaWNrIiwiY2hlY2tlZCIsImFkZE5ld09ic2VydmVyIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwibWFyZ2luIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQnRuIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBZSxTQUFPLENBQUNZLFdBQVIsQ0FBcUJuQyxRQUFyQjtBQUNBdUIsU0FBTyxDQUFDWSxXQUFSLENBQXFCRCxTQUFyQixFQTVEc0IsQ0E4RHRCOztBQUNBakIsV0FBUyxDQUFDa0IsV0FBVixDQUF1QlosT0FBdkI7QUFFSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZnVuY3Rpb24gT2JzZXJ2ZXJMaXN0KCkge1xuICAgIHRoaXMub2JzZXJ2ZXJMaXN0ID0gW107XG59XG5cbk9ic2VydmVyTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlckxpc3QucHVzaCggb2JqICk7XG59O1xuXG5PYnNlcnZlckxpc3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJMaXN0Lmxlbmd0aDtcbn07XG5cbk9ic2VydmVyTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCBpbmRleCApIHtcbiAgICBpZiAoIGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLm9ic2VydmVyTGlzdC5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyTGlzdFtpbmRleF07XG4gICAgfVxufTtcblxuT2JzZXJ2ZXJMaXN0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oIG9iaiwgc3RhcnRJbmRleCApIHtcbiAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG5cbiAgICB3aGlsZSAoIGkgPCB0aGlzLm9ic2VydmVyTGlzdC5sZW5ndGggKSB7XG4gICAgICAgIGlmICggdGhpcy5vYnNlcnZlckxpc3RbaV0gPT09IG9iaiApIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59O1xuXG5PYnNlcnZlckxpc3QucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKCBpbmRleCApIHtcbiAgICB0aGlzLm9ic2VydmVyTGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG59O1xuXG5cbmZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgT2JzZXJ2ZXJMaXN0KCk7XG59XG5cblN1YmplY3QucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24oIG9ic2VydmVyICkge1xuICAgIHRoaXMub2JzZXJ2ZXJzLmFkZCggb2JzZXJ2ZXIgKTtcbn07XG5cblN1YmplY3QucHJvdG90eXBlLmdldE9ic2VydmVySW5kZXggPSBmdW5jdGlvbiggb2JzZXJ2ZXIgKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmluZGV4T2YoIG9ic2VydmVyLCAwICk7XG59XG5cblN1YmplY3QucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24oIG9ic2VydmVyICkge1xuICAgIHRoaXMub2JzZXJ2ZXJzLnJlbW92ZUF0KCB0aGlzLmdldE9ic2VydmVySW5kZXgoIG9ic2VydmVyICkgKTtcbn07XG5cblN1YmplY3QucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uKCBjb250ZXh0ICkge1xuICAgIHZhciBvYnNlcnZlckNvdW50ID0gdGhpcy5vYnNlcnZlcnMuY291bnQoKTtcblxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IG9ic2VydmVyQ291bnQ7IGkrKyApIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZ2V0KCBpICkudXBkYXRlKCBjb250ZXh0ICk7XG4gICAgfVxufTtcblxuLy8gVGhlIE9ic2VydmVyXG5mdW5jdGlvbiBPYnNlcnZlciggbmFtZSApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRvIGJlIGN1c3RvbWl6ZWQgYnkgZWFjaCBvYnNlcnZlci4uXG4gICAgfTtcbn1cblxuLy8gRXh0ZW5kIGFuIG9iamVjdCB3aXRoIGFuIGV4dGVuc2lvblxuZnVuY3Rpb24gZXh0ZW5kKCBvYmosIGV4dGVuc2lvbiApIHtcbiAgICBmb3IgKCB2YXIga2V5IGluIGV4dGVuc2lvbiApIHtcbiAgICAgICAgb2JqW2tleV0gPSBleHRlbnNpb25ba2V5XTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFN1YmplY3QsIE9ic2VydmVyLCBleHRlbmQgfTtcbiIsImltcG9ydCB7IFN1YmplY3QsIE9ic2VydmVyLCBleHRlbmQgfSBmcm9tICcuL2Rlc2lnbi1wYXR0ZXJucy9PYnNlcnZlcic7XG5cbi8vIFJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzXG52YXIgY29udHJvbENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtYWluQ2hlY2tib3gnICksXG4gICAgb2JzZXJ2ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduZXdPYnNlcnZlck5hbWUnICksXG4gICAgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhZGROZXdPYnNlcnZlcicgKSxcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ29ic2VydmVyc0NvbnRhaW5lcicgKTtcblxuY29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9ICcyMHB4JztcblxuLy8gQ29uY3JldGUgU3ViamVjdFxuXG4vLyBFeHRlbmQgdGhlIGNvbnRyb2xsaW5nIGNoZWNrYm94IHdpdGggdGhlIFN1YmplY3QgY2xhc3NcbmV4dGVuZCggY29udHJvbENoZWNrYm94LCBuZXcgU3ViamVjdCgpICk7XG5cbi8vIENsaWNraW5nIHRoZSBjaGVja2JveCB3aWxsIHRyaWdnZXIgbm90aWZpY2F0aW9ucyB0byBpdHMgb2JzZXJ2ZXJzXG5jb250cm9sQ2hlY2tib3gub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRyb2xDaGVja2JveC5ub3RpZnkoIGNvbnRyb2xDaGVja2JveC5jaGVja2VkICk7XG59O1xuXG5hZGRCdG4ub25jbGljayA9IGFkZE5ld09ic2VydmVyO1xuXG4vLyBDb25jcmV0ZSBPYnNlcnZlclxuZnVuY3Rpb24gYWRkTmV3T2JzZXJ2ZXIoKSB7XG5cbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVyIG9mIHRoZSBvYnNlcnZlcidzIGNvbnRlbnRcbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgd3JhcHBlci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB3cmFwcGVyLnN0eWxlLm1hcmdpbiA9ICcwIDVweCc7XG5cbiAgICAvLyBDcmVhdGUgYW4gZWxlbWVudCB0byBob2xkIHRoZSBvYnNlcnZlciBpbmRleFxuICAgIHZhciBpbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZWxlbWVudCB0byBob2xkIHRoZSBvYnNlcnZlciBuYW1lXG4gICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIG5hbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbmFtZS5zdHlsZS5tYXJnaW4gPSAnNXB4IGF1dG8nO1xuICAgIG5hbWUuaW5uZXJUZXh0ID0gb2JzZXJ2ZXJOYW1lLnZhbHVlO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIGNoZWNrYm94IHRvIGJlIHVwZGF0ZWQgYnkgdGhlIHN1YmplY3QsXG4gICAgLy8gd2hpY2ggaXMgdGhlIENvbmNyZXRlIE9ic2VydmVyIGl0c2VsZlxuICAgIHZhciBvYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcbiAgICBvYnNlcnZlci50eXBlID0gJ2NoZWNrYm94JztcbiAgICBvYnNlcnZlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBvYnNlcnZlci5zdHlsZS5tYXJnaW4gPSAnNXB4IGF1dG8nO1xuXG4gICAgLy8gRXh0ZW5kIHRoZSBvYnNlcnZlciB3aXRoIHRoZSBPYnNlcnZlciBjbGFzc1xuICAgIGV4dGVuZCggb2JzZXJ2ZXIsIG5ldyBPYnNlcnZlciggb2JzZXJ2ZXJOYW1lLnZhbHVlICkgKTtcblxuICAgIC8vIE92ZXJyaWRlIHdpdGggY3VzdG9tIHVwZGF0ZSBiZWhhdmlvdXJcbiAgICBvYnNlcnZlci51cGRhdGUgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbmV3IG9ic2VydmVyIHRvIG91ciBsaXN0IG9mIG9ic2VydmVyc1xuICAgIC8vIGFuZCBhc3NpZ24gaXRzIGluZGV4XG4gICAgY29udHJvbENoZWNrYm94LmFkZE9ic2VydmVyKCBvYnNlcnZlciApO1xuICAgIGluZGV4LmlubmVySFRNTCA9IGNvbnRyb2xDaGVja2JveC5nZXRPYnNlcnZlckluZGV4KCBvYnNlcnZlciApO1xuICAgIFxuICAgIC8vIEFkZCBjYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIG9ic2VydmVyXG4gICAgZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIoIG9ic2VydmVyICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udHJvbENoZWNrYm94LnJlbW92ZU9ic2VydmVyKCBvYnNlcnZlciApO1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKCB3cmFwcGVyICk7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBjb250cm9sQ2hlY2tib3gub2JzZXJ2ZXJzLmNvdW50KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIGJ1dHRvbiB0byByZW1vdmUgdGhlIG9ic2VydmVyXG4gICAgdmFyIHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XG4gICAgcmVtb3ZlQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJlbW92ZUJ0bi5zdHlsZS5tYXJnaW4gPSAnNXB4IGF1dG8gMCc7XG4gICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuICAgIHJlbW92ZUJ0bi5vbmNsaWNrID0gcmVtb3ZlT2JzZXJ2ZXIoIG9ic2VydmVyICk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGNvbnRlbnQgdG8gdGhlIG9ic2VydmVyJ3Mgd3JhcHBlclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoIGluZGV4ICk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCggbmFtZSApO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoIG9ic2VydmVyICk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCggcmVtb3ZlQnRuICk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG9ic2VydmVyIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIHdyYXBwZXIgKTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==