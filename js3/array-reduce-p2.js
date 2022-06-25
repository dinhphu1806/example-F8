var myCourses = [
    {
        id: 1,
        name: 'HTML - CSS',
        coin: 0,
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0,
    },
    {
        id: 3,
        name: 'JS',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 2,
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 10,
    }
];
// Tỉnh tổng số coin trong mảng

var myTotalhandler = function(accumulator, currentValue) {

    var total = accumulator + currentValue.coin;

    return total;
}

var newTotal = myCourses.reduce(myTotalhandler, 0) // initial value

console.log(newTotal)


// vd2: tính tổng của mảng
 var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 var toTalHandler = function(accumulator, currentValue) {
     var total = accumulator + currentValue;
     
     return total;
 }
 var newNumberAr = numberArr.reduce(toTalHandler, 0) 

 console.log(newNumberAr) // 45

 // vd3: Cho 1 mảng trong mảng chứa các số và mảng con khác nhau.
 // Y/c: Nôi chúng lại với nhau

 var myNumber = [3, 7, [8, 4], 9, 10, [16, 29, 15]];

 var newMyNumber = myNumber.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
 }, [])

 console.log(newMyNumber) //[3 7 8 4 9 10 16 29 15]

 // vd4: Lấy ra các khóa học đưa vào 1 mảng mới

 var topics = [
     {
        topic: "Front End",
        courses: [
            {
                id: 1,
                title: 'HTML-CSS'
            },
            {
                id: 2,
                title: 'javascript'
            },
            {
                id: 4,
                title: 'reactJS'
            }
        ]
     },
     {
         topic: "Back End",
         courses: [
             {
                 id: 4, 
                 title: 'NodeJS'
             },
             {
                 id: 5,
                 title: 'PHP'
             }
         ]
     }
 ];
// lấy các khóa học đưa ra mảng mới
var newTopic = topics.reduce(function(course, topic) {
    return course.concat(topic.courses)
}, []) // initial value

console.log(newTopic)

// duyệt id và title ra html

var html = newTopic.map(function(topic) {
    return `
        <div>
            <h2>${topic.title}</h2>
            <p>ID: ${topic.id}</p>
        </div>
    `
})

console.log(html.join(''))












 // đối số là function
 // mong muốn nhận được 1 arr thì initial value là []
 // biến lưu trữ là topic
 //
//  var newTopic = topics.reduce(function(topic, course){
//     return topic.concat(course.courses)
//  }, []);
 
//  console.log(newTopic)

//+

//duyệt mảng mới ra html qua title va id
// var html = newTopic.map(function(topic) {
//     return `
//         <div>
//             <h2>${topic.title}</h2>
//             <p>ID: ${topic.id}</p>
//         </div>
//     `;
// })

// console.log(html.join(' '))



             
