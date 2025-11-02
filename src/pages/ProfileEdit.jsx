import React, { useEffect, useState } from "react";
import { getProfilesAPI, updateProfileAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

 function ProfileEdit() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  // Fetch the latest profile
  useEffect(() => {
    const fetchLatestProfile = async () => {
      try {
        const res = await getProfilesAPI();
        const profiles = res.data;

        if (profiles.length > 0) {
          setProfile(profiles[profiles.length - 1]); // ✅ latest one
        } else {
          setProfile(null);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchLatestProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (profile && profile.id) {
        await updateProfileAPI(profile.id, profile);
      }
      navigate("/profileview"); // ✅ always redirect to profileview
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-600">No profile found to edit.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Edit Profile
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={profile.name || ""}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={profile.age || ""}
          onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={profile.height || ""}
          onChange={(e) => setProfile({ ...profile, height: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={profile.weight || ""}
          onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Goal"
          value={profile.goal || ""}
          onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;

