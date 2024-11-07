'use strict'
const menuWraper = document.getElementById('menu-wraper');

axios.get('http://localhost:3000/meals')
  .then(function (response) {
    console.log(response);
    response.data.forEach(element => {
      console.log(element);
      createMeal(element);
    })
  })
  .catch(function (error) {
    console.log(error);
  });


function createMeal(item){
    let div = document.createElement('div');
    let text = document.createElement('p');
    let img = document.createElement('img');

    div.classList.add('meal-div');
    text.innerText = item.strMeal;
    text.classList.add('meal-text')
    img.setAttribute('src', item.strMealThumb);
    img.classList.add('meal-img');
    

    menuWraper.appendChild(div);
    div.appendChild(text);
    div.appendChild(img);
}






