/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "five": () => (/* binding */ five),
/* harmony export */   "six": () => (/* binding */ six),
/* harmony export */   "default": () => (/* binding */ sayHello)
/* harmony export */ });


let five = 5;

let six = 6;



function sayHello() {
    console.log(`Hello Mr. Robot`);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./js/test_script.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./js/main.js");




(0,_main__WEBPACK_IMPORTED_MODULE_0__.default)();

window.addEventListener(`DOMContentLoaded`, () => {

    /*Геттеры и Сеттеры(get and set)*/
    /*
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = _age;
        }

        #surname = `Serverov`

        say() {
            console.log(`Имя пользователя: ${this.name} ${this.#surname}, лет ${this.age}`);
        }

        get user() {
            return this.age;
        }

        set user(age) {
            if (typeof(age) === "number" && age > 0 && age <= 100) {
                this.age = age;
            } else {
                if (typeof(age) === "string") {
                    console.log(`Допускается только числовой тип данных.`);
                }

                if (age < 0) {
                    console.log(`Допускается число больше нуля`);
                }

                if (age >= 100) {
                    console.log(`Допускается число меньше ста`);
                }
            }
        }

        get privat() {
            return this.#surname;
        }

        set privat(surname) {
            this.#surname = surname;
        }
    }

    const akim = new User(`Akim`, 18);

    console.log(akim.privat);
    akim.privat = `Aldersan`;
    console.log(akim.privat);
    akim.say();
    */
    /*Animation*/
    /*
    const button = document.querySelector(`.button`);

    button.addEventListener(`click`, myAnimation);

    function myAnimation() {
        const block = document.querySelector(`.wrapper_block`);
        const id = setInterval(frame, 10);

        function top(position) {
            block.style.top = position;
        }
        function left(position) {
            block.style.left = position;
        }
        let position = 0;
        let positionForLeft = 0;

        function frame() {
            position++;

            if (position === 300) {
                clearInterval(id);
                frame2();
            } else {
                top(position +`px`);
                left(position +`px`);
            }
        }

        function frame2() {
            const id2 = setInterval(() => {
                position--;

                if (position === 0) {
                    clearInterval(id2);
                    frame3();
                } else {
                    top(position +`px`);
                    left(position +`px`);
                }

            }, 10);
        }

        function frame3() {
            const id3 = setInterval(() => {
                position++;

                if (position === 300) {
                    clearInterval(id3);
                    frame4();
                } else {
                    top(position +`px`);
                }

            }, 10);
        }

        function frame4() {
            const id4 = setInterval(() => {
                position--;
                positionForLeft++;
                
                if (position === 0 && positionForLeft === 300) {
                    clearInterval(id4);
                    frame5();
                } else {
                    top(position +`px`);
                    left(positionForLeft +`px`);
                }

            }, 10);
        }

        function frame5() {
            const id5 = setInterval(() => {
                position++;
                positionForLeft--;
                
                if (position === 300 && positionForLeft === 0) {
                    clearInterval(id5);
                    frame6();
                } else {
                    top(position +`px`);
                    left(positionForLeft +`px`);
                }

            }, 10);
        }

        function frame6() {
            const id6 = setInterval(() => {
                position--;
                
                if (position === 0) {
                    clearInterval(id6);
                } else {
                    top(position +`px`);
                }

            }, 10);
       }

    }
    */

    /*Прием модуль, как и зачем его использовать*/
    /*
    const number = 5;

    (function(){

        let number = 6;
        console.log(number);
        console.log(number + 6);

    }());

    console.log(number);

    const user = (function(){

        const privat = function() {
            console.log(`I am privat!!!`);
        };

        return {
            sayHello: privat
        };

    }());

    user.sayHello();
    */

    /*ES6 Modules*/

    
});


})();

/******/ })()
;
//# sourceMappingURL=test_bundle.js.map