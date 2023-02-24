const btns = document.querySelector('.accordion-btn');
const p = document.querySelector('.accordion-info-text');

const toggleClass = () => {
    p.classList.toggle('accordion-info-text')
}

btns.addEventListener('click', toggleClass)




