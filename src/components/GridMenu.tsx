import { Link } from "react-router-dom";
import { FaFilm, FaUsers, FaMapMarkerAlt, FaDna, FaCar, FaHome } from "react-icons/fa";

// Tipe untuk properti MenuItem
type MenuItemProps = {
  to: string;
  icon: React.ReactNode;
  title: string;
};

// Komponen untuk setiap item menu
const MenuItem: React.FC<MenuItemProps> = ({ to, icon, title }) => {
  return (
    <Link
      to={to}
      className="w-40 h-40 bg-gray-800 text-white flex flex-col justify-center items-center rounded-lg shadow-lg hover:bg-gray-700 transition-all"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-lg font-semibold">{title}</span>
    </Link>
  );
};

// Komponen GridMenu
const GridMenu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      <MenuItem to="/" icon={<FaHome />} title="Dashboard" />
      <MenuItem to="/films" icon={<FaFilm />} title="Films" />
      <MenuItem to="/people" icon={<FaUsers />} title="People" />
      <MenuItem to="/locations" icon={<FaMapMarkerAlt />} title="Locations" />
      <MenuItem to="/species" icon={<FaDna />} title="Species" />
      <MenuItem to="/vehicles" icon={<FaCar />} title="Vehicles" />
    </div>
  );
};

export default GridMenu;
