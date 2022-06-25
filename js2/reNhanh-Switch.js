// Câu lệnh rẽ nhánh - Switch
// case: trường hợp 
var date = 5;

switch(date) { // có thể truyền giá trị vào trong switch 1 biến, 1 chuỗi, 1 dạng số, 1 toán tử, bt đkiện
    case 2:  // trong TH biến date = 2 thì đoạn mã sau dấu : được thực thi
          console.log('Hôm nay thứ 2')   
          break; // thoát khỏi cái khối lệnh switch        
    case 3:  
          console.log('Hôm nay thứ 3')   
          break; // thoát khỏi cái khối lệnh switch   
    case 4:  // trong TH biến date = 2 thì đoạn mã sau dấu : được thực thi
          console.log('Hôm nay thứ 4')   
          break; // thoát khỏi cái khối lệnh switch   
    case 5:  // trong TH biến date = 2 thì đoạn mã sau dấu : được thực thi
          console.log('Hôm nay thứ 5')   
          break; // thoát khỏi cái khối lệnh switch        
    default:
        console.log('không biết luôn');        
}

// nếu cho date = 5 và default thì case 5 vẫn bị lọt vào và in cả 2 

// Note: < 3 case sử dụng if else
//        > 3 case sử dụng switch - case
// khi nào cần so sánh tính đúng sai thì sử dụng if else (toán tử > , < <=, >= ..)
// khi nào biết trước giá trị rồi thì sử dụng switch case (điều kiện > 3 case)