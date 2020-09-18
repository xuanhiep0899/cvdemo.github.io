var big_image = document.getElementById('product-img');
var first_image = document.getElementById('image-first');
var second_image = document.getElementById('image-second');
var default_img = document.getElementById('default-img');

first_image.onclick = function(){
    if(default_img.src == second_image.src){
        default_img.src = first_image.src
    }else{
        default_img.src = first_image.src;
    }
}

second_image.onclick = function(){
    if(default_img.src == first_image.src){
        default_img.src = second_image.src
    }else{
        default_img.src = second_image.src;
    }
}

document.addEventListener("DOMContentLoaded",function() {
	var sticky = document.getElementById('menu-fixed');
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 200){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                sticky.classList.add('sticky-header');
            }
        }
        else{
            if(trangthai=="tren300"){
            sticky.classList.remove('sticky-header');
            trangthai="duoi300";}
        }
    
    })
    var button = document.getElementById('button');
    var background_change = document.getElementById('background');

    button.onclick = function(){
        background_change.classList.toggle('background');
    }

    var input = document.getElementById('search-form');
    var search = document.getElementById('search-buttom');
    
})  

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.crunchify-top').fadeIn(duration);
        } else {
            jQuery('.crunchify-top').fadeOut(duration);
        }
    });

    jQuery('.crunchify-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
}); 

var form = document.getElementById('form');
var button = document.getElementById('button_click');

function clickbutton(){
    console.log('clicked');
    form.classList.add('show-review');
    button.style.display = "none";
}