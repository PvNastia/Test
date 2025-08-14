import { products } from './productData.js';

const modal = document.getElementById('productModal');
const closeBtn = modal?.querySelector('.close-btn');

document.addEventListener('click', event => {
  const card = event.target.closest('.product-card');
  if (!card) return;

  const id = parseInt(card.dataset.id, 10);
  if (!id) {
    console.warn('Картка не має data-id');
    return;
  }

  const product = products.find(p => p.id === id);
  if (!product) {
    console.warn('Товар не знайдено');
    return;
  }


  document.querySelector('.product-name').textContent = product.name || '';
  document.querySelector('.product-description').textContent = product.description || '';
  document.querySelector('.product-price').textContent = product.price ? `${product.price} грн` : '—';
  document.querySelector('.product-bio-text').textContent = product.details || '';

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});


closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
});
