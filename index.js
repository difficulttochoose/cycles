'use strict';

//  ■■ Задания, в которых необходимо использовать WHILE.

// 1. Вывести # столько раз, сколько указал пользователь.
const num = Number(prompt('Enter your number'));
let result = '';
let count = num;
while (count--) {
    result += '#';
}
alert(result);

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
const num2 = Number(prompt('Enter your number'));
let result2 = '';
let count2 = num2;
while (count2 >= 0) {
    result2 += count2 + ' ';
    --count2;
}
alert(result2);

// 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
const num3 = Number(prompt('Enter your number'));
const pow = Number(prompt('Enter your pow number'));
let result3 = 1;
let count3 = pow;
while (count3--) {
    result3 *= num3;
}
alert(result3);

// 4. Запросить 2 числа и найти все общие делители.
const num4 = Number(prompt('Enter your first number'));
const num41 = Number(prompt('Enter your second number'));
const min = num4 < num41 ? num4 : num41;
const max = num4 > num41 ? num4 : num41;
let result4 = '';
let count4 = min;
while (count4) {
    if (max % count4 === 0 && min % count4 === 0) {
        result4 += count4 + ' ';
    }
    --count4;
}
alert(result4);

// 5. Посчитать факториал введенного пользователем числа.
const num5 = Number(prompt('Enter your number'));
let count5 = 0;
let result5 = 1;
while (++count5 <= num5) {
    result5 *= count5;
}
alert(result5);


//  ■■ Задания, в которых необходимо использовать DO WHILE.

// 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
let decision;
do {
    decision = Number(prompt('Do sum: 2 + 2 * 2 = '));
} while (decision !== (2 + 2 * 2));

// 2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
let num6 = 1000;
let count6 = 0;
do {
    num6 = confirm('Divide by 2') ? num6 / 2 : num6;
    ++count6;
} while (num6 >= 50)
alert(`Result number: ${num6}; number of divisions: ${count6}`);


//  ■■ Задания, в которых необходимо использовать FOR.

// 3. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
const num7 = Number(prompt('Enter your number'));
let result7 = '';
for (let i = num7; i < 101; i += num7) {
    result7 += i + ' ';
}
alert(result7);

