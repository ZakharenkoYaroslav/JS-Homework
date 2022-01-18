

var n = 1000;
var rez = 100;
var num = 0;
while (rez >= 50) {
    rez = n / 2;
    n = rez;
    num++;
}
console.log(rez);
console.log(num);