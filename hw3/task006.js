
    
    
var reduceRight = function (array, function1, sum) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {
            if (typeof (sum) == "String" || typeof (sum) == "number") {


                for (i = array.length-1; i > -1; i--) {
                    sum += array[i];

                }
                return sum;
            }
            else {
                System.log("Тип третього параметру не є строковим або числовим!")
            }
        }
        else {
            System.log("Тип другого параметру не є функцією!")
        }
    }
}
const arr = [1,2,3];
const acc = 0;
console.log(reduceRight(arr, function(acc, item, i, arr) {}, acc));
console.log(arr);

