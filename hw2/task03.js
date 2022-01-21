
var f = function (d1,d2,d3) {
    var rez =0;
    var z = true;
    console.log(arguments);
    for (i = 0; i < arguments.length; i++){
        if (typeof (arguments[i]) == "number") {

        } else {
            z = false;
            console.log('Error: all parameters type should be a Number');
        }
    }
    if (z) {
        console.log('Сумма параметров: ');
        rez = (d1-d2)/d3;
        console.log(rez);}

}

f(9,3,2);
f('s',9,3)