let message1 = "Hello World";// Infering Types, 
                            //take your cursor on the variable name
console.log(message1);

let numb2 = 21;
console.log(numb2);

let isStudent = true
console.log(isStudent);


//string must be written in double quotes

//strong typing
//type inference

// Difference between JSON  and javascript object

// Let object name = {
// "key1" : "value1",
 // "key2" : "value2",
 // "key3" : "value3"
//}

let student1 = {
    "name": "Rida",
    "age": 25,
    "isStudent": true
};

console.log(student1.name);   // dot notation

console.log(student1.isStudent);  // dot notation

console.log(student1["age"]);  // square bracket notation

//JSON Array

let students = [
    {
        "name": "Rida",
        "age": 24,
        "isStudent": true
    },
    {
        "name": "sumaira",
        "age": 22,
        "isStudent": false
    },
    {
        "name": "Aqsa",
        "age": 23,
        "isStudent": true
    }
];


// Syntax Error

//let myName = AFSHEEN

  //  Lett arr : {1,2,3]

        //TYPE ERROR
        let message = "Hello World";
//console.loger(message);

//let age:number = "twenty"
//let numbers: number[]=["1","2","3"];
        
//Assignability Error
//let message1 = "Hello World";

//message1= true
message1 = "enjoy coding"
console.log(message);

//Reference Error

// console.log (add(2,3))
// const add =(a:number, b:number)=>{
//     return a+b;
// }

//strong typing
//strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true; //explicit typing

// //type inference
let myCountry = "Pakistan";
let n= 10.9;
n= 22;
let g = false;
g = true        //implicit typing


//let and const

//use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//const        //cant redeclare or reassign

const myAcount = 2356;
//  myAcount = 89987

//var
 var messege2 ="hello";
 var message2 = "Enjoy coding";


