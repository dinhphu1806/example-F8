// Câu lệnh rẽ nhánh - If else 
// chỉ lọt thằng đầu tiên nếu đúng
//nếu ĐK đúng thì in ra
// nếu ĐK 1 sai sẽ đến ĐK 2 .... cho khi nào dúng dừng

var date = 9; 

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) { // thay date > 0
    console.log('Hôm nay là thứ 3');
} else if (date === 4) {
    console.log('Hôm nay là thứ 4');
} else {
    console.log('Không biết');
}