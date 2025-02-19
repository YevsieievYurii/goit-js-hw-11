// export function createImageMarkup(images) {
//     return images
//         .map(
//         ({ webformatURL, largeImageURL, tags }) => `
//         <div class="photo-card">
//         <a href="${largeImageURL}" target="_blank">
//         <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//         </a>
//         </div>`
//         )
//         .join('');
//     }

//     export function renderImages(container, markup) {
//     container.innerHTML = markup;
//     }

// render-functions.js
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Відображаємо картки зображень
export function renderImageGallery(images) {
const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // очищуємо галерею перед додаванням нових елементів

images.forEach(image => {
    const imgCard = `
    <a href="${image.largeImageURL}" class="gallery__item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image" />
    </a>
    `;
    gallery.insertAdjacentHTML('beforeend', imgCard);
});

  // Оновлюємо бібліотеку SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

// Відображення повідомлення про помилку
export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

// Відображення індикатора завантаження
export function showLoadingIndicator() {
  const loading = document.querySelector('.loading');
  loading.classList.remove('hidden');
}

// Сховати індикатор завантаження
export function hideLoadingIndicator() {
  const loading = document.querySelector('.loading');
  loading.classList.add('hidden');
}

// Повідомлення, якщо зображень не знайдено
export function showNoResultsMessage() {
  iziToast.info({
    title: 'No Results',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
}

