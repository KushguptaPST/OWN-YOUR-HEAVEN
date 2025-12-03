import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useLocation, useNavigate } from "react-router-dom";

const HotelList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // ================= FETCH HOTELS =================
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error(err));
  }, []);

  // ================= FILTER HOTELS =================
  useEffect(() => {
    const filtered = hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [hotels, searchQuery]);

  // ================= SEARCH SUGGESTIONS =================
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filteredSuggestions = hotels
      .map((h) => h.location)
      .filter(
        (loc, i, arr) =>
          loc.toLowerCase().includes(search.toLowerCase()) &&
          arr.indexOf(loc) === i
      );
    setSuggestions(filteredSuggestions);
  }, [search, hotels]);

  const handleSearchClick = (location) => {
    setSearch("");
    navigate(`/hotels?search=${encodeURIComponent(location)}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <div className="flex justify-between items-start mb-15 ">
        <h2 className="text-3xl font-bold">Available PGs, Apartments in {searchQuery}</h2>

        {/* ================= SEARCH BOX ================= */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by places,cities"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-60 mr-43"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-10 left-0 bg-white border rounded-md shadow-md w-80 z-50">
              {suggestions.map((loc) => (
                <div
                  key={loc}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSearchClick(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex w-350 justify-center ">
        {filteredHotels.length === 0 ? (
        <p className="text-black text-lg">No results found for "{searchQuery}"</p>
      ) : (
        <div className="grid grid-cols-3 gap-16">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id || hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default HotelList;