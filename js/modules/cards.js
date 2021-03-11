
import {getResource} from '../services/services';

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

    getResource(`http://localhost:3000/menu`)
        .then(response => {
            console.log(response);
            response.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, `.menu .container`, price).render();
            });
        });
}

export default cards;