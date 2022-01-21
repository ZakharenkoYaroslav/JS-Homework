

var f = function () {
    var rez =0;
    var z = true;
    console.log(arguments);
    for (i = 0; i < arguments.length; i++){
        if (typeof (arguments[i]) == "number") {
           rez = rez + arguments[i];
        } else {
            z = false;
            console.log('Error: parameter type is not a Number');
        }
    }
    if (z) {
        console.log('Сумма параметров: ');
        console.log(rez);}

}

f(1,2,3);
f(1,1,1,1,1,1,1,1);
f(8,10,15,25,75,89,53);
f(1,2,'s',4);
f('privet!');