/** 
 * 
   Kiểu dữ liệu trong JavaScript
    
    1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        -Symbol

    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
*/

// Diễn giải:
// 1, Dự liệu nguyên thủy
// Number type

var a = 1;
var b = 2;
var c = 1.5;

// String type

var fullName = 'Le Phu';
var fullName1 = 'Le \'Phu';

console.log(fullName1);

// Boolean type: chỉ thể hiện True/ False

var isSuccess = true;

console.log(isSuccess) // true

// Undefined type : định nghĩa ra 1 biến mà không gán giá trị gọi là undefined

// var age;

// console.log(age); // in undefined

// Null type : không có gì
var isNull = null; // nothing

console.log(isNull) // null

// Symbol type
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique

console.log(id);

// 2. Dữ liệu phức tạp

// function
var myFuction = function() {
    // alert('Hi xin chào các bạn');
}
myFuction()

//object types

var myObject = {
    name: 'Le Phu',
    age: 21,
    address: 'Hanoi',
    myFunction: function() {
        return this.name + " " + this.address;
        
    }
};
console.log('Họ và tên: ', myObject.myFunction())


var myArr = ['JS', 'CSS', 'HTML'];

console.log(myArr);

// để kiểm tra kiểu dữ liệu 
// keyword: typeof_