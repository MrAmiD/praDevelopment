function scrollAnimate(selector){
    var absOffsetTop = selector.offset().top - $(window).height();
    var scrollWin = $(window).scrollTop();
    if (scrollWin >= absOffsetTop - 100 && $(window).width() >= 768) {
        //console.log('addClass animate');
        selector.addClass('animate');
    } else {
        //console.log('removeClass animate')
        selector.removeClass('animate');
    }
};

$(function() {
    /*datepicker start*/
    
});
