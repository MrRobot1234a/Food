"use strict";

import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modalWindow from './modules/modalWindow';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {showModal} from './modules/modalWindow'

window.addEventListener(`DOMContentLoaded`, () => {

    const timerId = setTimeout((e) => showModal(`[data-modal]`, timerId), 5000);

    calc();
    cards();
    forms(`form`, timerId);
    modalWindow(`[data-trigger]`, `[data-modal]`, timerId);
    slider({
        container: `.offer__slider`,
        slidesSelector: `.offer__slide`,
        previuosSelector: `.offer__slider-prev`,
        nextSelector: `.offer__slider-next`,
        totalSelector: `#total`,
        currentSelector: `#current`,
        slidesWrapperSelector: `.offer__slider-wrapper`,
        slidesFieldSelector: `.offer__slider-inner`
    });
    tabs(`.tabheader__item`, `.tabcontent`, `.tabheader__items`, `tabheader__item_active`);
    timer(`.timer`, `2021-03-20`);

});