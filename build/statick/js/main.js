'use strict'

var buttonMenu = document.getElementById("buttonMenu");
var menu = document.getElementById("navList");
var logo = document.getElementById("logoNone");
//var nav =document .getElementById("nav"); 
//var hamburgerBtnClosed = 'hamburger - btn closed';/////
var closeButton = 'hamburger-btn closed'; ///
var openButton = 'hamburger-btn opened'; //

var navListClosed = 'header-nav__list closed';
var navListOpened = 'header-nav__list opened';
var logoNoneClosed = 'header-logo__link--none closed';
var logoNoneOpened = 'header-logo__link--none opened';
//var navClose ='nav close';
//var navOpen ='nav open';
buttonMenu.onclick = function (e) {
    if (buttonMenu.className == closeButton) {
        buttonMenu.className = openButton;
        menu.className = navListOpened;
        logo.className = logoNoneOpened;
        //nav.className =navOpen;

    } else if (buttonMenu.className == openButton) {
        buttonMenu.className = closeButton;
        menu.className = navListClosed;
        logo.className = logoNoneClosed;
        //nav.className = navClose;
    }
}