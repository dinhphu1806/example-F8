/**
 array methods:

 1- forEach(): Duyệt qua từng phần tử của mảng
 2- every(): - Kiểm tra tất cả các phần tử có trong mảng thỏa mãn điều kiện giá trị trả về
             - Trả về kiểu boolean ->  true/false
             - Kiểm tra nểu thỏa mãn tất cả thì trả về true, còn 1 cái không phải thì trả về false
             - Lấy tất cả
 3- some(): - Ngược lại với every()
            - Kiểm tra từng các phần tử trong mẩng thỏa mãn điều kiện đầu tiên thì lập tức trả về true luôn
            - Còn không có cái nào thì trả về false
            - Lấy 1 cái đúng cũng được
            - Kiểu trả về boolean true/ false
 4- find()  - Tìm kiếm phần tử trong mảng
            - Tìm kiếm phần tử có trong mảng nếu có trả về cả cụm phần tử đó, còn không thì trả về undefind
            - Nếu tìm có 2 cái trùng thì chỉ lấy 2 cái đầu tiền
            - in ra cả cụm phần tử đưuọc tìm kiếm trong mảng
            - Kiểu trả về là 1 objects trong mảng
 5- filter()- Lọc phần tử trong mảng
            - Lọc ra các phần tử có trong mảng 
            - Lọc ra tất cả nếu trùng với biểu thức điều kiện return 
 6- map() - Chỉnh sửa , thay đổi phần tử có trong mảng   
          - 
          function myHandler(course, index) {
               return {
                    id: course.id,
                    name: `Khoa hoc: ${course.name}`, // thêm từ Khóa học trước tên mỗi khóa học
                    coin: course.coin,
                    coinText: `Gia khoa hoc: ${course.coin}` // thêm field coinText của phần tử trong mảng
               }     
          }

          var newHandler = handler.map(myHandler)

          consoloe.log(newHandler);       
          
 7- reduce() - Nhận về 1 giá trị duy nhất sau khi tính toán và xử lý các phần tử trong mảng
 */


 var myHandlers = [
     {
         id: 1,
         name: 'English',
         title: 'School',
         coin: 2000,
         author: 'Hà Nội'
     },
     {
        id: 2,
        name: 'Math',
        title: 'Capital',
        coin: 5000,
        author: 'Thanh Hóa'
     },
     {
        id: 3,
        name: 'Physic',
        title: 'Center House',
        coin: 3000,
        author: 'TP Hồ Chí Minh'
     },
 ];

//  var newHandler = myHandlers.map(function(handle, index) {
//      return {
//          id: handle.id,
//          name: `Khóa học: ${handle.name}`,
//          title: handle.title,
//          coin: handle.coin,
//          coinText: `Giá coin: ${handle.coin}`,// thêm field coinText
//          author: handle.author,
//          index: index
//      }
//  });

//  console.log(newHandler)

// tính tổng cố coin trong các objects trên : tạo biến khởi tạo là 0
var newHandler = myHandlers.reduce(function(accumulator, currentValue) {
    
    var total = accumulator + currentValue.coin
   
    return total

}, 0) // initial Value: tạo biến giá trị khởi tạo

console.log(newHandler)

// Flat - "làm phẳng" mảng từ Depth array - "mảng sâu" nôi chuỗi 
var myArr = [11, 4, [64, 74], 89, [100, 234, 235]];

var newMyArr = myArr.reduce(function(arr1, arr2) {
  
    return arr1.concat(arr2);

}, [])

console.log(newMyArr)





const arr1 = ['1', '2', '3', '4'];
const arr2 = ['Blue', 'Green', 'Red', 'Yellow'];

const myArrNew = arr1.map(function(value, index) {
  return {
    id: value,
    value: arr2[index],
    
  }
});

console.log(myArrNew)
// lấy ra như dưới
// 0: {id: '1', value: 'Blue'}
// 1: {id: '2', value: 'Green'}
// 2: {id: '3', value: 'Red'}
// 3: {id: '4', value: 'Yellow'}


// const myCourses = [
//     {
//       id: 1,
//       name: 'HTMl',
//       coin: 10
//     },
//     {
//       id: 2,
//       name: 'CSS',
//       coin: 20
//     },
//     {
//       id: 3,
//       name: 'JS',
//       coin: 100
//     }
//   ];

// const newMyCourse = myCourses.map(function(value, index) {
//     return {
//       id: value.id,
//       name: `Ten khoa hoc: ${value.name}`,
//       coure: value.coin,
//       courseText: `Gia khoa hoc: ${value.coin}`
//     }
  
    
//   console.log(newMyCourse);

