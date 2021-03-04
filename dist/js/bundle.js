/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //Calc

    const result = document.querySelector(`.calculating__result span`);

    let gender,
        height,
        weight,
        age,
        ratio;

    if (localStorage.getItem(`gender`)) {
        gender = localStorage.getItem(`gender`);
    } else {
        gender = `female`;
        localStorage.setItem(`gender`, `female`);
    }

    if (localStorage.getItem(`ratio`)) {
        ratio = localStorage.getItem(`ratio`);
    } else {
        ratio = 1.375;
        localStorage.setItem(`ratio`, 1.375);
    }

    
    
    function calcTotal() {
        if (!gender || !height || !weight || !age || !ratio) {
            result.textContent = `____`;
            return;
        }

        if (gender === `female`) {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function initLocalSettings(selector, classActive) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.classList.remove(`${classActive}`);

            if (element.getAttribute(`id`) === localStorage.getItem(`gender`)) {
                element.classList.add(`${classActive}`);
            }
            if (element.getAttribute(`data-ratio`) === localStorage.getItem(`ratio`)) {
                element.classList.add(`${classActive}`);
            }
        });
    }
    initLocalSettings(`#genders div`, `calculating__choose-item_active`);
    initLocalSettings(`#rations div`, `calculating__choose-item_active`); 

    function getStaticInformation(selector, classActiv) {
        const elements = document.querySelectorAll(`${selector}`);

        elements.forEach(element => {
            element.addEventListener(`click`, (e) => {
                const target = e.target;
    
                if (target.getAttribute('data-ratio')) {
                    ratio = +target.getAttribute('data-ratio');
                    localStorage.setItem(`ratio`, +target.getAttribute('data-ratio'));
                } else {
                    gender = target.getAttribute('id');
                    localStorage.setItem(`gender`, target.getAttribute('id'));
                }
    
    
                elements.forEach(element => {
                    element.classList.remove(classActiv);
                });
    
                target.classList.add(classActiv);
                calcTotal();
            }); 
        });
        
    }

    getStaticInformation(`#genders div`, `calculating__choose-item_active`);
    getStaticInformation(`#rations div`, `calculating__choose-item_active`); 

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener(`input`, (e) => {

            if (input.value.match(/\D/g)) {
                input.style.border = `2px solid red`;
            } else {
                input.style.border = `none`;
            }

            switch(input.getAttribute(`id`)) {
                case `height`:
                    height = +input.value;
                    break;
                case `weight`:
                    weight = +input.value;
                    break;
                case `age`:
                    age = +input.value;
            }
            calcTotal();
        });
    }

    getDynamicInformation(`#height`);
    getDynamicInformation(`#weight`);
    getDynamicInformation(`#age`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function cards() {
    
    /*MenuCard*/

    class MenuCard {
        constructor(src, alt, title, descr, parentSelector, price, ...rest) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.rest = rest;
            this.transform = 28;
            this.changeInUAH();
        }

        changeInUAH() {
            this.price *= this.transform;
        }
        
        render() {
            const div = document.createElement(`div`);
            /*Модифицированный. Добавил с себя*/
            // if (this.rest.length === 0) {
            //     div.classList.add(`menu__item`);
            // } else {
            //     this.rest.forEach(classes => {
            //         if (classes !== `menu__item`) {
            //             div.classList.add(`menu__item`);
            //             console.log(`success`);
            //         } else {
            //             div.classList.add(`menu__item`);
            //         }
            //     });
            // }

            if (this.rest.length === 0) {
                div.classList.add(`menu__item`);
            } else {
                this.rest.forEach(classes => div.classList.add(classes));
            }
            
            div.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(div);
        }
    }

    

    // getResource(`http://localhost:3000/menu`)
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, `.menu .container`, price).render();
    //         });
    //     });

    axios.get(`http://localhost:3000/menu`)
        .then(response => {
            response.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, `.menu .container`, price).render();
            });
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId) {
    /*Forms*/

    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        bindPostData(form);
    });

    const message = {
        loaded: `img/form/spinner3.svg`,
        success: `Мы успешно отправили ваши данные на сервер`,
        failure: `Произошло ошибка! Проверьте интернет соединение!`
    };

    

    function bindPostData(form) {
        form.addEventListener(`submit`, (e) => {
            e.preventDefault();

            const div = document.createElement(`img`);
            div.src = message.loaded;
            div.style.cssText = `
                display: block;
                margin: 0 auto;
                margin-top: 10px;

            `;
            form.insertAdjacentElement(`afterend`, div);

            const formData = new FormData(form);

            // const obj = {};
            // formData.forEach((value, key) => {
            //     obj[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // console.log(JSON.stringify(Object.fromEntries(formData.entries())));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(`http://localhost:3000/requests`, json)
                .then(data => {
                    console.log(data.data);
                    showThanksModal(message.success);
                    div.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });

            
        });
    }

    function showThanksModal(message) {
        const previousModalDialog = document.querySelector(`.modal__dialog`);

        previousModalDialog.classList.add(`hide`);
        (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.showModal)(`[data-modal]`, modalTimerId);

        const thanksModal = document.createElement(`div`);
        thanksModal.classList.add(`modal__dialog`);
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-closebtn>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(`.modal`).append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            previousModalDialog.classList.add(`show`);
            previousModalDialog.classList.remove(`hide`);
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.closeModalWindow)(`[data-modal]`);
        }, 4000);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modalWindow.js":
/*!***********************************!*\
  !*** ./js/modules/modalWindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "closeModalWindow": () => (/* binding */ closeModalWindow)
/* harmony export */ });

function showModal(modalWindowSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalWindowSelector);
    modalWindow.classList.add(`show`);
    modalWindow.classList.remove(`hide`);
    document.body.style.overflow = `hidden`;

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}

function closeModalWindow(modalWindowSelector) {
    const modalWindow = document.querySelector(modalWindowSelector);
    modalWindow.classList.add(`hide`);
    modalWindow.classList.remove(`show`);
    document.body.style.overflow = ``;
}

function modalWindow(modalTriggersSelector, modalWindowSelector, modalTimerId) {

    /*Modal window*/

    const modalTriggers = document.querySelectorAll(modalTriggersSelector),
        //   modalCloseBtn = document.querySelector(`[data-closeBtn]`),
          modalWindow = document.querySelector(modalWindowSelector);

    

    modalTriggers.forEach(element => {
        element.addEventListener(`click`, (e) => showModal(modalWindowSelector, modalTimerId));
    });

    

    // modalCloseBtn.addEventListener(`click`, (e) => {
    //     closeModalWindow();
    //     window.removeEventListener(`scroll`, showModalByScroll);
    // });

    modalWindow.addEventListener(`click`, (e) => {
        if (e.target === modalWindow || e.target.getAttribute(`data-closebtn`) === ``) {
            closeModalWindow(modalWindowSelector);
            window.removeEventListener(`scroll`, showModalByScroll);
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modalWindow.classList.contains(`show`)) {
            closeModalWindow(modalWindowSelector);
        }
    });

    

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalWindowSelector, modalTimerId);
            window.removeEventListener(`scroll`, showModalByScroll);
            // clearInterval(timerId);
        }
    }

    window.addEventListener(`scroll`, showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slidesSelector, previuosSelector, nextSelector, totalSelector, currentSelector,slidesWrapperSelector, slidesFieldSelector}) {
    /*Slider*/

    const slides = document.querySelectorAll(slidesSelector),
          slider = document.querySelector(container),
          previuos = document.querySelector(previuosSelector),
          next = document.querySelector(nextSelector),
          total = document.querySelector(totalSelector),
          current = document.querySelector(currentSelector),
          slidesWrapper = document.querySelector(slidesWrapperSelector),
          slidesField = document.querySelector(slidesFieldSelector),
          widthSlidesWrapper = window.getComputedStyle(slidesWrapper).width,
          widthField = slidesField.style.width = 100 * slides.length +`%`;


    let slideIndex = 1;
    let offset = 0;
    // console.log(+widthSlidesWrapper.slice(0, widthSlidesWrapper.length - 2));


    slidesField.style.cssText = `
        width: ${widthField};
        display: flex;
        transition: .8s all;
    `;

    
    slides.forEach(slide => {
        slide.style.width = widthSlidesWrapper;
    });

    slidesWrapper.style.overflow = `hidden`;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slider.style.position = `relative`;

    const indicators = document.createElement(`ol`),
          dots = [];
          
    indicators.classList.add(`carousel-indicators`);
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement(`li`);
        dot.classList.add(`dot`);
        dot.setAttribute(`data-slide-to`, i + 1);
        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    }

    function getWidthSlidesWrapper(width) {
        return +width.replace(/\D/g, ``);
    }

    function setDotOpacity() {
        dots.forEach(dot => dot.style.opacity = `.5`);
        dots[slideIndex - 1].style.opacity = 1;
    }

    function setCurrentSlide() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function setTransform() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    next.addEventListener(`click`, (e) => {

        if (offset == getWidthSlidesWrapper(widthSlidesWrapper) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getWidthSlidesWrapper(widthSlidesWrapper);
        }

        setTransform();

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCurrentSlide();

        setDotOpacity();
    });

    previuos.addEventListener(`click`, (e) => {

        if (offset == 0) {
            offset = getWidthSlidesWrapper(widthSlidesWrapper) * (slides.length - 1);
        } else {
            offset -= getWidthSlidesWrapper(widthSlidesWrapper);
        }

        setTransform();

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCurrentSlide();

        setDotOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener(`click`, (e) => {
            const slideTo = e.target.getAttribute(`data-slide-to`);

            slideIndex = slideTo;

            offset = getWidthSlidesWrapper(widthSlidesWrapper) * (slideTo - 1);

            setTransform();

            setDotOpacity();

            setCurrentSlide();
            
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, classActiv) {
    /*Tabs*/
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {

        tabsContent.forEach(item => {
            item.classList.add(`hide`);
            item.classList.remove(`show`, `fade`);
        });

        tabs.forEach(item => {
            item.classList.remove(classActiv);
        });

    }
    hideTabsContent();

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add(`show`, `fade`);
        tabsContent[i].classList.remove(`hide`);
        tabs[i].classList.add(`tabheader__item_active`);
    }
    showTabsContent();

    tabsParent.addEventListener(`click`, (e) => {
        const target = e.target;
        
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(index);
                }
            });
        }
    });

    hideTabsContent();
    showTabsContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timerSelector, dedline) {

    /*Timer*/

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getZero2(num) {
        if (num == 0 ) {
            return `0${num}`;
        }
    }

    function setClock(selector, endTime) {

        const timer = document.querySelector(selector),
              days = timer.querySelector(`#days`),
              hours = timer.querySelector(`#hours`),
              minutes = timer.querySelector(`#minutes`),
              seconds = timer.querySelector(`#seconds`),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const result = getTimeRemaining(endTime);

            days.innerHTML = getZero(result.days);
            hours.innerHTML =  getZero(result.hours);
            minutes.innerHTML = getZero(result.minutes);
            seconds.innerHTML = getZero(result.seconds);

            if (result.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = getZero2(0);
                hours.innerHTML = getZero2(0); 
                minutes.innerHTML = getZero2(0);
                seconds.innerHTML = getZero2(0);
            }

            
        }

    }

    

    setClock(timerSelector, dedline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const getResource = async url => {
    const result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
};

const postData = async (url, data) => {
    const result = await axios.post(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await result;
};




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
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");











window.addEventListener(`DOMContentLoaded`, () => {

    const timerId = setTimeout((e) => (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_3__.showModal)(`[data-modal]`, timerId), 5000);

    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__.default)(`form`, timerId);
    (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_3__.default)(`[data-trigger]`, `[data-modal]`, timerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)({
        container: `.offer__slider`,
        slidesSelector: `.offer__slide`,
        previuosSelector: `.offer__slider-prev`,
        nextSelector: `.offer__slider-next`,
        totalSelector: `#total`,
        currentSelector: `#current`,
        slidesWrapperSelector: `.offer__slider-wrapper`,
        slidesFieldSelector: `.offer__slider-inner`
    });
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.default)(`.tabheader__item`, `.tabcontent`, `.tabheader__items`, `tabheader__item_active`);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__.default)(`.timer`, `2021-03-20`);

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map