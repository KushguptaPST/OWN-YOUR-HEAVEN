import React, { useEffect, useState } from "react";
import HotelCard from './HotelCard';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {hotels.length === 0 ? (
        <p>Loading hotels...</p>
      ) : (
        hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
      )}
    </div>
  );
};

export default HotelList;
