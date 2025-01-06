//1
let number = +prompt("Введите число")
let tenPercent = number * 0.1;
console.log("10% от введенного числа", tenPercent);

//2
let numberFirst = +prompt("Введите первое число");
let numberSecond = +prompt("Введите второе число");
if (numberFirst < numberSecond) {
    console.log("Наименьшее число:", numberFirst);
} else {
    console.log("Наименьшее число:", numberSecond);
}

// 3
let numberInput = +prompt("Введите число:");
if (numberInput < 100) {
    console.log("Число меньше 100");
} else if (numberInput > 100) {
    console.log("Число больше 100");
} else {
    console.log("Число равно 100");
}

// 4
let userName = prompt("Введите ваше имя:");
let userAge = +prompt("Введите ваш возраст:");
if (userAge >= 18) {
    console.log("Hello, " + userName);
} else {
    console.log("Hi, " + userName);
}