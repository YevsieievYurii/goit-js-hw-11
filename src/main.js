import { fetchImages } from './js/pixabay-api.js';
import { renderImageGallery, showLoadingIndicator, hideLoadingIndicator, showError, showNoResultsMessage } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.search-input');


searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a search term.');
    return ;
  }

  try {
    showLoadingIndicator();
    const images = await fetchImages(query);
    renderImageGallery(images);
  } catch (error) {
    if (error.message === 'No images found') {
      showNoResultsMessage();
    } else {
      showError('Something went wrong! Please try again later.');
    }
  } finally {
    hideLoadingIndicator();
  }
});
