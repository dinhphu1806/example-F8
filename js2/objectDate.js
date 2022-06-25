// đối tượng Date
// tạo 1 biên lưu = new Date()
var date = new Date(); // muốn date thành đối tượng được truy xuất phương thức dùng new Date()

console.log(typeof date) // in object
console.log(date.getFullYear()) // 2022
console.log(date.getMinutes()) // số phút hiện tại
console.log(date.getMonth() + 1) // tháng từ 0 - 11 
console.log(date.getDate()) // 18

var year = date.getFullYear();
//console.log(year); // 2022

var month = date.getMonth() +1;
//console.log(month)// 3+1=4

var day = date.getDate()
//console.log(day); // 18

console.log(`${day} / ${month} / ${year}`); // 18/04/20211
