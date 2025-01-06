//1
let inputNumber1 = +prompt("Введите число:");
let tenPercent1 = inputNumber1 * 0.1;
console.log("10% от введенного числа:", tenPercent1);

//2
let inputNumber2a = +prompt("Введите первое число:");
let inputNumber2b = +prompt("Введите второе число:");
let smallerNumber;
if (inputNumber2a < inputNumber2b) {
    smallerNumber = inputNumber2a;
} else {
    smallerNumber = inputNumber2b;
}
console.log("Наименьшее число:", smallerNumber);

// 3
let inputNumber3 = +prompt("Введите число:");
if (inputNumber3 < 100) {
    console.log("Число меньше 100");
} else if (inputNumber3 > 100) {
    console.log("Число больше 100");
} else {
    console.log("Число равно 100");
}

// 4
let userName4 = prompt("Введите ваше имя:");
let userAge4 = +prompt("Введите ваш возраст:");
if (userAge4 >= 18) {
    console.log("Hello, " + userName4);
} else {
    console.log("Hi, " + userName4);
}