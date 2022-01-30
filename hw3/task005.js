####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

    Функция должна содержать проверки:

    - Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

    ```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```

var reduce = function (array, function1, sum) {
    if (!Array.isArray(array)) {System.log("Тип першого параметру не є масивом!")}
    else
    { console.log(typeof(function1));
        if (typeof(function1) == "function") {
            if (typeof (sum) == "String" || typeof (sum) == "number") {


                for (i = 0; i < array.length; i++) {
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
console.log(reduce(arr, function(acc, item, i, arr) {}, acc));
console.log(arr);

