// Array
// + Khái niệm: mảng là 1 đối tượng, nó lưu trữ nhiều thành phần khác , mảng truy cập thông qua chỉ số..
// + Cú pháp
// + Kiểm tra Array
// + Truy cập mảng

// 1/ Cú pháp
const arr = ["PHP", "Javascript", "Java", "C++", "C#"]; 
// 2/ Kiểm tra
// kiểm tra biến arr có phải là 1 mảng hay ko
console.log("Cách 1: ", Array.isArray(arr));

console.log("Cách 2: " , arr instanceof Array)

// 3/ Truy cập mảng
// kiểm tra trong mảng có bao nhiêu thành phần

console.log(arr.length) // xuất độ dài bao nhiêu phần tử

// muốn lấy phần tử trong mảng
console.log(arr[0]) // lấy phần tử thứ nhất chạy từ 0
console.log(arr[4]) // lấy phần tử thứ 5 


/// Phương thức mảng
// 0: push(): Thêm 1 phần tử vào cuối mảng >< unshift()
// 1: pop(): Xóa phần tử ở cuối mảng 
// 2: shift(): Xóa phần tử đầu mảng
// 3: unshift(): Thêm phần tử vào đầu mảng
// 4: splice(index, number ,..): Thêm or xóa number phần tử ở vị trí index
// 5: concat(): nối 2 mảng
// 6: slice(start, to): trích xuất mảng
// 7: join(delin): nối các phần tử của mảng tách bởi delin
// 8: toString(): trả về danh sách mảng dạng string 

const books = ["PHP", "Java", "C++", "GoLang", "Python"]
const books1 = [".Net", "C#"]
// 0/ Push // thêm javasript vào cuối mảng
/*books.push("Javascript"); // thêm javasript vào cuối mảng
console.log(books);*/
// 1/ pop // xóa phần tử cuối mảng là "Python"
/*books.pop(); // xóa phần tử cuối mảng là "Python"
console.log(books);
// 2/ shift // xóa phần tử đầu mảng
books.shift(); // xóa phần tử đầu mảng
console.log(books)
// 3/ unshift // thêm phần tử HTML đầu mảng
//books.unshift("HTML"); // thêm phần tử HTML đầu mảng
//console.log(books)
*/
// 4/ splice 

//books.splice(1, 3); // từ ví trí index 1 xóa 3 phần tử tiếp theo
//books.splice(1, 3, "Anh dep trai"); // từ vị trí 1 xóa 3 phần tử tiếp theo chèn vào sau "Anh dep trai"
//console.log(books);
// kết quả: "PHP", "Anh dep trai", "Python"


// 5/ concat()
//console.log(books.concat(books1)) // nối arr books với books1
// hoặc trong ES6 
// console.log(...books1,...books);

// 6/ slice(start to end)
//console.log(books.slice(1)) // trích xuất ra mảng mới lấy vị trí thứ 1- > n (tính từ 0 đến n)
//console.log(books.slice(1, 4)) // trích xuất mảng mới lấy từ vị trí 1 đến 4-1 trong khoảng 1 đến 4

// 7/ toString()
//console.log(books.toString()) // trả về 1 chuỗi string của array

var my1 = '123456562852452';
var result = [];

for(i = 0; i < my1.length; i+=3) {
    result.push(my1.slice(i, i+3))
}
console.log(result)