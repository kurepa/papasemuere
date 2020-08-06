$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transfrom' : 'translate(0px, '+ wScroll /2+'%)'
    });

});