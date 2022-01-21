

var f = function (array) {
    if (Array.isArray (array)) {
        if (array.length >0){
            var num = array.splice(0,1);
            console.log(num[0]);
            f(array);
        }
        else {console.log('Error: parameter can\'t be an empty')}
    }
    else {console.log('Error: parameter type should be an array')}
}

f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty