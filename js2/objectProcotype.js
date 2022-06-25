/**
 Object procotype - Basic : Nguyên liệu tạo nên ngôi nhà
   1- Procotype là gì ?
   2- Sử dụng khi nào?
 */
// create bản thiết kế
var User = function( fullName, age, address ) { // định nghĩa bên trong hàm
    this.fullName = fullName; // this.fullName -> fullName gọi là thuộc tính /property
    this.age = age;
    this.address = address;
    this.getUser = function () { // thêm getUser : phương thức / method
        return `${this.fullName} ${this.age}`
    };
}
// thêm 1 thuộc tính tên là className = F8 để thể hiện tất cả các new User đều học chung 1 lớp là F8
// User.className = 'F8';
User.prototype.className = 'F8'; // thêm thuộc tính className = F8
User.prototype.getClassName =  function() {
    return this.className;
}

// khởi tạo đối tượng cho bản thiết kế
// giá trị truyền vào
var author = new User ('Lê Đình Phú', 21, 'Xuân Lôc - Triệu Sơn - Thanh Hóa');
var user = new User ('Nguyễn Văn A',19, 'Ha Noi')

console.log(author.getUser());
console.log(user.getUser());

console.log(author.className)
console.log(user.className)