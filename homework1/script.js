// @ts-chek  
'use strict'

//  assignment 1
let num = 100;

if (num<50){
    console.log("it's less than 50");
}else if (num>20) {
    console.log("it's more than 20");
}else{
    console.log(false);
}

//  assignment 2
let firstName = "mariam";

if (firstName === "mariam"){
    console.log(true);
}else{
    console.log(false);
}

// assignment 3
let firstName = "mariam";

switch (firstName){
    case "mariam":
        console.log(true);
        break;
    default:
        console.log(false);
}