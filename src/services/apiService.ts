const API_URL = 'https://ghibliapi.vercel.app/films';

export const fetchFilms = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }

    const data = await response.json();
    return data; // Mengembalikan daftar film
  } catch (error) {
    console.error('Error fetching films:', error);
    return [];
  }
};
