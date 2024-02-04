var selectNgay = document.getElementById("ngay");
for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectNgay.add(option);
}

var selectThang = document.getElementById("thang");
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectThang.add(option);
}

var selectNam = document.getElementById("nam");
for (var i = 2024; i >= 1980; i--) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectNam.add(option);
}

function validateForm() {
    var ho = document.getElementById("txt_ho").value;
    var ten = document.getElementById("txt_ten").value;
    var soDienThoai = document.getElementById("txt_dienthoai").value;

    if (ho === "") {
        alert("Bạn chưa nhập họ");
        return false;
    }

    if (ten === "") {
        alert("Bạn chưa nhập tên");
        return false;
    }

    if (soDienThoai === "") {
        alert("Bạn chưa nhập số điện thoại");
        return false;
    } else if (isNaN(soDienThoai) || soDienThoai.length !== 10) {
        alert("Số điện thoại phải là một số và có độ dài là 10");
        return false;
    }

    return true;
}