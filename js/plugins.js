/*global $ , alert , console*/

$(document).ready(function () {
    
    'use strict';
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });
    
    // Show color option
    
    $('.gear-check').click(function () {
        
        $('.color-option').fadeToggle();
        
    });
    
    // Change Theme color on click 
    
    $('.color-option ul li')
        .eq(0).css('backgroundColor', '#3ae784').end()
        .eq(1).css('backgroundColor', '#E41B17').end()
        .eq(2).css('backgroundColor', '#5bc0de').end()
        .eq(3).css('backgroundColor', '#337ab7');
    
    $('.color-option ul li').click(function () {
        
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
        
    });
    
    // Caching The Scroll Top Element
    
    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 1000);
        
    });
    
    // Using niceScroll
    
    $("html").niceScroll({
        
        zindex: 9999
     
    });
    
});


//Loading Screen 

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});