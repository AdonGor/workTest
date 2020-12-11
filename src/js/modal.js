import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalBtn = document.querySelector('button[data-open-modal]');

const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
        onShow(instance) {
        const closeModalBtn = getCloseBtn(instance);
        closeModalBtn.addEventListener('click', instance.close);
        window.addEventListener('keydown', e => {
            if(e.code === 'Escape') {
                instance.close();
            }
        })
    
        },
        onClose(instance) {
            const closeModalBtn = getCloseBtn(instance);
            closeModalBtn.addEventListener('click', instance.close);
        },
    });
    
    openModalBtn.addEventListener('click', () => instance.show());


function getCloseBtn(parent) {
    return parent
    .element()
    .querySelector('button[data-close-modal]');
};

