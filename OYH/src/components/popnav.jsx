
import { useNavigate } from "react-router-dom";

const Popnav = () => {
  
  const navigate = useNavigate();

  const locations = [
    "Koramangla",
    "WhiteField",
    "BrookField",
    "GandhiNagar",
    "Electronic City",
    "Ub City",
    "IndiraNagar",
    "MarathaHalli",
    "More Places",
    "VijayaNagra",
    "Kempegowda"

  ];

  return (
    <div>
      <div className="bg-white h-10 border justify-evenly flex">
        {locations.slice(0,9).map((loc) => (
          <div
            key={loc}
            className="h-9 w-30 cursor-pointer flex items-center hover:text-red-500"
            onClick={() => navigate(`/location/${loc}`)}>
            {loc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popnav;