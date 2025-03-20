import React from "react";

type SpeciesProps = {
  species: {
    id: string;
    name: string;
    classification: string;
    eye_colors: string;
    hair_colors: string;
  }[];
};

// Fungsi untuk memilih emoji berdasarkan klasifikasi spesies
const getSpeciesEmoji = (classification: string) => {
  switch (classification.toLowerCase()) {
    case "mammal":
      return "🐾"; // Emoji jejak kaki
    case "reptile":
      return "🦎"; // Emoji kadal
    case "human":
      return "🧑"; // Emoji manusia
    case "spirit":
      return "👻"; // Emoji hantu
    case "fish":
      return "🐟"; // Emoji ikan
    case "insect":
      return "🐞"; // Emoji kepik
    default:
      return "❓"; // Emoji tanda tanya jika tidak dikenali
  }
};

const SpeciesGrid: React.FC<SpeciesProps> = ({ species }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {species.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transform hover:scale-105"
        >
          {/* Emoji */}
          <div className="text-4xl mb-3">{getSpeciesEmoji(item.classification)}</div>

          {/* Nama & Detail */}
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <p className="text-gray-600">Classification: {item.classification}</p>
          <p className="text-gray-600">Eye Colors: {item.eye_colors}</p>
          <p className="text-gray-600">Hair Colors: {item.hair_colors}</p>
        </div>
      ))}
    </div>
  );
};

export default SpeciesGrid;
