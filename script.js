//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function getMin() {
    let numbers = [];
    for (let i = 0; i < 2; i++) {
        let num = parseFloat(prompt(`Введите число ${i + 1}:`));
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.log("Это не число");
            i--;
        }
        let min = numbers[0] < numbers[1] ? numbers[0] : numbers[1];

        console.log("Меньшее из двух чисел:", min);
        return min;
    }
    getMin();


// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function printEven() {
//     let a = parseFloat(prompt("Введите первое число:"));
//     let b = parseFloat(prompt("Введите второе число:"));
//     if (isNaN(a) || isNaN(b)) {
//         console.log("Вы ввели не число");
//         return;
//     }
//     let max = Math.max(a, b);
//     let min = Math.min(a, b);
//     console.log(`Четные числа от ${max} до ${min}:`);
//     for (let i = max; i >= min; i--) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// printEven();



// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power() {
//     let base = parseFloat(prompt("Введите основание степени:"));
//     let exponent = parseInt(prompt("Введите степень:")) || 2;
//     if (isNaN(base) || isNaN(exponent)) {
//         console.log("Вы ввели некорректное значение");
//         return;
//     }
//     let result = 1;
//     for (let i = 0; i < Math.abs(exponent); i++) {
//         result *= base;
//     }
//     if (exponent < 0) {
//         result = 1 / result;
//     }
//     console.log(`${result}`);
//     return result;
// }
// power();


// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function sum() {
//     let n = parseInt(prompt("Введите число n:"));
//     if (isNaN(n) || n < 1) {
//         console.log("Введите положительное целое число.");
//         return;
//     }
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     console.log(`Сумма чисел от 1 до ${n}: ${sum}`);
//     return sum;
// }
// sum();



// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function sumEvenOdd() {
//     let n = parseInt(prompt("Введите первое число (n):"));
//     let m = parseInt(prompt("Введите второе число (m):"));
//     if (isNaN(n) || isNaN(m)) {
//         console.log("введите два числа.");
//         return;
//     }

//     let evenSum = 0;
//     let oddSum = 0;

//     let start = Math.min(n, m);
//     let end = Math.max(n, m);

//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             evenSum += i;
//         } else {
//             oddSum += i;
//         }
//     }

//     console.log(`Сумма четных чисел ${evenSum}`);
//     console.log(`Сумма нечетных чисел ${oddSum}`);
// }
// sumEvenOdd();



// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

// function findLongestString() {
//     let input = prompt("Введите строки через запятую (например: one, two, three):");
//     if (!input) {
//         console.log("Вы не ввели строки. Возвращаем null.");
//         return null;
//     }
//     let strings = input.split(",").map(str => str.trim());
//     if (strings.length === 0) {
//         console.log("Массив пуст. Возвращаем null.");
//         return null;
//     }
//     let longest = strings[0];
//     for (let i = 1; i < strings.length; i++) {
//         if (strings[i].length > longest.length) {
//             longest = strings[i];
//         }
//     }
//     console.log(`Самая длинная строка: ${longest}`);
//     return longest;
// }
// findLongestString();