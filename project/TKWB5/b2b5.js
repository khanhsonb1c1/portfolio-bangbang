function checkso(){
    var num=document.getElementById('num').value;
    if(num % 2 === 0){
        document.getElementById('result').innerHTML = 'số chẵn'
    }else{
        document.getElementById('result').innerHTML = 'số lẻ'
    }
}