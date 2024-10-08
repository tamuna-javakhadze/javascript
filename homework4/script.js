// @ts-chek  
'use strict'

// 1
let array = ["peach", "bannana", "blueberry", "kiwi", "pinaple", "apple", "plum"];

array.splice(-2, 1, "strawberry");
array = array.join(' ');

console.log(array);

// 2
let info = 'good day';

let newInfo = info.slice(5);

console.log(newInfo);

// 3
let calculateLength = text => text.length;
console.log(calculateLength("Tamuna"));

// 4
let array = [5, 25, 89, 120, 36];

array.push('javascript', 'python');
array.unshift('html', 'css');
alert(array.length);
array = array.join(' ');
alert(array);
array.shift();
array.pop();

// 5
let array = ["orange", "bannana", "kiwi"];

alert(array.length);
array.push("apple", "pinaple");
array.unshift("watermelon");
alert(array.length);
array.splice(2, 1, "mango");
array.pop();
array.shift();
alert(array.length);

// 6
let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b', 'c');
array3 = array3.join(' ');

console.log(array3);

// 7
let array7 =  [15, 100, 25, 10, 36];

array7.splice(-2, 1);
array7 = array7.join(' ');

console.log(array7);

// 8
let array8 = [ 1, 2 , 3 , 4, 5];

array8.splice(2, 1, "three");
array8 = array8.join(' ');

console.log(array8);

// 9
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

// 10
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let devidedByThee = array5.map(item => item/3);
devidedByThee = devidedByThee.join(' ');

console.log(devidedByThee);