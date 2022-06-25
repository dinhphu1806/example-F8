/**
 Math object

 - Math.PI : trả lại số PI
 - Math.roud() : làm tròn số  1 <---- 1.5 -----> 2
 - Math.abs() : số tuyệt đối / giá trị tuyệt đối   -4 -> 4
 - Math.ceil() : làm tròn trên  2.1 -> 3
 - Math.floor(): làm tròn dưới   2.1 -> 2
 - Math.random(): trả về 1 dãy số thập phân ngẫu nhiên nhỏ hơn 1
 - Math.min()
 - Math.max()

*/

console.log(Math.PI); // 3.141592653589793

console.log(Math.round(1.3)) // làm tròn là 1
console.log(Math.round(1.5)) // làm tròn là 2
console.log(Math.round(1.6)) // làm tròn là 2

console.log(Math.abs(4)) // 4
console.log(Math.abs(-5)) // 5

console.log(Math.ceil(2.1)) // làm tròn lên 3

console.log(Math.floor(2.1)) // làm tròn xuống 2

console.log(Math.random()) // ứng dụng đặt ra cái tên ngẫu nhiên để dùng nó 
// tạo ra 1 dãy số ngẫu nhiên trong 1 khoảng cho trước
// Tạo ra 1 dãy số ngẫu nhiên trong 1 khoảng  từ 1 đến 10
console.log(Math.floor(Math.random() * 10))



