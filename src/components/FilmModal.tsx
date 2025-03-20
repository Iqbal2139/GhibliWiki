import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface Film {
  id: string;
  title: string;
  director: string;
  release_date: string;
  image: string;
  description: string;
}

const FilmModal: React.FC<{ film: Film; onClose: () => void }> = ({ film, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-xl w-full relative overflow-y-auto max-h-[80vh]">
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        {/* Judul Film */}
        <h2 className="text-2xl font-bold mb-2">{film.title}</h2>
        <p className="text-gray-600 mb-4">{film.release_date} - Directed by {film.director}</p>

        {/* Gambar Film */}
        <img 
          src={film.image} 
          alt={film.title} 
          className="w-full h-140 object-cover rounded-lg mb-4"
        />

        {/* Deskripsi Film */}
        <p className="text-gray-700">{film.description}</p>
      </div>
    </div>
  );
};

export default FilmModal;
