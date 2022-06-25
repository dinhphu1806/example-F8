// do/while loop

//vd1: in 1 dãy số tăng dần từ 1 đến 10

var i = 0;

do {
    //code
    i++; // thêm để tránh vòng lặp treo/ chạy vô hạn
    console.log(i);
} while (i < 10)
// kiểm tra điều kiện từ lần lặp thứ 2 trở đi có nghĩa lần đầu tiên chạy- lặp nó sẽ k cần ktra điều kiện nó cứ in xử lý code trong
// sau đó từ lần thứ 2 sẽ ktra điều kiện
// 1
// 2
// ..
// 10

// vd2: nạp thẻ
var i = 0;
var isSucces = false;

do {
    //code
    i++; // thêm để tránh vòng lặp treo/ chạy vô hạn
    console.log('Nạp thẻ lần ', + i);

    // thành công
    if(false) {
        isSucces = true;
    }
} while (!isSucces && i <= 3)
