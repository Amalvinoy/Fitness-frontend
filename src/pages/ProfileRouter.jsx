import React, { useEffect, useState } from "react";
import { getProfilesAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

export default function ProfileRouter() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await getProfilesAPI();
        const profiles = response.data;
        if (profiles && profiles.length > 0) {
          // ✅ Profile exists → redirect to profileview
          navigate("/profileview");
        } else {
          // 🆕 No profile yet → go to profileform
          navigate("/profileform");
        }
      } catch (error) {
        console.error("Error checking profile:", error);
        navigate("/profileform");
      } 
    };

    checkProfile();
  }, [navigate]);

  // While checking, show loading
  return checking ? (
    <div className="min-h-screen flex justify-center items-center text-blue-600 text-xl font-semibold">
      Checking profile...
    </div>
  ) : null;
}
