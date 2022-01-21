

var getDivisors = function   (digit) {
var arr =[];
    if (typeof (digit) == "number") {
        if (digit > 0) {
            arr.push(1);
        for (i = 2; i <= digit; i++){

            if (digit % i == 0){arr.push(i)}
        }
        console.log(arr);
        }
        else { console.log('Error: parameter should be bigger then 0')}

    } else {

        console.log('Error: parameter type is not a Number');
    }

}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0