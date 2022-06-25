
//  array reduce() : Nhận về một giá trị duy nhất sau khi tính toán và xử lý các phần tử trong array

// bài toán: Nhận về một giá trị duy nhất là tổng số coin của tất cả các khóa học là bn ?
 
var myBooks = [
    {
        id: 1,
        name: 'HTML-CSS',
        coin: 100
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 50
    },
    {
        id: 3,
        name: 'PHP',
        coin: 70,
    },
    {
        id: 4,
        name: 'Java',
        coin: 300
    }
];
var myBookHandler = function(myBook, index) {
    return{
            name: `Khoa hoc: ${myBook.name}`,
            id: myBook.id,
            coin: myBook.coin,
            coinText: `Gia coin: ${myBook.coin}`
    } 
           
}

var newMyBooks = myBooks.map(myBookHandler)

console.log(newMyBooks)

// Tính tổng số coin

function totalHandler(a, b) {
    var total = a+ b.coin;
    return total
}
var totalListCoin = myBooks.reduce(totalHandler, 0)

console.log(totalListCoin)
// c1: dùng Loop For - of
/*
var totalCoin = 0; // biến lưu trữ

// lặp qua các phần tử
for(var mybook of myBooks) {

    // thực hiện lưu trữ
    totalCoin += mybook.coin; 
}
console.log('Tổng số coin: ',totalCoin)
*/

// c2: dùng reduce()
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;
    // console.log(i) // mỗi lần nó lặp qua phần tử trong mảng nó sẽ gọi lại
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    // console.log(currentValue)
    return total;
}

var totalCoin = myBooks.reduce(coinHandler, 0); // 0 : là khởi tạo biến lưu trữ giá trị ban đầu của reduce()
// khi reduce hoạt động sẽ callback function coinHandler() trả về tham số t1 là: accumulator : giá trị lưu trữ
// 0 giá trị khởi tạo được gán cho accumulator
// currentValue: giá trị hiện tại
// Mỗi khi reduce callback cái function thì nó đang ở 1 vị trí nào đó trong phần tử của mảng
// ví dụ: đang ở phần tử số 2 khi đó thằng currentValue sẽ nhận được cả phần tử object số 2 trả về qua biến currentValue
// currentIndex: chỉ mục cho currentValue
// originArray: là giá trị gốc chính là cái array nào mà gọi tới phương thức reduce() 
// ví dụ myBooks sẽ gọi tới phương thức reduce() -> khi đó originArray chính là myBooks
// 2 ông này sẽ trỏ cùng về 1 bộ nhớ có nghĩa là khi thay đổi gì đó trong object/ array originArray

console.log(totalCoin)

//c3: 

function coinHandler(accumulator, currentValue) {
    var total = accumulator + currentValue.coin;
    return total;
}

var totalCoin = myBooks.reduce(coinHandler, 0); // 0 : là khởi tạo biến lưu trữ giá trị ban đầu của reduce()
console.log(totalCoin)

//c4: JS CS6: arrow function
var totalCoin = myBooks.reduce((a,b) => a+b.coin, 0);

console.log(totalCoin)








