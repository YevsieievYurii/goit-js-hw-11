import axios from 'axios';

const API_KEY = 'user_id:48924645';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    try {
    const response = await axios.get(BASE_URL, {
        params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page,
        },
    });

    return response.data;
    } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
    throw error;
    }
}