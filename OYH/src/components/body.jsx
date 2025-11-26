import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Body = ({ search, setSearch, suggestions }) => {

  const navigate = useNavigate();

  const [showPop, setShowPop] = useState(false)
  const [guest, setGuest] = useState(1)
  const [room, setRoom] = useState(1)

  const [showDatePop, setShowDatePop] = useState(false)

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [checkout, setCheckout] = useState(tomorrow);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

  const finalDate = `${formatDate(today)} - ${formatDate(checkout)}`;

  // next 10 days to choose checkout
  const nextDays = Array.from({ length: 10 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i + 1);
    return d;
  });

  function Search(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className='flex justify-center items-center h-70 bg-[url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?semt=ais_hybrid&w=740&q=80)]'>
        <div className='flex relative'>
          <input 
            onInput={Search}
            value={search}
            className='bg-white p-4 w-90 border-r'
            type="text"
            placeholder='Search by city,PGs,or Neighborhood' 
          />

          {/* Search Suggestions Dropdown */}
          {suggestions && suggestions.length > 0 && search !== "" && (
            <div className="absolute bg-white border rounded-md shadow-md w-90 top-16 z-50">
              {suggestions.slice(0, 5).map((loc) => (
                <div
                  key={loc}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    navigate(`/location/${loc}`);
                    setSearch("");
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}

          {/*  Date box showing Today - Checkout */}
          <p
            onClick={() => setShowDatePop(!showDatePop)}
            className='bg-white flex justify-center items-center w-60 border-r cursor-pointer'
          >
            {finalDate}
          </p>

          {/*  Popup to choose only the second date */}
          {showDatePop && (
            <div className='absolute top-16 left-92 bg-white shadow-lg p-2 rounded-lg w-60'>
              <p className='font-semibold text-center mb-2'>Select Checkout Date</p>
              <div className='flex flex-col gap-2'>
                {nextDays.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCheckout(d);
                      setShowDatePop(false);
                    }}
                    className={`p-2 border rounded hover:bg-blue-100 ${
                      formatDate(d) === formatDate(checkout) ? "bg-blue-200" : ""
                    }`}
                  >
                    {formatDate(d)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Guest + Room Button */}
          <p onClick={() => setShowPop(!showPop)} className='bg-white flex justify-center items-center w-60 cursor-pointer relative'>
            {guest} Guest , {room} Room
          </p>

          <button onClick={() => { setShowPop(false)}} className='bg-green-400 w-30 text-white text-xl cursor-pointer hover:bg-green-500'>
            Search
          </button>

          {/* Guest + Room Popup */}
          {showPop && (
            <div className='absolute top-16 right-28 bg-white shadow-lg p-4 rounded-lg w-40'>

              {/* Guest */}
              <div className='flex justify-between mb-3'>
                <span>Guest</span>
                <div className='flex gap-2 items-center'>
                  <button onClick={() => guest > 1 && setGuest(guest - 1)} className='border px-2'>-</button>
                  <span>{guest}</span>
                  <button onClick={() => guest < 3 && setGuest(guest + 1)} className='border px-2'>+</button>
                </div>
              </div>

              {/* Room */}
              <div className='flex justify-between'>
                <span>Room</span>
                <div className='flex gap-2 items-center'>
                  <button onClick={() => room > 1 && setRoom(room - 1)} className='border px-2'>-</button>
                  <span>{room}</span>
                  <button onClick={() => room < 5 && setRoom(room + 1)} className='border px-2'>+</button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* body part - untouched below */}
      {/* ... your existing UI remains unchanged ... */}

      <div className='bg-white h-250 flex items-center justify-evenly flex-col'>
        <img className='h-70 w-310' src="https://assets.oyoroomscdn.com/cmsMedia/1606e8a0-685f-4c31-8319-4b592f1ca086.jpg" alt="" />
        <img className='h-70 w-310' src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg" alt="" />

        <div className='h-28 w-310 border border-gray-300 flex items-center justify-between'>
          <div className='flex items-center'>
            <img src="https://media.istockphoto.com/id/1323529010/vector/fire-vector-isolated.jpg?s=612x612&w=0&k=20&c=ta6bKkXZDuqy2H3tRhR79sSl_-fdGhKyoenbbjEr3l0=" alt="" height={"80px"} width={"80px"} />
            <div>
              <p className='text-2xl'>Get access to exclusive deals</p>
              <p className='text-gray-600'>Only the best deals reach your inbox</p>
            </div>
          </div>

          <p className='text-gray-400 text-xs relative bottom-6 bg-white left-65'>Your email</p>

          <div className='flex items-center'>
            <input className='mr-3 border border-gray-300 text-gray-500 p-2 w-80 rounded-xl h-13' type="text" placeholder='e.g., alen@email.com' />
            <button className='mr-3 bg-red-500 h-12 w-29 text-white cursor-pointer rounded-xl hover:bg-red-600'>Notify Me</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Body
