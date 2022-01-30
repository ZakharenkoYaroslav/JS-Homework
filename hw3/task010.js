
var reverse = function (array) {
    if (Array.isArray(array)) {
        if (array.length != 0) {
            var array2 = [];

            for (i = array.length-1; i > -1; i--){
                array2.push(array[i]);
            }
            console.log(array2);
        } else {
            console.log("Масив пустий!")
        }
    }
    else {
        console.log("Параметр не є масивом!")
    }
    
}

const arr = [3,2,1];
reverse(arr); // [1,2,3]