import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
const { id } = useParams(); // Get the hotel ID from the route
const [hotel, setHotel] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
if (!id) return; // Prevent fetching if ID is undefined


const fetchHotel = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/hotels/${id}/`);
    setHotel(response.data);
    setError(null);
  } catch (err) {
    console.error("Error loading property:", err);
    setError(err);
  } finally {
    setLoading(false);
  }
};

fetchHotel();

}, [id]);

if (loading) return <p className="p-6">Loading property details...</p>;
if (error) return <p className="p-6 text-red-600">Error loading property.</p>;
if (!hotel) return <p className="p-6 text-gray-600">Property not found.</p>;

return ( <div className="p-6 bg-gray-100 min-h-screen"> <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2> <p className="mb-2"><strong>Location:</strong> {hotel.location}</p> <p className="mb-2"><strong>Price:</strong> ₹{hotel.price}</p> <p className="mb-2"><strong>Description:</strong> {hotel.desc}</p>
{/* Add more property details as needed */} </div>
);
};

export default PropertyDetails;



