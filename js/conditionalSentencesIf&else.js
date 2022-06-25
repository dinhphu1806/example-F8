// câu điều kiện if else
if(true){
    // code
}else{
    //code
}
// operator: ===, <, > 
//vd1:
let age = 10; 
if (age === 10 ){
    console.log("em là của anh")
}else{
    console.log("em không là của anh")
}

//vd2:
let buyBook ="maths";
if(buyBook === "maths"){
    console.log("10");
}else if (buyBook === "physics"){
    console.log("9");
} else {
    console.log("No book !")
}

// vd3: 
var fullName = 'Le Phu';

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}

//II.
/*
- 0
*- false
- '' - ""
- undefined
- NaN
- Null
Note: Ngoài 6 cái trên khi truyền giá trị khác vào sẽ convert sang boolean là true
*/ 
// 0
var fullName = 0; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
// false
var fullName = false; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
// dấu ''
var fullName = ''; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
// dấu ""
var fullName = ""; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
// undefined
var fullName = undefined; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
// NaN
var fullName = NaN; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}
//null
var fullName = null; // in false

if(fullName) {
    console.log('True');
}else {
    console.log('false');
}