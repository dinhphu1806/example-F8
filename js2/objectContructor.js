//Object constructor : tạo nên bản thiết kế cho đối tượng
// tạo từ khóa function viết hoa chữ cái đầu -> quy ước chung

// or var User = function(firstName, lastName, avatar)
function User(firstName, lastName, avatar) {
    this.firstName = firstName; // firstName được truyền vào khi khởi tạo đối tượng-- this.firstName : thuộc tính
    this.lastName = lastName;   // this để mô tả các thuộc tính/ phương thức sẽ có cho đói tượng 
    this.avatar = avatar;     // khi khởi tạo cái object constructor User
    // tạo phương thức
    this.getName = function() { // getName : phương thức / method
        return `${this.firstName} ${this.lastName} ${this.avatar}` // this thể hiện method getName
    }
}
// khởi tạo đối tượng cho bản thiết kế  -> xây nhà
var author = new User('Le', 'Phu', 'Avatar');
var user = new User('Nguyen', 'A', 'Avatar');

//thêm thuộc tính, phương thức 
author.title ='Chia sẻ lập trình';
user.comment ='coment here';

console.log(author.getName());
console.log(user.getName());

// Tổng kết