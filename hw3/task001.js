

    
    
    var forEach = function (array, function1, param) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {
    array.forEach(function (item, i, arr) {
    console.log (i + ': '+ item + ' (array:' + arr + ')' );
    }
    )}
    else {
    System.log("Тип другого параметру не є функцією!")
    }
      }
    }

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});