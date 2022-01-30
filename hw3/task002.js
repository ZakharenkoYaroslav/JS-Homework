


var filter = function (array, function1) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {
            var arr2 = [];
            for ( i = 0; i < array.length; i++) {
                if (function1(array[i],i,array)) {
                    arr2.push(array[i]);
                }

                    }
            return arr2;
//            array.filter(function (item, i, arr) {
//                return item > 1;
//            })
        }
        else {
            System.log("Тип другого параметру не є функцією!")
        }
    }
}

const arr = [1,2,3];
var result = filter(arr, function(item, i, arr) {
    return item > 1;
});
console.log(result);
