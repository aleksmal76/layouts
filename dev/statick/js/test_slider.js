'use strict'
var btn_prev = document.querySelector('.btn-prev'),
    btn_next = document.querySelector('.btn-next');

var text = document.querySelectorAll('.testimonials-slider__text span');
var i = 0;
btn_prev.onclick = function () {
    text[i].className = "";
    i = i - 1;
    if (i < 0) {
        i = text.length - 1;
    }
    text[i].className = "shown";
};

btn_next.onclick = function () {
    text[i].className = "";
    i = i + 1; //i++
    if (i >= text.length) {
        i = 0;
    }
    text[i].className = "shown";
};