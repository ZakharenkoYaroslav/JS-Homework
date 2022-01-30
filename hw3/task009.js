
var arrayFill = function (item, count) {
    if (typeof (item) == "String" || typeof (item) == "number" || typeof (item) == "object" || Array.isArray(item) || typeof (count) == "number") {
        var array = [];
        for (i = 0; i < count; i++) {
            array[i] = item;
        }
        console.log(array);
    }
    else {
        console.log("Помилка параметру!")
    }


}

arrayFill('x',5); // [x,x,x,x,x]
