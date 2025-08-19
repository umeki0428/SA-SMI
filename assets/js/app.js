// ================================================================================
// script.js
// 案件用のスクリプトファイル
// ================================================================================

// News Slide
// --------------------------------------------------------------- //
const newsSwiper = new Swiper('.js-news-slide', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    speed: 1000,
    loopAdditionalSlides: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    breakpoints:{
        768:{
            slidesPerView: 3,
			spaceBetween: 16,
            loopAdditionalSlides: 9,
        }
    }
});