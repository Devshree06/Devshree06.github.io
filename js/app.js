$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let hamburger = document.querySelector('.hambuerger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function(){

        mobileNav.classList.add('open');//isme humne mobilNav ko lect kra or uski jo classlist (function he kisi ki b list call krne ka) call kari or hume open action krana tha islie vo add krlia


    });

    times.addEventListener('click',function(){

        
        mobileNav.classList.remove('open');

    });


})
