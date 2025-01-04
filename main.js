//1
let number = prompt("Введите число:");
let tenPercent = number * 0.1;
console.log("10% от введенного числа:", tenPercent);
//2
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let minNumber = Math.min(Number(num1), Number(num2));
console.log("Наименьшее число:", minNumber);
//3
let number = prompt("Введите число:");
if (number < 100) {
    console.log("Число меньше 100");
} else if (number > 100) {
    console.log("Число больше 100");
} else {
    console.log("Число равно 100");
}
//4
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
if (age >= 18) {
    console.log("Hello, " + name);
} else {
    console.log("Hi, " + name);
}

