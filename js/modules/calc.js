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

export default calc;
