import React, { useEffect, useState } from "react";
import { getProfilesAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

export default function ProfileView() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestProfile = async () => {
      try {
        const res = await getProfilesAPI();
        const profiles = res.data;

        if (profiles.length > 0) {
          // Always show the most recently added profile
          setProfile(profiles[profiles.length - 1]);
        } else {
          setProfile(null);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white">
        <p className="text-blue-500 text-lg font-medium animate-pulse">
          Loading profile...
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            No profile found. Please create one.
          </p>
          <button
            onClick={() => navigate("/profile")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg text-center">
        {/* Profile Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 shadow-inner">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Profile Info */}
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{profile.name}</h1>
        <p className="text-gray-500 mb-6">Your Fitness Overview</p>

        <div className="bg-gray-50 rounded-xl shadow-inner p-5 space-y-2 text-left">
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Height:</strong> {profile.height} cm</p>
          <p><strong>Weight:</strong> {profile.weight} kg</p>
          <p><strong>Goal:</strong> {profile.goal}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate(`/profileedit`)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}



