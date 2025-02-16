// 1. Цикл для создания параграфов с каждым 10-м числом от 100 до 50
const numbersDiv = document.querySelector('.numbers');
for (let i = 100; i >= 50; i -= 10) {
    const p = document.createElement('p');
    p.textContent = i;
    numbersDiv.appendChild(p);
}

// 2. Цикл для создания параграфов из массива строк
const strings = ['Привет', 'Мир', 'JavaScript', 'Циклы', 'Задачи'];
const stringsContainer = document.querySelector('.stringscontainer');
for (let str of strings) {
    const p = document.createElement('p');
    p.textContent = str;
    stringsContainer.appendChild(p);
}

// 3. Цикл для создания карточек совершеннолетних пользователей
const users = [
    { firstname: 'Алексей', lastname: 'Иванов', age: 25 },
    { firstname: 'Мария', lastname: 'Петрова', age: 17 },
    { firstname: 'Игорь', lastname: 'Смирнов', age: 30 },
    { firstname: 'Елена', lastname: 'Козлова', age: 19 }
];

const usersContainer = document.querySelector('.userscontainer');
for (let user of users) {
    if (user.age >= 18) {
        const card = document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML = `<h3>${user.firstname} ${user.lastname}</h3><p>Возраст: ${user.age}</p>`;
        usersContainer.appendChild(card);
    }
}
