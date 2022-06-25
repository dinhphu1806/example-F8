/* function 
Mục đích viết hàm để giúp chúng ta chức năng nào đó, có thể tái sử dụng chức năng đó
*/
//vd1: tính tổng a+b
/*function sum( a, b) {  // tên hàm và tham số truyền vào
    var a=10;
    var b=20;
    
    return a+b;
}
console.log("kết quả = ", sum(a,b))
*/

//vd2: tính tổng  s = m+n
function sumArr(m,n) {
     var s = 0;
     for (var i = m; i<n; i++){
         s+=i;
     }    
     return s;
}
console.log("kết quả từ m đến n = ",sumArr(1,10))
