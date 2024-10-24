'use strict'

const postMainWraper = document.getElementById("post-main");
const overlay = document.getElementById("overlay");
const postDescr = document.getElementById("content");
const closeIcon = document.getElementById("close");
const addButton = document.getElementById("add-post");
const overlayAdd = document.getElementById("overlay-add");
const form = document.getElementById("form");

// function ajaxFnc(url, functionNew) {
//     const requist = new XMLHttpRequest();
//     requist.open('GET', url);
//     requist.addEventListener("load", function(){
//         let parsed = JSON.parse(this.response);
//         functionNew(parsed);
//     });
//     requist.send();
// }

// ajaxFnc('https://jsonplaceholder.typicode.com/posts', function(data){
//     data.forEach(element => {
//         createPost(element);
//     });
// });

function fetchFnc(url, functionNew) {
    fetch(url, {
        method: 'GET'
    })
        .then(function(response){
            if (!response.ok) {
                throw response.status;
            }
            return response.json();
        })
        .then(function(parsed){
            functionNew(parsed);
        })
        .catch(function(error){
            console.log(error);
        });
}

fetchFnc('https://jsonplaceholder.typicode.com/posts', function(data) {
    data.forEach(element => {
        createPost(element);
    });
});

function createPost(item){
    const divEl = document.createElement('div');
    divEl.classList.add('post');
    divEl.setAttribute('data-id', item.id);

    const titleId = document.createElement('h3');
    titleId.innerText = item.id;

    const title = document.createElement('h2');
    title.innerText = item.title;

    const deleteDiv = document.createElement('button');
    deleteDiv.innerText = 'delete';
    deleteDiv.classList.add('delete-button');
    deleteDiv.setAttribute('data-delete-id', item.id)

    divEl.appendChild(titleId);
    divEl.appendChild(title);
    divEl.appendChild(deleteDiv);

    postMainWraper.appendChild(divEl);

    divEl.addEventListener("click", function(){
        overlay.classList.add("activeOverlay");
        const divId = this.getAttribute('data-id');

        const newUrl = `https://jsonplaceholder.typicode.com/posts/${divId}`; //აქაც const რატომ?
        fetchFnc(newUrl, function(newData){
            const pDescr = document.createElement('p');
            pDescr.innerText = newData.body;
            postDescr.appendChild(pDescr);
        });
    });

    deleteDiv.addEventListener('click', function(event){
        event.stopImmediatePropagation();
        const deleteId = event.target.getAttribute('data-delete-id');

        const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${deleteId}`;
        console.log(deleteUrl);
        fetch(deleteUrl, {
            method: 'DELETE'
        })
        .then(divEl.remove());
    });
}

closeIcon.addEventListener("click", function(){
    overlay.classList.remove("activeOverlay");
    postDescr.innerHTML = ' ';
});


addButton.addEventListener('click', function(){
    overlayAdd.classList.toggle('active-overlay-add');
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target[0]);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: e.target[0].value,
            userId: 11,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((newObj) => {
            overlayAdd.classList.remove('active-overlay-add');
            e.target[0].value = "";
            createPost(newObj);
            console.log(newObj)
        });
})