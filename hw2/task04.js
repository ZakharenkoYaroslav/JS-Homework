


var f = function (day) {

        if (typeof (day) == "number") {
            if (day > 0 && day < 8) {
                switch (day){
                    case 1:
                        console.log('Неділя');
                        break;
                    case 2:
                        console.log('Понеділок');
                        break;
                    case 3:
                        console.log('Вівторок');
                        break;
                    case 4:
                        console.log('Середа');
                        break;
                    case 5:
                        console.log('Четвер');
                        break;
                    case 6:
                        console.log('П\'ятниця');
                        break;
                    case 7:
                        console.log('Субота');
                        break;
                }
            }
            else {console.log('Error: parameter should be in the range of 1 to 7');}

        } else {
            z = false;
            console.log('Error: parameter type is not a Number');
        }

}

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number