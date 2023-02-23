const slidesContainer = document.querySelector('.slides-container')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImages = document.querySelectorAll('.slide')
const carouselWith = 800
const carouselSpeed = 3000

let index = 0

const handleCarousel = () => {
    index++
    changeImage()
}

const changeImage = () => {
    if(index > carouselImages.length - 1) {
        index = 0
    } else if (index < 0) {
        index = carouselImages.length -1
    }

    slidesContainer.style.transform = `translateX(${- index * carouselWith}px)`
}

const handleRightArrow = () => {
    index ++
    changeImage()
}

const handleLeftArrow = () => {
    index --
    changeImage()
}
rightBtn.addEventListener('click', handleRightArrow)
leftBtn.addEventListener('click', handleLeftArrow)
