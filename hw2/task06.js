

var isEven = function   (digit) {

    if (typeof (digit) == "number") {
        if ((digit % 2) == 0) {return true}
        else {return false}

    } else {

        console.log('Error: parameter type is not a Number');
    }

}
console.log(isEven(3)); // false
console.log(isEven(4)); // true
isEven('Content'); // Error: parameter type is not a Number