import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import VehiclesGrid from "../components/VehiclesGrid";
import Footer from "../components/Footer";

type Vehicle = {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
};

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/vehicles");
        if (!response.ok) throw new Error("Gagal mengambil data!");
        const data = await response.json();
        setVehicles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-15">
          Studio Ghibli Vehicles
        </h2>

        {/* Loading & Error Handling */}
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Render VehiclesGrid */}
        {!loading && !error && <VehiclesGrid vehicles={vehicles} />}
      </div>

      <Footer />
    </div>
  );
};

export default Vehicles;
