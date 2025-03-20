import React from "react";

type VehicleProps = {
  vehicles: {
    id: string;
    name: string;
    description: string;
    vehicle_class: string;
    length: string;
  }[];
};

// Fungsi untuk menentukan emoji berdasarkan kelas kendaraan
const getVehicleEmoji = (vehicleClass: string) => {
  switch (vehicleClass.toLowerCase()) {
    case "airship":
      return "✈️"; // Pesawat
    case "boat":
      return "⛵"; // Perahu
    case "car":
      return "🚗"; // Mobil
    case "tank":
      return "🚜"; // Tank
    case "war machine":
      return "⚔️"; // Mesin perang
    default:
      return "🚀"; // Default (kendaraan umum)
  }
};

const VehiclesGrid: React.FC<VehicleProps> = ({ vehicles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transform hover:scale-105"
        >
          {/* Emoji */}
          <div className="text-4xl mb-3">{getVehicleEmoji(vehicle.vehicle_class)}</div>

          {/* Nama & Detail */}
          <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
          <p className="text-gray-600 text-center">{vehicle.description}</p>
          <p className="text-gray-600 font-bold">Class: {vehicle.vehicle_class}</p>
          <p className="text-gray-600">Length: {vehicle.length} m</p>
        </div>
      ))}
    </div>
  );
};

export default VehiclesGrid;
