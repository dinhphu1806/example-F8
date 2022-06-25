//  for/in Loop- Lặp qua key của đối tượng (array or object or string)
//1. object
var myInfo = {
    name: 'Le Phu',
    age: 10,
    addres: 'Ha Noi VN',
}

for (var key in myInfo) {  // vòng for này chạy bn lần nhỉ ? => chạy 3 lần vì object có 3 key
                           // mỗi 1 lần chạy sẽ gán giá trị key là name dưới dạng chuỗi vào cho key trong for   
    // khối code
    // console.log(key)  // lấy ra được 3 key của object trên là name , age, address
    console.log(myInfo[key]) // lấy ra được 3 value của object là Le Phu, 10, Ha Noi VN
    // console.log(typeof myInfo[key]) // kiểm tra data type
}
  
// 2. Array

var myLanguage = [
    'javascript',
    'PHP',
    'Ruby',
    'Java',
];
for( var key in myLanguage) {
    console.log(myLanguage[key]) // lấy ra các element có trong mảng
}

// 3. Chuỗi String

var myString = 'language, english, company, hotel';

//console.log(myString[2]) // lấy chữ cái ra từ chuỗi 
// tách nhỏ từ chữ cái
for(var key in myString) {
    // console.log(key) // lấy  các index trong chuỗi
    console.log(myString[key]) // lấy các element chữ cái trong chuỗi
}

