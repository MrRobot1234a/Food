
import {showModal, closeModalWindow} from './modalWindow';
import {postData} from '../services/services';

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

            const img = document.createElement(`img`);
            img.src = message.loaded;
            img.style.cssText = `
                display: block;
                margin: 0 auto;
                margin-top: 10px;

            `;
            form.insertAdjacentElement(`afterend`, img);

            const formData = new FormData(form);

            // const obj = {};
            // formData.forEach((value, key) => {
            //     obj[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // console.log(JSON.stringify(Object.fromEntries(formData.entries())));

            postData(`http://localhost:3000/requests`, json)
                .then(data => {
                    console.log(data.data);
                    showThanksModal(message.success);
                    img.remove();
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
        showModal(`[data-modal]`, modalTimerId);

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
            closeModalWindow(`[data-modal]`);
        }, 4000);
    }
}

export default forms;