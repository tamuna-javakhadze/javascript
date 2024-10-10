// @ts-chek
`use strict`;

// to do list
let enter = document.getElementById("btn-enter");
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let clearAll = document.getElementById("btn-clear-all");

enter.addEventListener("click", function(){
  // get value
  let inputValue = input.value;

  if(inputValue === ''){
    return;
  }

  // create list with delete button
  let li = document.createElement("li");
  let del = document.createElement('i');

  li.innerText = inputValue;
  del.classList.add("del", "fa-solid", "fa-circle-minus");
  
  ul.appendChild(li);
  li.appendChild(del);

  del.addEventListener("click", function(){
    li.remove();
  });

  // clear iput
  input.value = "";
});

clearAll.addEventListener("click", function(){
  ul.innerHTML = "";
});


// burger bar
let burger = document.getElementById("burger");
let nav = document.getElementById("nav");

burger.addEventListener("click", function(){
  nav.classList.toggle("show-hide");
});