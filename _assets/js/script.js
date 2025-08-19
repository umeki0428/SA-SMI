// ================================================================================
// script.js
// 案件用のスクリプトファイル
// ================================================================================


// News Slide
// --------------------------------------------------------------- //
const loopSwiper = new Swiper('.js-news-slide', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,
    
    breakpoints:{
        768:{
            slidesPerView: 3,
            loopAdditionalSlides: 9,
        }
    }
});