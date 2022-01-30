

var every = function (array, function1) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {

            var result = true;
            for ( i = 0; i < array.length; i++) {
                if (!function1(array[i],i,array)) {
                    result = false;
                }

            }
            return result;

        }
        else {
            System.log("Тип другого параметру не є функцією!")
        }
    }
}
const arr = [1,2,3];
console.log(every(arr, function(item, i, arr) {
    return item > 0;
}));