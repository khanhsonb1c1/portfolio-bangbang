function getEle(id) {
    return document.getElementById(id);
}

getEle("addBtn").onclick = function () {
    let a = getEle("add1").value;
    let b = getEle("add2").value;
    a = Number(a);
    b = Number(b);
    getEle("add3").innerHTML = a + b;
    getEle("result1").innerHTML = "a + b = " + (a + b);
    getEle("result1").style.color = "red";
    getEle("text1").style.color = "red";
};

getEle("subBtn").onclick = function () {
    let a = getEle("sub1").value;
    let b = getEle("sub2").value;
    a = Number(a);
    b = Number(b);
    getEle("sub3").innerHTML = a - b;
    getEle("result2").innerHTML = "a - b = " + (a - b);
    getEle("result2").style.color = "red";
    getEle("text2").style.color = "red";
};

getEle("mulBtn").onclick = function () {
    let a = getEle("mul1").value;
    let b = getEle("mul2").value;
    a = Number(a);
    b = Number(b);
    getEle("mul3").innerHTML = a * b;
    getEle("result3").innerHTML = "a * b = " + a * b;
    getEle("result3").style.color = "red";
    getEle("text3").style.color = "red";
};

getEle("diviBtn").onclick = function () {
    let a = getEle("divi1").value;
    let b = getEle("divi2").value;
    a = Number(a);
    b = Number(b);
    getEle("divi3").innerHTML = a / b;
    getEle("result4").innerHTML = "a * b = " + a / b;
    getEle("result4").style.color = "red";
    getEle("text4").style.color = "red";
};
