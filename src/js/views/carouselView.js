const items = document.querySelectorAll('.boxes__box');
const itemsArray = Array.from(items);
const container = document.querySelector('.boxes__wrapper');
const btn = `<p class="btn btn__left disable-select">&lt;</p> <p class="btn btn__right disable-select">&gt;</p>`;

export const carousel = () => {

    if(window.innerWidth > 750 ) {

    container.insertAdjacentHTML('afterend', btn);

    for(let i = 1; i < itemsArray.length; i++) {
        itemsArray[i].classList.add('hidden');
    }

    itemsArray[0].classList.add('active');

    const btnNext = document.querySelector('.btn__right');

    btnNext.addEventListener('click', () => {
        let activeBox = document.querySelectorAll('.boxes__wrapper .active')[0]; 
        activeBox.classList.replace('active', 'hidden');

        if(activeBox.nextElementSibling != null) {
            activeBox.nextElementSibling.classList.replace('hidden', 'active');
        } else {
            itemsArray[0].classList.replace('hidden', 'active');
        }
    });

    const btnPrevious = document.querySelector('.btn__left');
    
    btnPrevious.addEventListener('click', () => {
        let activeBox = document.querySelectorAll('.boxes__wrapper .active')[0];
        activeBox.classList.replace('active', 'hidden');

        if(activeBox.previousElementSibling != null) {
            activeBox.previousElementSibling.classList.replace('hidden', 'active');
        } else {
            itemsArray[itemsArray.length - 1].classList.replace('hidden', 'active');
        }
    });

}

};





