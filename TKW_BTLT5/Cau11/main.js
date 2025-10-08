function daoNguocKyTu(numberStr) {
    var result = ' ';
  for (var i = numberStr.length - 1; i >= 0; i--) {
        result += numberStr[i];
  }
  alert(result);
  console.log(result);
}
var number = "654321";
alert(number);
console.log(number);
daoNguocKyTu(number);
