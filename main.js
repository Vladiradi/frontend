//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
for (let i = 55; i >= 20; i--) {
    console.log(i);
}

// Дан массив numbers. Вывести в консоль все числа из массива
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
const numberssquared = [];
for (let i = 0; i < numbers.length; i++) {
    numberssquared.push(numbers[i] ** 2 );
}
console.log(numberssquared)

// Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
let lastelem;
for (let i = 0; i < numberssquared.length; i++) {
    if (i === numberssquared.length - 1) { 
        lastelem = numberssquared[i];
    }
}
console.log('Последний элемент:', lastelem);

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’
const user = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 20,
    salary: 500
};

const userData = `User's name is ${user.firstname} ${user.lastname}. He is ${user.age} years old.`;
console.log(userData);
