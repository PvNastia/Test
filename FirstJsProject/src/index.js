import { products } from './productData.js';
const productList = document.querySelector('.product-list');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentIndex = 0;
const itemsPerPage = 9;

function getBasketLocalStorage() {
  return JSON.parse(localStorage.getItem('basket') || '[]');
}

function setBasketLocalStorage(data) {
  localStorage.setItem('basket', JSON.stringify(data));
}

function renderProducts() {
  const nextProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  nextProducts.forEach(product => {
    productList.insertAdjacentHTML('beforeend', `
    <div class="product" data-product-id = '${product.id}' >
    <a href="./card.html?id=${product.id}" class="product-card"> <h3>${product.name}</h3></a>

     <p><strong>${product.price}</strong> грн</p>
     <button class='product__add'>Додати в корзину</button>
   </div>
      `);
  });
  currentIndex += itemsPerPage;
  checkingActiveButtons(getBasketLocalStorage());
}

function handleCardClick(event) {
  const targetBtn = event.target.closest('.product__add');
  if (!targetBtn) return;

  const card = targetBtn.closest('.product');
  const id = Number(card.dataset.productId);
  const basket = getBasketLocalStorage();

  if (basket.includes(id)) return;

  basket.push(id);
  setBasketLocalStorage(basket);
  checkingActiveButtons(basket);
  updateBasketCount(basket);
}

function checkingActiveButtons(basket) {
  const buttons = document.querySelectorAll('.product__add');
  buttons.forEach(btn => {
    const card = btn.closest('.product');
    const id = Number(card.dataset.productId);
    const isInBasket = basket.includes(id);

    btn.disabled = isInBasket;
    btn.classList.toggle('active', isInBasket);
    btn.textContent = isInBasket ? 'В корзині' : 'Додати в корзину';
  });
}

function updateBasketCount(basket) {
  const basketCount = document.querySelector('.basket__count');
  if (basketCount) {
    basketCount.textContent = basket.length;
  }
}

productList.addEventListener('click', handleCardClick);
loadMoreBtn.addEventListener('click', renderProducts);

// Початковий рендер
renderProducts();
updateBasketCount(getBasketLocalStorage());
  

  /* time */
const startBtn = document.querySelector('.date');

function startTimer() {
    setInterval(() => {
        const currentTime = new Date();
        const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
        const months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня',
            'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];

        const dayName = days[currentTime.getDay()];
        const date = currentTime.getDate();
        const monthName = months[currentTime.getMonth()];
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();


        startBtn.innerHTML = 
   `   <div class="product">
        <p class="day"> ${dayName}</p>
        <p class="num">${date}</p>
        <p class="month">${monthName}</p>
        <p class="time"> ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</p>
      </div> `
    ;
    }, 1000);
}

startTimer();