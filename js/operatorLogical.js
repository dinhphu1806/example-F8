/**
    - Toán tử logic
    1. && - And 
    2. || - Or: 1 cái lọt vào điều kiện đúng thì sẽ in ra 
    3. ! - Not
 */
// Vd1:   &&
var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b > 0 && c > 0 ) {
    console.log('DK Đúng');  // in ĐK Đúng
}


//vd2: ||
var a = 1;
var b = 2;
var c = 3;

if(a > 0 || b > 0 || c > 0 ) {
    console.log('DK Đúng');  // in ĐK Đúng
}

var a = 1;
var b = 2;
var c = 3;

if(a < 0 || b > 0 || c > 0 ) {
    console.log('DK Đúng');  // in ĐK Đúng
}

// vd3: !
if(!(a>0)) { // ngược lại a > 0
    console.log('ĐK ĐÚNG !'); // không in 
}

if(!(a<0)) { // ngược lại a < 0
    console.log('DKK Đúng '); // sẽ in ra
}

