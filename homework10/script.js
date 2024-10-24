'use strict'

const menuFilterWraper = document.getElementById('menu-filter-wraper');
const input = document.getElementById('input');
let listItems = [];

async function asyncFnc(){
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast', {
        method: 'GET'
    })
    try{
        if(!response.ok){
            throw new Error ('error in fetching the data')
        }
        const parsed = await response.json();
        parsed.meals.forEach(element => {
            createMeal(element);
        })
    }
    catch(e){
        console.log(e);
    }
}
asyncFnc();

function createMeal(item){
    let li = document.createElement('li');
    let text = document.createElement('p');
    let img = document.createElement('img');

    li.classList.add('meal-div');
    text.innerText = item.strMeal;
    text.classList.add('meal-text')
    img.setAttribute('src', item.strMealThumb);
    img.classList.add('meal-img');
    
    listItems.push(li);
    console.log(listItems);

    menuFilterWraper.appendChild(li);
    li.appendChild(text);
    li.appendChild(img);
}

// filter
function filter(searchItem){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchItem.trim(' ').toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
}

input.addEventListener('keyup', function(){
    filter(this.value);
})