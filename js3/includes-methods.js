// includes methods: Kiểm tra 1 chuỗi có tồn tại trong 1 chuỗi hoặc là 1 phần tử tồn tại hay không

console.log(String.prototype.includes) //trả về function includes()

console.log(Number.prototype.includes) // undefinded

console.log(Array.prototype.includes) //trả về function includes()

console.log(Object.prototype.includes) // undefinded

console.log(Date.prototype.includes) // underfined

//1 - string
var title = 'responsive web design';

console.log(title.includes('responsive', 0)) // trả về true
// có nghĩa trong cái chuỗi title có cái chuỗi 'web'
// trường hợp không có trả về false
// 0 là bắt đầu tìm kiếm vị trí đầu tiên

// 2- array
var nameLanguages = ['javascript', 'PHP', 'Java']; // 0, 1, 2

console.log(nameLanguages.includes('javascript')); // trả về true
console.log(nameLanguages.includes('javascript', 1)); // trả về true
// tìm kiếm từ vị trí thứ 1 nên không có javacript