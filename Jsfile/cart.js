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

var value_amount = document.getElementById('value-amount');

var priceOne = document.getElementById('price-one');
var price = document.getElementById('price');

var priceTotal = document.getElementById('price-total');

var value = 0;
value_amount.value = 0;

var priceAll = parseFloat(priceOne.textContent)*parseFloat(value_amount.value);
price.innerText = priceAll;  

function valueUp(){
    value_amount.value = parseInt(value) + 1;
    value = value_amount.value;
    var priceAll = parseFloat(priceOne.textContent)*parseFloat(value_amount.value);
    price.innerText = formatMoney(priceAll) + "đ";
    priceTotal.innerText = formatMoney(priceAll) + "đ";
}


function valueDown(){
    if(value_amount.value > 0){
        value_amount.value = parseInt(value) - 1;
        value = value_amount.value;
        var priceAll = parseFloat(priceOne.textContent)*parseFloat(value_amount.value);
        price.innerText = formatMoney(priceAll) + "đ";
        priceTotal.innerText = formatMoney(priceAll) + "đ";
    }else{
    }
}

function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
    
    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}



