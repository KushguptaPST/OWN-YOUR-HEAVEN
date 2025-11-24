import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const hotels = {
  Koramangla: [
    { name: "OYO Royal Inn", price: 1999 ,img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
    { name: "Urban Nest Rooms", price: 1499 ,img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
  ],
  WhiteField: [
    { name: "White Orchid Stay", price: 1499,img:'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg' },
    { name: "City View Suites", price: 1699,img:'https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg' },
  ],
  BrookField: [
    { name: "Brook Stay", price: 1899 ,img:'https://media.istockphoto.com/id/174767532/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=2BCNeFcX5PGzCxfZKXewhI_y2C9R7Jw_tzVYCXmRRCE=' },
    { name: "Budget Rooms", price: 1799 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMKzonrXOUCtFwrLG-SO3NzYrQS1Sz-Ak8w&s'},
  ],
  GandhiNagar: [
    { name: "Central Stay", price: 1999 ,img:'https://cdn.prod.website-files.com/62b1b17308b0d74291186304/672f4fbfb3638bf1cc97ce0f_672f498462cbddaad472142e_double%2520room%2520hote%2527.png'},
    { name: "Majestic Rooms", price: 1699 ,img:'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill'},
  ],
  "Electronic City": [
    { name: "Tech Park Hotel", price: 1999 ,img:'https://www.jaypeehotels.com/blog/wp-content/uploads/2024/02/Jaypee-Blog-5.jpg'},
    { name: "Corporate Rooms", price: 1499 ,img:'https://t3.ftcdn.net/jpg/02/94/19/40/360_F_294194023_disE35GtlVLDQx4caNDaWewZI8LbxWFQ.jpg'},
  ],
  "Ub City": [
    { name: "Luxury Suites", price: 2199 ,img:'https://img.freepik.com/free-photo/white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12078.jpg?semt=ais_hybrid&w=740&q=80'},
    { name: "Premium Gold Stay", price: 2499,img:'https://www.foodnhotelasia.com/wp-content/uploads/2024/02/Lighting-Design.jpg' },
  ],
  IndiraNagar: [
    { name: "Indira Comfort", price: 1499 ,img:'https://thumbs.dreamstime.com/b/luxury-hotel-bedroom-suite-city-view-teal-decor-modern-design-ai-generated-luxurious-boasts-stunning-accents-furniture-347154535.jpg'},
    { name: "Nightlife Rooms", price: 1699 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAXqXbZKT1RZyxPwdXLOulY9y3WIZIn8gXQ&s' },
  ],
  MarathaHalli: [
    { name: "Budget Rooms MH", price: 1899 ,img:'https://thumbs.dreamstime.com/b/hotel-room-double-bed-33660256.jpg'},
    { name: "Premium MH Inn", price: 1499 ,img:'https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg'},
  ],
};

const LocationPage = () => {
  const { place } = useParams();
  
  const data = hotels[place] || [];
  const navigate = useNavigate(); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Hotels in {place}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((h, index) => (
          <div key={index} className="border p-4 w-80 rounded-lg shadow">
            <img src={h.img} alt="" className="h-50" />
            <h2 className="text-xl font-bold">{h.name}</h2>
            <p className="text-red-600 font-semibold">₹ {h.price}</p>
            <button
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={() => navigate('/booking', { state: { hotel: h } })}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
