

var n = 0;
var arr = [1,2,3,4,5,6];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j+1]) {
            var n = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = n;
        }
    }
}

console.log(arr);
