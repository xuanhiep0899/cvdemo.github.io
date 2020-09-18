var form_1 = document.getElementById('login-form');
var form_2 = document.getElementById('signin-form');
var text_1 = document.getElementById('text-1');
var text_2 = document.getElementById('text-2');
var change_to_sign = document.getElementById('change');

change_to_sign.onclick = function(){
	form_1.classList.add('display-none');
	text_1.classList.add('display-none');
	form_2.classList.add('display-block');
	text_2.classList.add('display-block');
}