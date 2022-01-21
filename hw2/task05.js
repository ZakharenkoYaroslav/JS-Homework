


 var isPositive = function   (digit) {

    if (typeof (digit) == "number") {
       if (digit > -1) {return true}
       else {return false}

    } else {

        console.log('Error: parameter type is not a Number');
    }

}

var arr = [1, 2, -4, 3, -9, -1, 7];
var arr2 = [];

for (i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {arr2.push(arr[i]); }
}
console.log(arr2);