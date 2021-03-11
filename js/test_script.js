"use strict";
/*
import {five, six} from './main';
import sayHello from './main';
sayHello();
*/
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

/*Ошибки. Как избежать “поломки” своего кода*/

    /*
    try {
        console.log(`Hello Mr. Robot`);
        console.log(a);
    } catch(e) {
        console.log(`Error`);
        // throw e; 
    } finally {
        console.log(`Yes`);
    }
    */
    
});

