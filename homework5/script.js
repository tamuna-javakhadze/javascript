// @ts-chek  
'use strict'

// 1
let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray = array2.map(function(item){
    if(typeof item === "number" ){
        return Math.pow(item, 2);
    }else if(typeof item === "string"){
        return item.toUpperCase();
    }
    return item;
});
newArray = newArray.join(' ');

console.log(newArray);

// 2
let question = prompt("what's the capital of Georgia?");
let correctAnswer = "tbilisi";

if(question.toLowerCase() === correctAnswer){
    console.log("correct");
}else{
    console.log("incorrect");
}

// 3
let array1 =["hello1", 14, 24, "hello2"];

let onlyNumbers = array1.filter(function(item){
    if(typeof item === "number"){
        return item;
    }
});

console.log(onlyNumbers);

// 4
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let moreThanThree = languages.filter(function(item){
    if(item.length>3){
        return item;
    }
});

console.log(moreThanThree);

// 5
let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let mWord = words.filter(function(item){
    item.toLowerCase();
    if(item.includes("m") || item.includes("M")){
        return item;
    }

});

console.log(mWord);

// 6
let link = 'https://google.com';

let checkHTTP = (item) => {
    if(item.includes('https://')){
        return ("includes");
    }else{
        return ("doesn't include");
    }
};

let checkLink = checkHTTP(link);
console.log(checkLink);

// 7
let array6 = [-1, -2, -3, 4];

let PositiveNum = array6.some(() => array6>0);

console.log(PositiveNum);

// 8
let string = "12345";

let result = string.split('').map(item => Number(item)).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);

// 9
let numbers = [-7, 23, -50, 120, 5.5];

let calculate = numbers.reduce((acc, item) => acc + item);

console.log(calculate);

// 10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let combined = arr1.concat(arr2, arr3);

console.log(combined);