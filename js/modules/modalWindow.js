
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
            window.removeEventListener(`scroll`, showModalByScroll);
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

export default modalWindow;
export {showModal};
export {closeModalWindow};