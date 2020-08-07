$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform' : 'translate(0px, '+ wScroll /2+'%)'
    })

    if(wScroll > $('.diapos').offset().top - 
    ($(window).height() / 1.2)){

       

        $('.diapos figure').each(function(i){

            setTimeout(function(){

            
            $('.diapos figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));

        });
    }

    if(wScroll > $('.diapos2').offset().top - 
    ($(window).height() / 1.2)){

       

        $('.diapos2 figure').each(function(i){

            setTimeout(function(){

            
            $('.diapos2 figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));

        });
    }

    if(wScroll > $('.diapos3').offset().top - 
    ($(window).height() / 1.2)){

       

        $('.diapos3 figure').each(function(i){

            setTimeout(function(){

            
            $('.diapos3 figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));

        });
    }
    




});