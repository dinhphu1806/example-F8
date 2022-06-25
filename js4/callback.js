// callback ?

// laf hamf (function) đưuọc truyền qua đối số
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunctionA(param) {
    param('Hoc lap trinh');
}

function myCallback(value) {
    console.log('Value: ', value)
}

// myCallback(123);

myFunctionA(myCallback); // 123 là đối số



function myA(a) {
    a(1113);
}

function callback(b) {
    console.log('giá tri : ', b)
}

myA(callback)



function myFunctionArr(param) {
    param('Cùng học lập trình nha')
}

function callBack(a) {
    console.log('value: ',a)
}

myFunctionArr(callBack)







