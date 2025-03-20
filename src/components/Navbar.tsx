import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaFilm, FaHome, FaUsers, FaMapMarkerAlt, FaDragon, FaCar } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/login');
  };

  return (
    <nav className="bg-green-500 text-white py-4 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}> 
          <FaFilm size={24} className="text-white" />
          <h1 className="text-2xl font-bold">Studio Ghibli</h1>
        </div>

        {/* Navigasi */}
        <div className="flex gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaHome /> Dashboard
          </button>
          <button onClick={() => navigate('/films')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaFilm /> Films
          </button>
          <button onClick={() => navigate('/people')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaUsers /> People
          </button>
          <button onClick={() => navigate('/locations')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaMapMarkerAlt /> Locations
          </button>
          <button onClick={() => navigate('/species')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaDragon /> Species
          </button>
          <button onClick={() => navigate('/vehicles')} className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaCar /> Vehicles
          </button>
        </div>

        {/* Tombol Logout */}
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition flex items-center gap-2"
        >
          <FaSignOutAlt size={20} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
