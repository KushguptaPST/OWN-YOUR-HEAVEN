import { useState } from "react";

export default function ListProperty() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    city: "",
    message: "",
    facilities: "",
    photos: Array(5).fill(null), // exactly 5 slots
  });

  const handlePhotoUpload = (e, index) => {
    const file = e.target.files[0];
    const updatedPhotos = [...formData.photos];
    updatedPhotos[index] = file;
    setFormData({ ...formData, photos: updatedPhotos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.photos.filter((img) => img !== null).length < 5) {
      alert("Please upload exactly 5 photos!");
      return;
    }

    console.log("Owner Request Submitted:", formData);
    alert("Your request has been submitted. Our team will contact you soon!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        List Your Property on OYH
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Reach thousands of potential tenants and buyers through Own Your Heaven.
      </p>

      {/* Request a Call Form */}
      <div className="bg-white shadow rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Request a Callback</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email (optional)"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Property Type (Flat/Room/PG/Villa)"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, propertyType: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />

          <textarea
            placeholder="Message (optional)"
            className="w-full p-3 border rounded-lg"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <textarea
            placeholder="Facilities (WiFi, AC, Parking, CCTV, etc.)"
            className="w-full p-3 border rounded-lg"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, facilities: e.target.value })
            }
          ></textarea>

          {/* ⭐ EXACTLY 5 IMAGE UPLOAD BOXES */}
          <div>
            <label className="font-semibold text-lg block mb-3">
              Upload Exactly 5 Property Photos
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {formData.photos.map((photo, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-3 text-center">
                  {photo ? (
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="preview"
                      className="h-32 w-full object-cover rounded-lg shadow"
                    />
                  ) : (
                    <div className="h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg text-gray-500">
                      No Image
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    className="w-full mt-2"
                    onChange={(e) => handlePhotoUpload(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button className="bg-blue-600 text-white w-full p-3 rounded-lg font-semibold mt-4">
            Submit
          </button>
        </form>
      </div>

      {/* Commission Policy */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Commission Policy</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2EeKGzJ6Kn_25S5BWKcHOa3z_5e1qgkBpQ&s"
          alt="Commission Policy"
          className="rounded-xl shadow mb-4"
        />
        <p className="text-gray-600">
          Our commission is simple and transparent. You pay only when your
          property gets successfully booked.
        </p>
      </div>

      {/* Signup Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sign-Up & Listing Process</h2>
        <ul className="space-y-2 text-gray-700">
          <li>1️⃣ Create your OYH account</li>
          <li>2️⃣ Upload property details & photos</li>
          <li>3️⃣ Verification by our team</li>
          <li>4️⃣ Listing approval</li>
          <li>5️⃣ Your property goes live on OYH</li>
        </ul>
      </div>

      {/* Payment Info */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Payment Frequency</h2>
        <p className="text-gray-600">
          Payments are settled monthly and transferred directly to your
          registered bank account.
        </p>
      </div>
    </div>
  );
}
