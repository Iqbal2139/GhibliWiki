import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PeopleGrid from "../components/PeopleGrid";
import Footer from "../components/Footer";

type Person = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  image?: string; // Tambahkan properti gambar
};

// Daftar gambar karakter (jika tersedia)
const characterImages: { [key: string]: string } = {
  "Pazu": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "Lusheeta Toel Ul Laputa": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/Sheeta_3.png",
  "Ashitaka": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Ashitaka.jpg",
  "San": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3f/San.jpg",
  "Chihiro Ogino": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8e/Chihiro_Ogino.jpg",
  "Haku": "https://static.wikia.nocookie.net/studio-ghibli/images/8/89/Haku-2.png",
  "Captain Dola": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
  "Uncle Pom": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
  "Romska Palo Ul Laputa": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
};

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/people");
        if (!response.ok) throw new Error("Gagal mengambil data!");
        let data = await response.json();

        // Tambahkan gambar jika tersedia di characterImages
        data = data.map((person: Person) => ({
          ...person,
          image: characterImages[person.name] || "https://placehold.co/600x400",
        }));

        setPeople(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-15 flex-grow">
          Studio Ghibli Characters
        </h2>

        {/* Loading & Error Handling */}
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Render PeopleGrid */}
        {!loading && !error && <PeopleGrid people={people} />}
      </div>

      <Footer />
    </div>
  );
};

export default People;
