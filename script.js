console.log("Hi, JS student!1");
console.log("Hi, JS student!2");
console.log("Hi, JS student!3");

let userName = "Dmitriy";
let anotherName = userName;
console.log(userName); //comment
console.log(anotherName);

const BIRH_DAY = "20.06.1977";

console.log(BIRH_DAY);

let x = 1;
let y = 3;
let c = y - x;
console.log(c);

let balance = 100;
let penalty = balance > 0 ? 50 : 0;
console.log(penalty);
let numberType = 10;
let floatNumber = 10.76;
let stringType = "text";
let stringTypeanother = "anothertext";
let stringType2 = 'text with "braces"';
console.log(stringType2);

let myName = "Dmitriy";
let surName = "Rodionov";
let fullName = myName + " " + surName;
console.log("This is my fullname " + fullName);
console.log(`This is my fullname ${fullName} \u270C.`);

let anotherNumber = 5;
console.log(typeof anotherNumber); //number
anotherNumber = String(anotherNumber);
console.log(typeof anotherNumber); //string

let str = "abc";
console.log(typeof str); //string
str = Number(str);
console.log(typeof str); //number
