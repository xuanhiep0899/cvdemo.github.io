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

var check = document.getElementById('check-value');
var formPassword = document.getElementById('form-password');

function checkValue(){
    formPassword.classList.add('show-form');
    check.classList.add('close-form');
    formPassword.classList.remove('close-form');
    check.classList.remove('show-form');
}

function closeForm(){
    formPassword.classList.remove('show-form');
    check.classList.remove('close-form');
    formPassword.classList.add('close-form');
    check.classList.add('show-form');
}
