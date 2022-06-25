/* Toán tử so sánh */
/** 
    - ===
    - !==

*/

var a = 1;
var b = 1;

console.log(a == b); // true

var a = 1;
var b = '1';

console.log(a == b); // true
console.log(a === b); // false : so sánh tuyệt đối cả value và dataType 

console.log(a !=b) // false
console.log(a !==b) // true