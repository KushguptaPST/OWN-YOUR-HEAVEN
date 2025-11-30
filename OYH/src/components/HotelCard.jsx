import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s",
        gap: "20px",
      }}
    >
      <img
        src={hotel.img || "https://via.placeholder.com/250x150?text=No+Image"}
        alt={hotel.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "6px" }}>{hotel.name}</h3>
        <p style={{ color: "#666", margin: "0" }}>{hotel.location}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            gap: "8px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "18px",
              color: "#000000ff",
            }}
          >
            ₹{hotel.price}
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {/* Book Now button */}
            <button
              onClick={() => navigate(`/booking?hotelId=${hotel.id}`)}
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                background: "green",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>

            {/* View Details button */}
            <button
              onClick={() => navigate(`/hotels/${hotel.id}`)}
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                background: "gray",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;



