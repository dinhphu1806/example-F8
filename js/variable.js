//  3 biến var - let - const

/* so sánh var let const
1. Khai báo biến  
2. hosting  dùng cho function
3. block space (if, for)
4. khai báo lại*/
// Giải đáp:
// 1. KHAI BÁO BIẾN
//khi khai báo lại không thể trùng tên biến a là biến 1 là gía trị // 
/* var a = 1; 
 let b = 2;
 const c = 3;

 console.log(a,b,c);
 */

 // var và let khai báo mà không cần gán giá trị cho nó 
 /*var a;
 let b;
 a = 5; b = 10;

 console.log(a,b);*/
// 2/ HOSTING 
// khai báo biến dùng trong function
function myFun(){
    let a = 10;  
    console.log(a);   
}
myFun()// gọi hàm ra
// báo lỗi underfine khi khai báo biến var
// báo lỗi chưa được định nghĩa khi khai báo let

// 3/ BLOCK SPACE
// TH1: Đối với if
/*if(true){
  //  var x; //var tuân theo function scape chứ không tuân theo block scape, 
  //  let x; //let thì không được định nghĩa
    const x; // const thì không được định nghĩa TH này thì để console.log(x) bên trong sẽ được định nghĩa
    x = 4;
}
console.log(x);
*/
// TH2: Đối với for chỉ
// for( var i = 0; i<5; i++){
//      console.log(i); // in 0 1 2 3 4 chỉ nhận kiểu var và let
// }
  //  console.log(i); // báo lỗi

// 4/ KHAI BÁO LẠI 
// var cho khai báo lại còn let và const không cho hai báo lại
// trong dự án không nên dùng var mà chỉ dùng let và const chỉ dùng var trong TH bắt buộc


const cars = {type: 'VinFast', color: 'black', model: 's1000',};

cars.type = 'Toyota';

cars.color ='red';

cars.name ='VinGroup';

console.log(cars);

const tree = {
  color: "Green",
  height: "150cm",
  age: 100,
  size: "big",
  nameTree: "noel",
  function(){
   return this.color + " " + this.height + " " + this.nameTree;
  }
}
 tree.color ="red";
 tree.size ="small";

 console.log(tree);

 console.log(tree.function())


// const user = {
//   firstName: "Le",
//   lastName: "Phu",
//   age: 21,
//   address: "Thanh Hoa",
//   function(){
//     return this.firstName + " " + this.lastName + " " + this.age + " "
//  + this.address}
// }
// console.log(user.firstName + " " + user.lastName)

// const person = {
//   name : 'Lê Đình Phú',
//   age : '21',
//   height : '165cm',
//   adress : 'Xuân Lộc',
//   school : 'HVTC',
//   cars : 'Vinfast',
//   color : 'black',
//   function () {
//     return this.name + " " + this.height + " " + this.adress + " " + this.school;
//   }
// }
//   person.color = 'pink';
//   person.cars = 'Vinfast';

//   console.log(person.function())


// const fullName = {
//   name: 'Lê Đình Phú',
//   age: 21,
//   adress: 'Thanh Hóa',
//   school: 'Academy of Financy',
//   money: '0$',
//   function(){
//     return this.age + ' ' + this.money
//   }
// }
// fullName.name ='HOÀNG XUÂN A';
// console.log(fullName.function())


