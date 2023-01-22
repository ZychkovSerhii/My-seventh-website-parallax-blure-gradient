const sliderMain = new Swiper('.slider-main', {
    freeMode: true,
    mousewheel: true,
    parallax: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

const sliderBg = new Swiper('.slider-bg', {
    parallax: true,
    centeredSlides: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider-item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
    document.querySelectorAll('.slider-item').forEach(item => {
        item.classList.remove('opened')
    })
})