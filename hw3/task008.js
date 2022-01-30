

var f = function (array) {
    //console.log(array);
    var  array2 =array.flat();
    //array2 = array2.flat();
    //console.log(array2);
        while (Array.isArray(array2[0])) {
            array2 = array2.flat();

        }

        var sum = 0;
        for (i = 0; i < array2.length; i++) {
            if (typeof (array2[i]) == "number" ) {
                sum +=array2[i];
            }
            else { console.log("Помилка! Елемент масиву не є числом!")}
         }
        console.log(array2);
        //console.log(arr2.length);
        //console.log(arr2[0]);
console.log(sum);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3