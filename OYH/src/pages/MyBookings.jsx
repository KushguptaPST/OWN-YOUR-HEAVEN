import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("myBookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const handleBack = () => navigate("/");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded shadow bg-gray-50"
            >
              <h3 className="font-bold text-lg text-green-700">
                {item.hotel?.name}
              </h3>
              <p className="text-sm text-gray-700">{item.hotel?.location}</p>

              <div className="mt-2 text-sm">
                <p><strong>Guest:</strong> {item.bookingInfo.name}</p>
                <p><strong>Email:</strong> {item.bookingInfo.email}</p>
                <p><strong>Phone:</strong> {item.bookingInfo.phone}</p>
                <p><strong>Check-in:</strong> {item.bookingInfo.checkIn}</p>
                <p><strong>Check-out:</strong> {item.bookingInfo.checkOut}</p>
                <p><strong>Guests:</strong> {item.bookingInfo.guests}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleBack}
        className="mt-5 px-4 py-2 bg-green-600 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default MyBookings;
