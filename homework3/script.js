// @ts-chek  
'use strict'

// 1
let array = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function result(array){
    let sum = 0;

    for(let item of array){
        sum += item;
    }
    console.log(sum);
}

result(array);

// 2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: [32,10, 50, 6, 7, 8, 11, 6, 3, 9],
    isloggedin: true
}
  
function online(){
    if (user.isloggedin){
        return `${user.firstname} ${user.lastname}`;
    }else{
        return false;
    }
}
let userInfo = online();
console.log(userInfo);

// 3 - ???
let array = [-3, 0, 15, 22, -31, 17];

function getMaxNumber(array){
    for(let item of array){
    }
}

console.log(getMaxNumber(array));

// 4
let evenOdd = (n) => {
    if(n % 2 === 0){
        return 'this number is even';
    }
    return 'this number is odd';
}

console.log(evenOdd(2));

// 5
let array = [1,2,3,4,5];

function reverse(array){
    for(let i = array.length-1; i>=0; i--){
        console.log(array[i]);
    }
}

reverse(array);

// 6
let userAge = (birthYear) => {
    let currentYear = 2024;
    let age = currentYear - birthYear;
    console.log(age);
    let check = age>=18 ? "adult" : "not an adult";
    return check;
}

console.log(userAge(1998));

// 7
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let findFive = function (array){
    for(let item of array){
        if(item === 5){
            return 'there is';
        }
        return 'ther is not';
    }
}
let number5 = findFive(array2);
console.log(number5);


// 8
let array5 = [1, 2, 3, 7, 6, 9];

let skip = (array) =>{
    for(let item of array){
        if (item === 7){
            continue;
        }
        console.log(item);
    }
}

skip(array5);

