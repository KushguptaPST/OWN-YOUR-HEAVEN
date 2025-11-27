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
    photos: [],
  });

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, photos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.photos.length < 5) {
      alert("Please upload at least 5 property photos!");
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

          {/* ⭐ FACILITIES SECTION */}
          <textarea
            placeholder="Facilities (WiFi, AC, Parking, CCTV, etc.)"
            className="w-full p-3 border rounded-lg"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, facilities: e.target.value })
            }
          ></textarea>

          {/* ⭐ PHOTO UPLOAD SECTION */}
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center">
            <label className="font-semibold text-lg block mb-3">
              Upload Property Photos (Minimum 5)
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              className="w-full p-3 border rounded-lg bg-gray-50 cursor-pointer"
              onChange={handlePhotoUpload}
            />

            {/* Count of selected photos */}
            <p className="mt-2 text-gray-600">
              Selected: {formData.photos.length} / 5 required
            </p>
          </div>

          {/* ⭐ IMAGE PREVIEW */}
          {formData.photos.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {formData.photos.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="h-24 w-full object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}

          <button className="bg-blue-600 text-white w-full p-3 rounded-lg font-semibold">
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
