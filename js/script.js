const swiper = new Swiper('.swiper', {
    loop: true,     
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const punktswiper = new Swiper('.punkt__content-swiper', {
    loop: true,     
    pagination: {
        el: '.punkt__content-pagination',
        clickable: true
    }
});

if (window.innerWidth < 1000) {
    document.querySelector('.rent__arrow').src = './img/arrow-mini.svg';
    document.querySelectorAll('.swiper-slide video').forEach(item => item.src = 'https://streaming.video.yandex.ru/get/yndx-video/m-42220-17a7ca95cef-890c10f759debbd4/720p.mp4');
};

window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
        document.querySelector('.rent__arrow').src = './img/arrow-mini.svg';
        document.querySelectorAll('.swiper-slide video').forEach(item => item.src = 'https://streaming.video.yandex.ru/get/yndx-video/m-42220-17a7ca95cef-890c10f759debbd4/720p.mp4');
    };

})