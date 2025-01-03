// Считываем число через prompt
let number = +prompt("Введите число:");
// Вычисляем 10% от введенного числа
let tenPercent = number * 0.1;
// Выводим результат в консоль
console.log("10% от числа:", tenPercent);

// Считываем два числа через prompt
let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");

// Находим наименьшее из двух чисел
let min = num1 < num2 ? num1 : num2;

// Выводим наименьшее число в консоль
console.log("Наименьшее число:", min);

// Считываем число через prompt
let number = +prompt("Введите число:");

// Выводим соответствующее сообщение в зависимости от значения числа
if (number < 100) {
    console.log("Число меньше 100");
} else if (number > 100) {
    console.log("Число больше 100");
} else {
    console.log("Число равно 100");
}


// Считываем имя и возраст пользователя через prompt
let name = prompt("Введите ваше имя:");
let age = +prompt("Введите ваш возраст:");

// Проверяем, совершеннолетний ли пользователь
if (age >= 18) {
    console.log("Hello, " + name);
} else {
    console.log("Hi, " + name);
}