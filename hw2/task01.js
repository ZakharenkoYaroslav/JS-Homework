

var f = function (digit) {
    if (typeof (digit) == "number") {
        console.log(digit*digit*digit);
    } else {
        console.log('Error: parameter type is not a Number');
    }
}

f(8);
f('privet!');