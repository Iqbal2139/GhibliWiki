type Person = {
    id: string;
    name: string;
    gender: string;
    age: string;
    eye_color: string;
    hair_color: string;
    image?: string; // Properti gambar
  };
  
  interface PeopleGridProps {
    people: Person[];
  }
  
  const PeopleGrid: React.FC<PeopleGridProps> = ({ people }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            {/* Gambar Karakter */}
            <img
              src={person.image || "https://placehold.co/600x400"} // Placeholder jika tidak ada gambar
              alt={person.name}
              className="w-32 h-32 object-cover mx-auto rounded-full border border-gray-300"
            />
            
            {/* Informasi Karakter */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{person.name}</h3>
            <p className="text-gray-600">Gender: {person.gender}</p>
            <p className="text-gray-600">Age: {person.age || "Unknown"}</p>
            <p className="text-gray-600">Eye Color: {person.eye_color}</p>
            <p className="text-gray-600">Hair Color: {person.hair_color}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PeopleGrid;
  