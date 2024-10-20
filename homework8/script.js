// @ts-chek
'use strict'

// burger
let burger = document.getElementById("burger");
let navigation = document.getElementById("navigation");
let button = document.getElementById("button");

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


// prev and next buttons
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


// xml request
let colorBox = document.getElementById("color-box")

let request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/unknown');

request.addEventListener('load', function(){
  let parsed = JSON.parse(this.response)

  parsed.data.forEach(function(item){
    let name = item.name;
    let color = item.color;

    let div = document.createElement('div');
    let text = document.createElement('div');

    text.classList.add('text')
    text.textContent = `${name}`

    div.classList.add('color')
    div.style.backgroundColor = color;

    colorBox.appendChild(div);
    div.appendChild(text)
  })

});

request.addEventListener('error', function(){
  let error = document.createElement('p')
  error.textContent = "server error";
  error.style.textAlign = "center";
  colorBox.appendChild(error)
});

request.send();


// fetch
let container = document.getElementById('company-box');

fetch("https://jsonplaceholder.typicode.com/users", {
  method: 'GET',
})
  .then(function(responce){
    if(!responce.ok){
      throw 'server error';
    }
    return responce.json();
  })
  .then(function(data){
    data.forEach(function(item){
      let name = item.company.name;

      let companyName = document.createElement('div');
      companyName.innerText = `${name}`

      container.appendChild(companyName);
    })
  })
  .catch(function(error){
    let errorText = document.createElement('p');
    errorText.innerText = error;
    container.appendChild(errorText);
  });

