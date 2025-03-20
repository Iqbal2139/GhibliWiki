import Navbar from '../components/Navbar';
import FilmList from '../components/FilmList';
import Footer from '../components/Footer';

const Film = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-20 flex-grow">
        {/* Film List */}
        <FilmList />
      </div>

      <Footer/>
    </div>
  );
};

export default Film;
