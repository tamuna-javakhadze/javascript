// @ts-chek
'use strict'

let burger = document.getElementById("burger");
let navigation = document.getElementById("navigation");
let button = document.getElementById("button");

// burger
burger.addEventListener('click', function(){
    navigation.classList.toggle("toggle");
    burger.classList.toggle("x");
});

// scroll up button
document.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
});

button.addEventListener("click", function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});