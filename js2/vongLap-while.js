
// while - Loop

//vd1: in ra 1 dãy chữu số tăng dần từ 1 -> 1000
var i=1;

while (i < 10) {    
    // tăng giá trị i lên 1
   
    // i++; // 2-> 10
    console.log(i);
    i++;  // 1 -> 9
}
//sau 1000 lần chạy điều kiện i< 100 sẽ sai đi vòng lặp sẽ ngừng


// vd2: lặp qua 1 Arr

var myArr1 = [
    'Javascript',
    'PHP',
    'java'
];

 var i = 0;

 while (i < myArr1.length) {
     console.log(myArr1[i]);
     i++;
 }
 // lấy ra được 3 phần tử của mảng 
 // Javascript
 // PHP
 // java