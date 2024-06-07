/* Thêm số */
let soArray = [];

function themSo() {
    let soInput = document.getElementById('so');
    let soValue = +soInput.value;

    if (soValue !== '') {
        soArray.push(soValue);
        soInput.value = ''; // Clear the input field
        updateOutput();
    }
}

function updateOutput() {
    const outputElement = document.getElementById('ketQua');
    outputElement.innerHTML = '👉 ' + soArray.join(', ');
}

// Bài tập 1
function tinhTong() {
    let tong = 0;
    for (let i = 0; i < soArray.length; i++) {
        if (soArray[i] > 0) {
            tong += soArray[i];
        }
    }
    const baiTap1Result = document.getElementById('baiTap1Result');
    baiTap1Result.innerHTML = 'Tổng các số dương: ' + tong;
}

// Bài tập 2
function demSo() {
    let dem = 0;
    for (let i = 0; i < soArray.length; i++) {
        if (soArray[i] > 0) {
            dem++;
        }
    }
    const baiTap2Result = document.getElementById('baiTap2Result');
    baiTap2Result.innerHTML = 'Số lượng số dương: ' + dem;
}

// Bài tập 3
function soNhoNhat() {
    if (soArray.length === 0) {
        const baiTap3Result = document.getElementById('baiTap3Result');
        baiTap3Result.innerHTML = 'Mảng rỗng, không có số nhỏ nhất';
        return;
    }

    let nhoNhat = soArray[0];
    for (let i = 1; i < soArray.length; i++) {
        if (soArray[i] < nhoNhat) {
            nhoNhat = soArray[i];
        }
    }
    const baiTap3Result = document.getElementById('baiTap3Result');
    baiTap3Result.innerHTML = 'Số nhỏ nhất: ' + nhoNhat;
}

// Bài tập 4
function soDuongNhoNhat() {
    let nhoNhat = null;
    for (let i = 0; i < soArray.length; i++) {
        if (soArray[i] > 0 && (nhoNhat === null || soArray[i] < nhoNhat)) {
            nhoNhat = soArray[i];
        }
    }
    const baiTap4Result = document.getElementById('baiTap4Result');
    if (nhoNhat === null) {
        baiTap4Result.innerHTML = 'Không có số dương trong mảng';
    } else {
        baiTap4Result.innerHTML = 'Số dương nhỏ nhất: ' + nhoNhat;
    }
}

// Bài tập 5
function soChanCuoiCung() {
    let chanCuoiCung = null;
    for (let i = soArray.length - 1; i >= 0; i--) {
        if (soArray[i] % 2 === 0) {
            chanCuoiCung = soArray[i];
            break;
        }
    }
    const baiTap5Result = document.getElementById('baiTap5Result');
    if (chanCuoiCung === null) {
        baiTap5Result.innerHTML = -1;
    } else {
        baiTap5Result.innerHTML = 'Số chẵn cuối cùng: ' + chanCuoiCung;
    }
}

// Bài tập 6
function doiCho() {
    // Lấy giá trị từ input
    let index1 = +document.getElementById('viTri_1').value;
    let index2 = +document.getElementById('viTri_2').value;

    // Đổi chỗ hai giá trị trong mảng
    let temp = soArray[index1];
    soArray[index1] = soArray[index2];
    soArray[index2] = temp;

    // Hiển thị kết quả
    document.getElementById('baiTap6Result').innerText = 'Mảng sau khi đổi chỗ: ' + soArray.join(', ');
    updateOutput(); // Cập nhật lại mảng sau khi đổi chỗ
}

// Bài tập 7
function sapXep() {
    // Sắp xếp mảng theo thứ tự tăng dần
    soArray.sort((a, b) => a - b);

    // Hiển thị kết quả
    document.getElementById('baiTap7Result').innerText = 'Mảng sau khi sắp xếp: ' + soArray.join(', ');
    updateOutput(); // Cập nhật lại mảng sau khi sắp xếp
}

// Bài tập 8
function soNT(so) {
    if (so <= 1) return false;
    if (so <= 3) return true;

    if (so % 2 === 0 || so % 3 === 0) return false;

    for (let i = 5; i * i <= so; i += 6) {
        if (so % i === 0 || so % (i + 2) === 0) return false;
    }

    return true;
}

function timSoNT() {
    let soNguyenToDauTien = -1;

    for (let i = 0; i < soArray.length; i++) {
        if (soNT(soArray[i])) {
            soNguyenToDauTien = soArray[i];
            break;
        }
    }
    document.getElementById('baiTap8Result').innerText = soNguyenToDauTien !== -1 ? 'Số nguyên tố đầu tiên trong mảng: ' + soNguyenToDauTien : '-1';
}

// Bài tập 9

/* Thêm số */
let soArrayBai_9 = [];

function themSo_1() {
    let soInput_1 = document.getElementById('so1');
    let soValue_1 = +soInput_1.value;

    if (soValue_1 !== '') {
        soArrayBai_9.push(soValue_1);
        soInput_1.value = ''; // Clear the input field
        updateOutput_1();
    }
}

function updateOutput_1() {
    const outputElement = document.getElementById('themSo_9');
    outputElement.innerHTML = '👉 ' + soArrayBai_9.join(', ');
}

// Đếm số nguyên

function demSoNguyen() {
    let count = 0;
    for (let i = 0; i < soArray.length; i++) {
        if (Number.isInteger(soArray[i])) {
            count++;
        }
    }
    const resultElement = document.getElementById('baiTap9Result');
    resultElement.innerHTML = 'Số lượng số nguyên: ' + count;
}

// Bài tập 10

function demSoAmDuong() {
    let soAm = 0;
    let soDuong = 0;

    for (let i = 0; i < soArray.length; i++) {
        if (soArray[i] < 0) {
            soAm++;
        } else if (soArray[i] > 0) {
            soDuong++;
        }
    }

    document.getElementById('baiTap10Result').innerText = `Số lượng số âm: ${soAm}, Số lượng số dương: ${soDuong}`;
}


// Bài tập 11

function capNhat() {
    let giaTriCu = +document.getElementById('giaTriCu').value;
    let giaTriMoi = +document.getElementById('giaTriMoi').value;
    let index = soArray.indexOf(giaTriCu);

    if (index !== -1) {
        soArray[index] = giaTriMoi;
        document.getElementById('baiTap11Result').innerText = `Cập nhật thành công: ${soArray.join(', ')}`;
    } else {
        document.getElementById('baiTap11Result').innerText = 'Không tìm thấy giá trị cần thay đổi';
    }

    updateOutput();
}