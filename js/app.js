const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const btn = document.querySelector('.search-btn')
const input = document.querySelector('.search-input')

const showSearchBar = () => {
    input.classList.toggle('active')
}

btn.addEventListener('click', showSearchBar)
open.addEventListener('click', () => container.classList.add ('show-nav'));
close.addEventListener('click', () => container.classList.remove ('show-nav'));