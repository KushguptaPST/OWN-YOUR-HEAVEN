import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingPage = () => {
  const { state } = useLocation();
  const hotel = state?.hotel;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  if (!hotel) return <p>No hotel data found.</p>;

  const discount = 200;
  const finalAmount = hotel.price - discount;

  function sendOtp() {
    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }
    setOtpSent(true);
    alert("OTP Sent: 1234 (Dummy)");
  }

  function verifyOtp() {
    if (otp === "1234") {
      setVerified(true);
      alert("Phone Verified!");
    } else {
      alert("Incorrect OTP");
    }
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex justify-center">
      <div className="flex gap-10 bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl">

        {/* Left: Form */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="border w-full p-2 rounded mb-3"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email ID"
            className="border w-full p-2 rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mb-3">
            <input
              type="number"
              placeholder="Phone Number"
              className="border w-full p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {!otpSent && !verified && (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
                onClick={sendOtp}
              >
                Send OTP
              </button>
            )}

            {otpSent && !verified && (
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Enter OTP"
                  className="border w-full p-2 rounded"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded mt-2"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>
              </div>
            )}

            {verified && (
              <p className="text-green-600 font-bold mt-2">✔ Number Verified</p>
            )}
          </div>

          <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 w-full text-xl">
            Confirm Booking
          </button>
        </div>

        {/* Right: Bill Summary */}
        <div className="w-1/2 bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Bill Summary</h2>

          <div className="mb-3">
            <img src={hotel.img} alt="" className="h-40 w-full rounded" />
            <p className="text-xl font-semibold mt-2">{hotel.name}</p>
          </div>

          <p className="text-lg">Room Price: ₹ {hotel.price}</p>
          <p className="text-lg text-green-600">OYO Discount: -₹ {discount}</p>

          <hr className="my-3"/>

          <p className="text-2xl font-bold">
            Payable Amount: ₹ {finalAmount}
          </p>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;
