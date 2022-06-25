
// For / of loop
// Sử dụng trong trường hợp lấy ra từng phần tử của mảng hoặc lấy ra từng chữ cái của chuỗi


// vd1: lấy ra từng phần tử của mảng
var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for(var value of languages) {
    console.log(value)
}
// Javascript
// PHP
// Java

// vd2: lấy ra từng chữ cái của chuỗi

var myLanguages ='English Communication';

for(var vaLue of myLanguages) {
    console.log(vaLue);
}
//m
//y
//L
//..
//s

// vd3: TH object k duyệt được
/*var myBtns = {
    name: 'Le Phu',
    age = 21,
};

for( var myBtn of myBtns) {
    console.log(myBtn)
}
*/
// báo lỗi không phải là đối tượng để lặp

// vd4:  TH object lấy được key trong object
 var myKeys = {
     name: 'Le Dinh Phu',
     address: 'Xuan Loc',
 };

//  console.log(Object.keys(myKeys))

 for(myKey of Object.keys(myKeys)) {
     console.log(myKey)
 } 
 // name
 // address

 // vd4:  TH object lấy được values trong object
 var myKeys = {
    name: 'Le Dinh Phu',
    address: 'Xuan Loc',
};

//  console.log(Object.values(myKeys))

for(myKey of Object.values(myKeys)) {
    console.log(myKey)
} 
// name
// address