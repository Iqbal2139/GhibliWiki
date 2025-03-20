
type Location = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
};

const LocationGrid = ({ locations }: { locations: Location[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location) => (
        <div
          key={location.id}
          className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {location.name}
          </h3>
          <p className="text-gray-600">🌤 Climate: {location.climate}</p>
          <p className="text-gray-600">🏞 Terrain: {location.terrain}</p>
          <p className="text-gray-600">💧 Surface Water: {location.surface_water}%</p>
        </div>
      ))}
    </div>
  );
};

export default LocationGrid;
