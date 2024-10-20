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





// load next/previous
// fetch

let currentPage = 1;
let totalPages;
let loadPrev = document.getElementById("load-prev");
let loadNext = document.getElementById("load-more");

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (responseData) {
      console.log(responseData);
      if (!responseData.ok) {
        throw responseData.status;
      }
      return responseData.json();
    })
    .then(function (mosulidata) {
      if (currentPage === 1) {
        loadPrev.disabled = true;
        loadNext.disabled = false;
      }
      if (currentPage === totalPages) {
        loadPrev.disabled = false;
        loadNext.disabled = true
      }
      console.log(mosulidata);
      const fragment = new DocumentFragment();

      mosulidata.data.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.first_name} ${item.last_name}`;
        fragment.appendChild(li);
      });

      document.getElementById("ul-users").innerHTML = " ";
      document.getElementById("ul-users").appendChild(fragment);

      totalPages = mosulidata.total_pages;
    })
    .catch(function (error) {
      if (error === 404) {
        let pError = document.createElement("p");
        pError.textContent = "Page Not Found";
        document.getElementById("users-wraper").appendChild(pError);
      }
    });
}

getUsers(currentPage);


// prev and next

loadPrev.addEventListener("click", function () {
  if (currentPage === 1) {
    return;
  }
  currentPage--;
  getUsers(currentPage);
});

loadNext.addEventListener("click", function () {
  if (currentPage === totalPages) {
    return;
  }
  currentPage++;
  getUsers(currentPage);
});