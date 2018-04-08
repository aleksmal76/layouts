
//$(document).ready(function () {
    //$('.slider_bg').slick({
       
    //dost:true
    //});
//});



'use strict'

var items = document.querySelectorAll('img');
var itemCount = items.length;
var btn = document.getElementById('btn');
let count = 0;

function showBtn() {
    items[count].classList.remove('active');

    if (count < itemCount -1){
        count++;

    }else{
        count = 0;
    }
    items[count].classList.add('active');
    console.log(count);
}//
function showBtn() {
    items[count].classList.remove('active');
    if (count > 0){
        count--;
    }else{
        count = itemCount - 1;
    }
    items[count].classList.add('active');
    console.log(count);
}
btn.addEventListener('click',showBtn);//
























































//var slider = document.querySelector(".slider");
//var slideContent = document.querySelectorAll(".slide-content");
//var slideOne = document.querySelectorAll(".slider__slide1");
//var slideTwo = document.querySelectorAll(".slider__slide2");
//var slideThree = document.querySelectorAll(".slider__slide3");
//var slideFo = document.querySelectorAll(".slider__slide4");
//var content = document.getElementById('content');
//var btn = document.getElementById('btn');
//var current =0;

//function reset() {
    //for (let i = 0; i < slideContent.length; i++) {
        //slideContent[i].style.display = "none";
        
    //}
   
        
    //}

//function startSlide() {
    //reset();
    //slideContent[0].style.display ="block";
    
//}
//function slideLeft() {
    //reset();
    //slideContent[current - 1].style.display = "block";
    //current++;
    
//}
//function slideRight() {
    //reset();
    //slideContent[current + 1].style.display = "block";
    //current--;

//}
//btn.addEventListener("click", function (){
    //if(current === 0){
        //current = slideContent.length;
    //}
    //slideRight();
    //slideLeft();
    
    
//});
//startSlide();
