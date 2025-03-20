import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SpeciesGrid from "../components/SpeciesGrid";
import Footer from "../components/Footer";

type SpeciesType = {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
};

const Species = () => {
  const [species, setSpecies] = useState<SpeciesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/species");
        if (!response.ok) throw new Error("Gagal mengambil data!");
        const data = await response.json();
        setSpecies(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-15">
          Studio Ghibli Species
        </h2>

        {/* Loading & Error Handling */}
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Render SpeciesGrid */}
        {!loading && !error && <SpeciesGrid species={species} />}
      </div>

      <Footer />
    </div>
  );
};

export default Species;
