// src/pages/MyBookings.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/v1/bookings/my/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.error("My bookings error:", err.response?.data || err.message);
        if (err.response?.status === 401) navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <p>Loading your bookings...</p>;
  if (!bookings || bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b._id || b.id} className="border p-4 rounded">
            <h3 className="font-semibold">{b.name} — ₹{b.totalPrice || "N/A"}</h3>
            <p className="text-gray-600">{b.email} · {b.phone}</p>
            <p>Hotel ID: {b.hotelId}</p>
            <p>Check-in: {b.checkIn} → Check-out: {b.checkOut}</p>
            <p>Guests: {b.guests}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
