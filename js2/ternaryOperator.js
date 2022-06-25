// toán tử 3 ngôi - ternary operator
// tạo 1 object có tên course

var course = {
    // key: value;
    name: 'javascript',
    coin: 250,
}

// if(course.coin > 0) {
//     console.log(`${course.coin} coin`) // in 250 coin
// } else {
//     console.log('Miễn phí');
// }

var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí'
// dấu ? để ngăn cách vế 1 và thứ 2, ngăn cách vế 2 với vế 3 bằng:
// nếu điều kiện vế 1 đúng thì nó sẽ lấy giá trị vế 2
// còn sai thì lấy giá trị vế 3
console.log(result)

// vd2:

