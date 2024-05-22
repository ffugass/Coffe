$(window).scroll(function(){
    let scrolled = $(window).scrollTop();
    if(scrolled > 500){
        $('#back_to_top').addClass('active');
    } 
    else{
        $('#back_to_top').removeClass('active');
    }
})
$('#back_to_top').click(function(){
    $('body,html').animate({scrollTop: 0}, 300)
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});