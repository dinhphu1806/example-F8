// object
// là 1 đối tượng chứa tất cả các đối tượng đó và các hành động đó

//ví dụ: 1 xe ô tô có các thuộc tính: màu sắ đỏ, bánh xe màu gì, cân nặng bn , vận tốc ...

//khai báo 1 object là user
let user = {
    firstName: "Phu",
    lastName: "Le",
    age: 21,
    gender: "Male",
    address: "Thanh Hoa",
    fullName: function(){  //nameFunction: function(){ action}
        // action
        return this.firstName + " " + this.lastName +" "+ this.age;
        //this : đây là 1 đối tượng user nó có quyền sở hữu trong hàm fullName
    }
}
// lấy giá trị trong hàm fullName
// tên object. giá trị trong đối tượng user
console.log(user.age)
console.log(user.firstName + " " + user.lastName)
// lấy giá trị trong hàm fullName
console.log(user.fullName())



////OBJECT CONSTRUCTOR
// object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return $(this.firstName) $(this.lastName)
    }
}

var author = new User('Le', 'Phu', 'Avatar');
var user = new User('Nguyen', 'An', 'Avatar');

// thêm thuộc tính, phương thức
author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Liệu có khóa áp.net k ad';

console.log(author.getName());
console.log(user.getName()); 


