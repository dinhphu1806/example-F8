
// Tìm các mảng con tăng dần có trong mảng arr1
const arr1 = [1, 2, 3, -5, 4, 5, 1, 0, 1, -10, 5, 10];

function fillAllSubArr(arr1) {
    let allArr = []; // taoj biến lưu trữ mảng
    let subArr = [arr1[0]]; // là 1 mảng chứa giá trị của arr tại vị trí 0
    let current = arr1[0];  // giá trị tại ví trị 0

    for(let i = 0; i < arr1.length + 1; i++) {
        if(arr1[i] > current) { // so sánh vị trí thứ i nếu nó lớn hơn giá trị current 
            subArr.push(a[i]); // thì sẽ push(thêm vào cuối mảng ví trị i) trong mảng subArr
        }
        else if (arr1[i] < current || arr1.length) { // còn sai nếu vị trí i mà nhỏ hơn curent or độ dài mảng
            if (subArr.length > 1) {  // độ dài của mảng chứa giá trị của arr tại vị trí 0 > 1
                allArr.push(subArr); // 
            }
            subArr = [arr1[i]];
        }s
        current = arr1[i];
    }
    return allArr
}

fillAllSubArr(arr1);

// tạo mảng rỗng result
// lặp từng phần tử trong mảng đã cho
// +Nếu mảng result rỗng thì push
// +Nếu phần tử đang xét > phần tử cuối của mảng result thì push
// + Nếu phần tử đang xét < phần tử cuối của mảng result thì Nếu result.length > 2 thì log hoặc lưu ở đây
// đấy, sau đó reset mảng result

var a="Pham";
var b="Minnnh";

if(a>b) {
    console.log('DDungs');
} else {
    console.log('Sai')
}