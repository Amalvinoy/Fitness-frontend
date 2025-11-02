import React, { useEffect, useState } from "react";
import {
  getDietLogsAPI,
  addDietLogAPI,
  deleteDietLogAPI,
} from "../services/allAPIs";

 function DietTracker() {
  const [dietLogs, setDietLogs] = useState([]);
  const [newLog, setNewLog] = useState({
    meal: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
  });

  // Fetch all logs from JSON Server
  const fetchLogs = async () => {
  try {
    const res = await getDietLogsAPI();
    setDietLogs(res.data );
  } catch (err) {
    console.error("Error fetching diet logs:", err);
  }
};


  // Add a new log
const handleAdd = async (e) => {
  e.preventDefault();
  await addDietLogAPI({
    ...newLog,
    date: new Date().toISOString().split("T")[0],
  });
  setNewLog({ meal: "", calories: "", protein: "", fat: "", carbs: "" });
  fetchLogs();
};




  // Delete a log
  const handleDelete = async (id) => {
    try {
      await deleteDietLogAPI(String(id));
      fetchLogs();
    } catch (err) {
      console.error("Error deleting log:", err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // Calculate totals
  const totals = dietLogs.reduce(
    (acc, log) => {
      acc.calories += Number(log.calories) ;
      acc.protein += Number(log.protein) ;
      acc.fat += Number(log.fat) ;
      acc.carbs += Number(log.carbs);
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Diet Tracker</h1>

        {/* Add new log form */}
        <form
          onSubmit={handleAdd}
          className="flex flex-wrap gap-4 items-center mb-6"
        >
          <input
            type="text"
            placeholder="Meal"
            value={newLog.meal}
            onChange={(e) => setNewLog({ ...newLog, meal: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full sm:w-32"
            required
          />
          <input
            type="number"
            placeholder="Calories"
            value={newLog.calories}
            onChange={(e) =>
              setNewLog({ ...newLog, calories: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full sm:w-32"
          />
          <input
            type="number"
            placeholder="Protein (g)"
            value={newLog.protein}
            onChange={(e) =>
              setNewLog({ ...newLog, protein: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full sm:w-32"
          />
          <input
            type="number"
            placeholder="Fat (g)"
            value={newLog.fat}
            onChange={(e) => setNewLog({ ...newLog, fat: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full sm:w-32"
          />
          <input
            type="number"
            placeholder="Carbs (g)"
            value={newLog.carbs}
            onChange={(e) => setNewLog({ ...newLog, carbs: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full sm:w-32"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add
          </button>
        </form>

        {/* Diet logs table */}
        <table className="w-full border text-center mb-6">
          <thead className="bg-green-100 text-green-700">
            <tr>
              <th className="p-2 border">Meal</th>
              <th className="p-2 border">Calories</th>
              <th className="p-2 border">Protein (g)</th>
              <th className="p-2 border">Fat (g)</th>
              <th className="p-2 border">Carbs (g)</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {dietLogs.map((log) => (
              <tr key={log.id}>
                <td className="p-2 border">{log.meal}</td>
                <td className="p-2 border">{log.calories}</td>
                <td className="p-2 border">{log.protein}</td>
                <td className="p-2 border">{log.fat}</td>
                <td className="p-2 border">{log.carbs}</td>
                <td className="p-2 border">{log.date}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(log.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Daily Total
          </h2>
          <p className="text-gray-700">
            <strong>Calories:</strong> {totals.calories.toFixed(1)} kcal |{" "}
            <strong>Protein:</strong> {totals.protein.toFixed(1)} g |{" "}
            <strong>Fat:</strong> {totals.fat.toFixed(1)} g |{" "}
            <strong>Carbs:</strong> {totals.carbs.toFixed(1)} g
          </p>
        </div>
      </div>
    </div>
  );
}

export default DietTracker;
