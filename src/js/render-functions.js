export function createImageMarkup(images) {
    return images
        .map(
        ({ webformatURL, largeImageURL, tags }) => `
        <div class="photo-card">
        <a href="${largeImageURL}" target="_blank">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        </div>`
        )
        .join('');
    }

    export function renderImages(container, markup) {
    container.innerHTML = markup;
    }
