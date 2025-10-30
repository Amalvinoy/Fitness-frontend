import React, { useState } from "react";
import { addProfileAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProfileAPI(formData);
      console.log("Profile saved:", res.data);
      navigate(`/profileview`); // ✅ redirect to the new profile
    } catch (err) {
      console.error("Error saving profile:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Create Profile
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full border p-2 rounded"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border p-2 rounded"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Goal"
          className="w-full border p-2 rounded"
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
