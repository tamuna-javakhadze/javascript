// @ts-chek  
'use strict'

// 1
for (let i = 5; i<100; i++){
    console.log(i);
}

// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for(let item of array1){
    if(item>0 && item<10){
        console.log(item);
    }
}

// 3
let array2= [1, 2, 3, 4, 5];
let sum = 0;

for(let item of array2){
    sum += item;
}
console.log(sum);

// 4
let array3= [1, 2, 3, 4, 5];
let sum = 0;

for(let item of array3){
    sum += item;
}
console.log(sum / array3.length);

// 5
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };

console.log(user.studentstatus);
console.log(user['studentstatus']);

// 6
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if(user2.age < 18 && user2.studentstatus === 'active'){
    console.log("hello user");
}else if(user2.name === 'levani'){
    console.log("hello levani");
}else if(user2.studentstatus === 'active' || user2.age < 25){
    console.log("hello anna");
}else{
    console.log("error");
}

let welcome = 
    user2.age < 18 && user2.studentstatus === 'active'
        ? console.log("hello user") 
        : user2.name === 'levani'
        ? console.log("hello levani")
        : user2.studentstatus === 'active' || user2.age < 25
        ? console.log("hello anna")
        : console.log("error")

// 7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for(let item of array6){
    if(item % 2 === 0){
        console.log(item);
    }
}

// 8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for(let item of users){
    if(item['status'] === true){
        console.log(item);
    }
}

// or
for(let i = 0; i<users.length; i++){
    if(users[i]['status'] === true){
        console.log(users[i]);
    }
}

// 9
let array7 = [32, 14, null, '40', 50];

for(let item of array7){
    if(typeof item === "number" && item % 5 === 0){
        console.log(item);
    }
}

// 10
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for(let item of array8){
    for(let val of item){
        if(val>0){
            console.log(val);
        }
    }
}