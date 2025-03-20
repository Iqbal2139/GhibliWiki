import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../services/apiService';
import FilmModal from './FilmModal';

interface Film {
  id: string;
  title: string;
  director: string;
  release_date: string;
  image: string;
  description: string;
}

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  useEffect(() => {
    const getFilms = async () => {
      const data = await fetchFilms();
      setFilms(data);
      setLoading(false);
    };

    getFilms();
  }, []);

  useEffect(() => {
    if (selectedFilm) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selectedFilm]);

  if (loading) {
    return <p className="text-center text-gray-500 text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Daftar Film Studio Ghibli</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {films.map((film) => (
          <div 
            key={film.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedFilm(film)}
          >
            <img src={film.image} alt={film.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{film.title}</h3>
              <p className="text-gray-600 text-sm">({film.release_date})</p>
              <p className="text-gray-700 text-sm mt-1">Directed by <span className="font-medium">{film.director}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFilm && <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
    </div>
  );
};

export default FilmList;
