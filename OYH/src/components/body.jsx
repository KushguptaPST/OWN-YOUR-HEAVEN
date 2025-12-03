import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";

const Body = ({ tasks = [] }) => {
  console.log(tasks)
  const navigate = useNavigate();
  const [showPop, setShowPop] = useState(false);
  const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);
  const [showDatePop, setShowDatePop] = useState(false);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [range, setRange] = useState([
    { startDate: today, endDate: tomorrow, key: "selection" },
  ]);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    });

  const finalDate = `${formatDate(range[0].startDate)} - ${formatDate(
    range[0].endDate
  )}`;

  return (
    <div>
      {/* Search Section */}
      <div className="flex justify-center items-center h-70 bg-[url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?semt=ais_hybrid&w=740&q=80)]">
        <div className="flex relative">
          {/* Global Search */}
          <GlobalSearch />

          {/* Date Picker */}
          <p
            onClick={() => setShowDatePop(!showDatePop)}
            className="bg-white flex justify-center items-center w-60 border-r cursor-pointer"
          >
            {finalDate}
          </p>

          {showDatePop && (
            <div className="absolute top-16 left-80 bg-white shadow-xl p-2 rounded-lg z-50">
              <DateRange
                ranges={range}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                rangeColors={["#4CAF50"]}
              />
              <button
                className="w-full bg-green-500 text-white p-2 rounded mt-2"
                onClick={() => setShowDatePop(false)}
              >
                Done
              </button>
            </div>
          )}

          {/* Guests / Rooms */}
          <p
            onClick={() => setShowPop(!showPop)}
            className="bg-white flex justify-center items-center w-60 cursor-pointer relative"
          >
            {guest} Guest, {room} Room
          </p>

          {showPop && (
            <div className="absolute top-16 right-28 bg-white shadow-lg p-4 rounded-lg w-40 z-50">
              <div className="flex justify-between mb-3">
                <span>Guest</span>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => guest > 1 && setGuest(guest - 1)}
                    className="border px-2"
                  >
                    -
                  </button>
                  <span>{guest}</span>
                  <button
                    onClick={() => guest < 10 && setGuest(guest + 1)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Room</span>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => room > 1 && setRoom(room - 1)}
                    className="border px-2"
                  >
                    -
                  </button>
                  <span>{room}</span>
                  <button
                    onClick={() => room < 10 && setRoom(room + 1)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Button */}
          <button
            onClick={() => navigate("/hotels")}
            className="bg-green-400 w-30 text-white text-xl hover:bg-green-500"
          >
            Search
          </button>
        </div>
      </div>

      {/* Your existing banners untouched */}
    </div>
  );
};

export default Body;
