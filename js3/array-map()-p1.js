// array map()

// vd1:
// Tạo 1 mảng chứa các objects
// y/c: Muốn thêm tất cả các tên bằng từ 'Khóa học: ' trước values
//      Bổ sung thêm 1 trường (key: values) là coinText: 'Giá: 0'

var courses = [
    {
        id: 1,
        name: 'javscript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML- CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 1
    },
    {
        id: 4,
        name: 'Java',
        coin: 1
    },
    {
        id: 5,
        name: 'reactJS',
        coin: 1
    }
];
// phương thức map() là 1 function
// phương thức của 1 đối tượng
// thằng arr courses là 1 đối tượng
// dấu chấm là gọi đến phương thức map()
// phương thức courses.map() sẽ trả về giá trị/ return về mảng mới là newCourses 
// mảng mới sẽ trả đúng số phần tử có trong mảng cũ


// c1:
/*var newCourses = courses.map(function() {

})
console.log(newCourses)
*/
//c2:
// truyền vào 1 function
function courseHandler(course, index) {
    // console.log(course) //1
    // return 123; //2
   // return myCourse.name; //3 tách ra mảng mới: lấy ra tất cả các tên khóa học
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        // originArray: originArray
    }
}

var newCourses = courses.map(courseHandler) // truyền vào tham số, đối số của thằng map
 console.log(newCourses)


// thằng map duyệt qua từng phàn tử có trong mảng, mỗi khi nó duyệt qua phần tử nào nó sẽ call(gọi) lại
// cái function mà chúng ta đã truyền qua thằng map là coursesHandler
// Chạy qua element thứ nhất, dùng và lấy luôn cái element rồi gọi ngược lại cái function trên mà chúng ta đã truyền vào 
//đặt tham số là course trong function
// lần thứ nhất nó chạy qua element 1 và duyệt- lặp qua và lấy element 1 ra  và gọi ngược lại cái function mà chúng ta
// đã truyền vào cho nó là coursesHandler

// cái function nó return cái gì thì cái vị trí trong mảng mới đó sẽ trả về giá trị đó (vd: 123)



//vd2: 
var myCourses = [
    {
        id: 1,
        name: 'HTML - CSS',
        coin: 2
    },
    {
        id: 2,
        name: 'javscript',
        coin: 10,
    },
    {
        id: 3,
        name: 'PHP',
        coin: 12,
    },
    {
        id: 4,
        name: 'C#',
        coin: 20
    }
];

var myCourseHandler = function(myCourse, index) {
    // return myCourse.name;
        // id: myCourse.id,
        // name: `Khoa hoc: ${myCourse.name}`,
        // coin: myCourse.coin,
        // priceText: `Gia: ${myCourse.coin}` 
    return `<h2>${myCourse.name}</h2>`;
    
} 

var newMyCourses = myCourses.map(myCourseHandler)  // đưa tham số trong map ra ngoài 

console.log(newMyCourses.join(''))






var myOb = [
    {
        id: 1,
        avatar: 'AB',
        total: 100
    },
    {
        id: 2,
        avatar: 'CD',
        total: 200
    },
    {
        id: 3,
        avatar: 'EF',
        total: 300
    },
    {
        id: 4,
        avatar: 'GH',
        total: 400
    }
];

var myHandleOb = function(a, b) {
    // return {
    //     id: `STT: ${a.id}`,
    //     avatar: `Ảnh đại diện ${a.avatar}`,
    //     priceTotal: `Giá: ${a.total}`
    // }
    return `
        <div>
            <h1>${a.avatar}</h1>
            <p>${a.id}</p>
        </div>
    `
}

var newmyOb = myOb.map(myHandleOb)

console.log(newmyOb.join(" "))

