'use strict'
var btn = document.getElementById('btn');
var sliderOne = document.querySelectorAll(".slider__slide img");
var i =0;

//btn.onclick=function() {
    //sliderOne[i].className ="";
    //i = i - 1;
    //if (i < 0) {
        //i = sliderOne.length - 1;
    //}
    //sliderOne[i].className = "shown" ;
//};

btn.onclick = function () {
    sliderOne[i].className = "";
    i = i + 1; //i++
    if (i >= sliderOne.length) {
        i = 0;
    }
    sliderOne[i].className = "shown";
};














//var items = document.querySelectorAll('img');
//var itemCount = items.length;
//var btn = document.getElementById('btn');
//var current = 0;

//function showBtn() {//
    //items[current].classList.remove('active');

    //if (current < itemCount -1){
        //current++;

    //}else{
       // current = 0;
    //}
    //items[current].classList.add('active');
    //console.log(current);
//}//
//function showBtn() {
//items[current].classList.remove('active');
    //if (current > 0){
        //current--;
    //}else{
        //current = itemCount - 1;
    //}
    //items[current].classList.add('active');
    //console.log(current);
//}
//btn.addEventListener('click',showBtn);//
























































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
      //  slideContent[i].style.display = "none";
        
   // }
   
        
    //}

//function startSlide() {
    //reset();
//slideContent[0].style.display = "block";
    
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
