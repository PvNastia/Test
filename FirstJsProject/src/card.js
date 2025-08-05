import { products } from './productData.js';

const productCard = document.querySelector('.product-card');
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
  const { name, description, price } = product;

  productCard.insertAdjacentHTML('beforeend', `
    <div class="product-detail">
      <h2>${name}</h2>
      <p><strong>Опис:</strong> ${description}</p>
      <p><strong>Ціна:</strong> ${price} грн</p>
    </div>
  `);
} else {
  productCard.textContent = 'Товар не знайдено.';
}