const products = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
},
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, etc.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},
];

const rootEl = document.querySelector('#root')
for (let i = 0; i < products.length; i++) {
const product = products[i]; 

const productEl = document.createElement('div');
productEl.classList.add('product');

const imgEl = document.createElement('img');
imgEl.src = product.image; 
imgEl.alt = product.title; 

const h2El = document.createElement('h2');
h2El.textContent = product.title;

const priceEl = document.createElement('p');
priceEl.textContent = `${product.price}`;

productEl.appendChild(imgEl);
productEl.appendChild(h2El);
productEl.appendChild(priceEl);
rootEl.appendChild(productEl);
}