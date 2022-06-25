/*
    Array methods:
        forEach() - Duyệt qua từng phần tử của mảng
        every() - Kiểm tra tất cả các phần tử có trong mảng thỏa mãn - trả về kiểu giá trị boolean: true/ false
                - Kiểm tra lần lượt các phần tử trong mảng nếu thỏa mãn cả thì mới trả về true
                - 1 cái không thỏa mãn thì trả về false
        some()  - Ngược lại với every()
                - Kiểm tra lần lượt các phần tử trong mảng nếu thỏa mãn 1 cái thì mới trả về true luôn
                - không cái nào thỏa mãn trả về false
        find()  - Tìm từ khóa trong mảng
                - Lần lượt tìm từ khóa có trong mảng nếu thỏa mãn điều kiện giá trị trả về thì xuất ra luôn 
                - không quan tâm cái còn lại có đúng giá trị không
                - lấy duy nhất
        filter() - Lọc từ khóa
                 - Lần lượt lọc các từ khóa có trong mảng nếu thỏa mãn điều kiện giá trị trả về thì xuất ra luôn
                 - Lấy tất cả 
        map() - chỉnh sửa, thay đổi phần tử trong mảng
        reduce() - Nhận về 1 giá trị duy nhất sau khi tính toán và xử lý các phần tử trong array
*/

// 1 - forEach()
// create 1 array includes các objects - Y/c: Duyệt qua từng phần tử trong mảng
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 25
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'reactJS',
        coin: 400
    }
]
// gọi arr truy cấp bằng dấu chấm đến forEach() -> tham số truyền vào bằng 1 function 
courses.forEach(function(course, index) {
    console.log(index, course);
}); // callback: gọi lại

// 2 - every()
var prices = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'reactJS',
        coin: 0
    }
]
// gọi arr truy cập bằng dấu chấm đến every() -> tham số truyền vào bằng 1 function 
// Y/c: kiểm tra tất cả các phần tử của mảng khóa học này có phải là khóa học miễn phí hay không
// chỉ cần 1 ông coin = 0  
var isFree = prices.every(function(price, index) {
    console.log(index)
    return price.coin === 0;
}); // callback: gọi lại

console.log(isFree)
// lặp qua từng phần tử của mảng, mỗi lần lặp lại qua từng phần tử nó sẽ gọi ngược lại hàm chúng ta đã truyền vào
// truyền vào tham số thứ nhất
// kiểm tra lần lượt phần tử đầu tiên nếu biểu thức dk mà đúng thì nó tiếp tục ktra phần tử thứ 2 == 0  ... thì true, (1 thằng sai) khác 0 là false
// phải đúng tất cả với điều kiện thì mới trả về true
// còn 1 cái sai sẽ trả về false

// 3 - some()
var prices2 = [
    {
        id: 1,
        name: 'Javascript',
        coin: 999
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 100
    },
    {
        id: 4,
        name: 'PHP',
        coin: 235
    },
    {
        id: 5,
        name: 'reactJS',
        coin: 4356
    }
]
// gọi arr truy cấp bằng dấu chấm đến every() -> tham số truyền vào bằng 1 function 
// Y/c: kiểm tra tất cả các phần tử của mảng khóa học này có phải là khóa học miễn phí hay không
// chỉ cần 1 ông coin = 0  
var isFree2 = prices2.some(function(price2, index) {
    // console.log(index)
    return price2.coin === 0;
}); // callback: gọi lại

console.log(isFree2)
// lặp qua từng phần tử của mảng, mỗi lần lặp lại qua từng phần tử nó sẽ gọi ngược lại hàm chúng ta đã truyền vào
// truyền vào tham số thứ nhất
// kiểm tra lần lượt phần tử đầu tiên nếu biểu thức dk mà sai tiếp tục kiểm tra khi nào đúng dừng lại
// còn nếu đúng lập tức sẽ dừng lại và trả về kết quả là true
// chỉ cần 1 cái đúng sẽ trả về true


// 4 - find()
// Tạo 1 mảng gồm các objects
// y/c: Tìm trong mảng có name = 'Ruby' không . Nếu có thì phương thức find() sẽ trả về phần tử đó Không có sẽ trả về null/ undefind
 var currents = [
     {
         id: 1,
         name: 'C#',
         price: 100
     },
     {
        id: 3,
        name: 'Ruby',
        price: 346
    },
    {
        id: 4,
        name: 'Java',
        price: 436
    },
    {
        id: 5,
        name: 'PHP',
        price: 67
    },
 ]

 var current = currents.find(function(current, index) {
    return current.name === 'Ruby';
 });

 console.log(current)

// lặp qua từng phần tử, mỗi lần lặp qua hàm truyền vào sẽ được gọi lại
// kiểm tra phần tử nào mà thỏa mãn đk thì trả về phần tử đó luôn đầu tiên
// không thỏa mãn trả về undefind

// 4 - find()
// Tạo 1 mảng gồm các objects
// y/c: Tìm trong mảng có name = 'Ruby' không . Nếu có thì phương thức find() sẽ trả về phần tử đó Không có sẽ trả về null/ undefind
var currents2 = [
    {
        id: 1,
        name: 'C#',
        price: 100
    },
    {
       id: 3,
       name: 'Ruby',
       price: 346
   },
   {
       id: 4,
       name: 'Java',
       price: 436
   },
   {
       id: 5,
       name: 'Ruby',
       price: 67
   },
]

var current2 = currents2.filter(function(current2, index) {
   return current2.name === 'Ruby';
});

console.log(current2)

// lặp qua từng phần tử, mỗi lần lặp qua hàm truyền vào sẽ được gọi lại
// kiểm tra phần tử nào mà thỏa mãn đk thì trả về phần tử đó 
// lọc ra các phần tử thỏa mãn điều kiện giá trị trả về
// không thỏa mãn trả về undefind

// var myArrs = [
//     {   
//         id: 1,
//         name: 'Lê',
//         age: 21,
//         address: 'Thanh Hóa'
//     },
//     {
//         id: 2,
//         name: 'Nguyễn',
//         age: 0,
//         address: 'Hà Nội'
//     },
//     {
//         id: 3,
//         name: 'Trần',
//         age: 78,
//         address: 'Bắc Ninh'
//     },
//     {
//         id: 4,
//         name: 'Trịnh',
//         age: 0,
//         address: 'Hải Phòng'
//     }
// ]

 
// myArrs.forEach(function(myArr, index) {
//     console.log(myArr)
// })
// var ismyArr = myArrs.every(function(myArr, index) {
//     return myArr.id == 5;
// })
// console.log(ismyArr)
// var ismyArr = myArrs.filter(function(myArr, index) {
//     return myArr.age == 0
// })
// console.log(ismyArr)