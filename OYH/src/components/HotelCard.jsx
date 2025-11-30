import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div style={{
      width: "300px",
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
      transition: "0.3s",
      gap:"20px"
    }}>
      <img
        src={hotel.img || "https://via.placeholder.com/250x150?text=No+Image"}
        alt={hotel.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "6px" }}>{hotel.name}</h3>
        <p style={{ color: "#666", margin: "0" }}>{hotel.location}</p>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px"
        }}>
          <p style={{
            margin: 0,
            fontWeight: "bold",
            fontSize: "18px",
            color: "#e63946"
          }}>
            ₹{hotel.price}
          </p>

          <a
            href="/booking"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              background: "red",
              padding: "6px 10px",
              borderRadius: "6px"
            }}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
