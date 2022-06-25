/* Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:
Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
Dùng làm tiền tố: ++variable (toán tử nằm trước biến)*/

//Diễn giải:
//I. example
// 1/ Sử dụng ++ làm hậu tố  (variable++ )
var a = 2;

 console.log(a++); //2
 console.log(a);  //3 // khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1.

 console.log(a++); //3
 console.log(a); //4 // Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.
 

 // 2/ Sử dụng ++ làm tiền tố (++variable)

 var a = 6;

 console.log(++a); // 7
 console.log(a); // 7

 console.log(++a); // 8
 console.log(a); // 8
//Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.

// Tổng kêt: Tổng kết
/*
x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm 
*/

//1/ hậu tố variable++

var number1 = 1;

console.log(number1++); // 1
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3

//1/ hậu tố ++variable

var number2 = 1;

console.log(++number2); // 2
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3

// Toán tử -- tương tự các bạn nhé, điểm khác
// là thay vì cộng 1 trừ toán tử -- sẽ trừ 1

// II. Nguyên lý hoạt động prefix(tiền tố) và postfix(hậu tố)
//1. Tiền tố  (prefix)
var a = 6;

console.log(++a); // 7
// viêc 1: + 1 cho a, a= a + 1 => a = 7 
// việc 2: Trả về a sau khi được + 1

 var b = 2
 var output = ++b;
 console.log('ouput: ', output) // 3

 //2. Hậu tố (postfix)
var c = 4;

var output = c++;

console.log('output: ', output) // 4

 // việc 1: biến `c copy`, `c copy`= 4
 // việc 2: cộng 1 của c, c=c+1 => c = 5
 // việc 3: trả về `c copy`

 console.log(c);

 // ex:
 var number = 6;

 var ouput = number++ + --number;
// 6 + 6
 console.log('output: ', ouput)