// Toán tử trong JS
// + Toán tử số học: +, -, *, %.
// + Toán tử gán
// + Toán tử quan hệ => trả giá trị kq: true or false
// + Toán tử Lý luận => true or false
// + Toán tử so sánh (so sánh if else)

// Giải đáp
// 1/ Toán tử số học
var a = 10;
var b = 3;

console.log(a+b);

// 2/ Toán tử gán
var fullName = "Le Dinh Phu"; // gán giá trị ".." cho biến fullName

console.log(fullName);
// 3/ Toán tử quan hệ
var a = 10;
var b = 3;

console.log(a == b); // trả giá trị false
console.log(a > b); // trả giá trị true
console.log(a !== b); //trả giá trị true

// 4/ Toán tử lý luận
var a = false;
var b = true;

console.log(! a) 
// && và
// || hoặc
// ! khác <! a sẽ chọn true và ngược lại>

// 5/ Toán tử so sánh
var a = 10;
var b = 3;
if(a < b){
    console.log("Anh nho em !");
} else{
    console.log("Anh khong nho em !");
}

