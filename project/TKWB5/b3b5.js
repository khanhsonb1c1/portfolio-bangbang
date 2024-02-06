function playGame() {
    var randomNum = Math.floor(Math.random() * 2);
    var userGuess = prompt("Nhập 0 hoặc 1: ");
   
    while (userGuess != randomNum) {
       if (userGuess == null) {
         break;
       }
   
       if (userGuess == "0" || userGuess == "1") {
         alert("Sai lần! Vui lòng đoán lại.");
       } else {
         alert("Giá trị không hợp lệ. Vui lòng nhập 0 hoặc 1.");
       }
   
       userGuess = prompt("Nhập 0 hoặc 1: ");
    }
   
    if (userGuess != null) {
       document.getElementById('result').innerHTML = 'Chúc mừng! Bạn đã đoán đúng số là ' + randomNum + '.';
    } else {
       document.getElementById('result').innerHTML = 'Bạn đã hủy trò chơi.';
    }
   }