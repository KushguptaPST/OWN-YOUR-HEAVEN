import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useLocation } from "react-router-dom";

const HotelList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [hotels, searchQuery]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Available Hotels</h2>

      {filteredHotels.length === 0 ? (
        <p className="text-black text-lg"> Hotels found for "{searchQuery}"</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id || hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
