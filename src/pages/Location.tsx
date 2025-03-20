import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LocationGrid from "../components/LocationGrid";
import Footer from "../components/Footer";

type Location = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
};

const LocationPage = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/locations");
        if (!response.ok) throw new Error("Gagal mengambil data!");
        const data = await response.json();
        setLocations(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-15">
          Studio Ghibli Locations
        </h2>

        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && <LocationGrid locations={locations} />}
      </div>

      <Footer/>
    </div>
  );
};

export default LocationPage;
