import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div
      className="hotel-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "18px",
        margin: "15px",
        width: "280px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={hotel.img || "https://via.placeholder.com/250x150?text=No+Image"}
        alt={hotel.name}
        style={{
          width: "100%",
          height: "150px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <h3 style={{ margin: "10px 0 5px" }}>{hotel.name}</h3>
      <p style={{ margin: "0 0 5px" }}>{hotel.location}</p>

      {/* Price and View Details button side by side */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
        <span style={{ fontWeight: "bold" }}>₹{hotel.price}</span>
        <button
          style={{
            padding: "4px 8px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
          onClick={() => alert(`Viewing details for ${hotel.name}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
