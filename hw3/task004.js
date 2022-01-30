####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

    Функция должна содержать проверки:

    - Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

    ```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```


var some = function (array, function1) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {

            var result = false;
            for ( i = 0; i < array.length; i++) {
                if (function1(array[i],i,array)) {
                    result = true;
                    return result;
                    break;
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
console.log(arr);
console.log("item > 1");
console.log(some(arr, function(item, i, arr) {
    return item > 1;
}));