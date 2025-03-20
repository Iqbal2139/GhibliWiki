import Navbar from "../components/Navbar";
import GridMenu from "../components/GridMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-5">
          Selamat Datang di Dashboard
        </h2>

        {/* Grid Menu */}
        <GridMenu />
      </div>

     <Footer /> 
    </div>
  );
};

export default Home;
