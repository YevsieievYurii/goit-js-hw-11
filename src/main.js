// import { fetchImages } from './js/pixabay-api.js';
// import { createImageMarkup, renderImages } from './js/render-functions.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";



// const form = document.querySelector('#search-form');
// const gallery = document.querySelector('.gallery');

// form.addEventListener('submit', async event => {
//     event.preventDefault();

//     const query = event.target.elements.searchQuery.value.trim();
//     if (!query) {
//     iziToast.error({
//         title: 'Помилка',
//         message: 'Поле пошуку не може бути порожнім!',
//         position: 'topRight',
//     });
//     return;
//     }

//     try {
//     const data = await fetchImages(query);

//     if (data.hits.length === 0) {
//         iziToast.warning({
//         title: 'Упс...',
//         message: 'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//         });
//         return;
//     }

//     const markup = createImageMarkup(data.hits);
//     renderImages(gallery, markup);
//     } catch (error) {
//     iziToast.error({
//         title: 'Помилка',
//         message: 'Щось пішло не так. Спробуйте ще раз!',
//         position: 'topRight',
//     });
//     }
// });




// iziToast.info({
//     title: 'Hello',
//     message: 'Welcome!',
// });

// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImageGallery, showLoadingIndicator, hideLoadingIndicator, showError, showNoResultsMessage } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.search-input');

// Обробка сабміту форми
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a search term.');
    return;
  }

  try {
    showLoadingIndicator();  // Показуємо індикатор завантаження
    const images = await fetchImages(query);
    renderImageGallery(images);  // Відображаємо зображення
  } catch (error) {
    if (error.message === 'No images found') {
      showNoResultsMessage();  // Показуємо повідомлення, якщо зображення не знайдено
    } else {
      showError('Something went wrong! Please try again later.');  // Помилка при запиті
    }
  } finally {
    hideLoadingIndicator();  // Приховуємо індикатор завантаження
  }
});
