import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/hotels/${id}/`)
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!hotel) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{hotel.name}</h1>

      <img
        src={hotel.img}
        alt={hotel.name}
        style={{
          width: "400px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <p><strong>Location:</strong> {hotel.location}</p>
      <p><strong>Price:</strong> ₹{hotel.price}</p>
      <p><strong>Description:</strong> {hotel.desc}</p>
    </div>
  );
};

export default HotelDetails;
