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
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    console.log("Меньшее из двух чисел:", min);
}
getMin();