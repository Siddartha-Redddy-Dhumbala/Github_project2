"use strict";


//single liner comment

/*multi
line
comment */

let fruits = ['Papaya' , 'Jamun' ,'Mango' ];

console.log(fruits)

function decending_sort() {
fruits.sort();
fruits.reverse();
document.getElementById("id1").innerHTML=fruits;
}


for(let i in fruits){
    console.log(fruits[i]);
};


let obj = { 
    first_name : 'Lionel' , 
    last_name : 'Messi'
};

console.log(obj.first_name);
console.log(obj['last_name']);


console.log(dog);
var dog = "Rottweiler";

