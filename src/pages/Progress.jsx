import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  getWeightLogsAPI,
  getCalorieLogsAPI,
  getFatLogsAPI,
  getProteinLogsAPI,
  addWeightLogAPI,
  addCalorieLogAPI,
  addFatLogAPI,
  addProteinLogAPI,
} from "../services/allAPIs";

function Progress() {
  // 🔹 State to store all types of logs
  const [weightLogs, setWeightLogs] = useState([]);
  const [calorieLogs, setCalorieLogs] = useState([]);
  const [fatLogs, setFatLogs] = useState([]);
  const [proteinLogs, setProteinLogs] = useState([]);

  // 🔹 State for new entry inputs
  const [newEntry, setNewEntry] = useState({
    weight: "",
    calories: "",
    fat: "",
    protein: "",
  });

  // 🔹 Fetch data one by one (simpler)
  const fetchAllLogs = async () => {
    try {
      const weightRes = await getWeightLogsAPI();
      setWeightLogs(weightRes.data);

      const calorieRes = await getCalorieLogsAPI();
      setCalorieLogs(calorieRes.data);

      const fatRes = await getFatLogsAPI();
      setFatLogs(fatRes.data );

      const proteinRes = await getProteinLogsAPI();
      setProteinLogs(proteinRes.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  // 🔹 Add new entry (simplified)
  const handleAdd = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().split("T")[0];

    try {
      if (newEntry.weight !== "")
        await addWeightLogAPI({ date, weight: parseFloat(newEntry.weight) });

      if (newEntry.calories !== "")
        await addCalorieLogAPI({
          date,
          calories: parseFloat(newEntry.calories),
        });

      if (newEntry.fat !== "")
        await addFatLogAPI({ date, fat: parseFloat(newEntry.fat) });

      if (newEntry.protein !== "")
        await addProteinLogAPI({ date, protein: parseFloat(newEntry.protein) });

      // Reset the form
      setNewEntry({ weight: "", calories: "", fat: "", protein: "" });

      // Refresh data
      fetchAllLogs();
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  // 🔹 Fetch all logs when page loads
  useEffect(() => {
    fetchAllLogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Page Title */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Your Fitness Progress
        </h1>
        <p className="text-gray-600">
          Track your weight, calories, fat %, and protein intake — update only
          what you want!
        </p>
      </div>

      {/* Add Entry Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Add New Progress Entry
        </h2>

        <form
          onSubmit={handleAdd}
          className="flex flex-col sm:flex-row flex-wrap gap-4 items-center"
        >
          <input
            type="number"
            step="0.1"
            placeholder="Weight (kg)"
            value={newEntry.weight}
            onChange={(e) =>
              setNewEntry({ ...newEntry, weight: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full sm:w-auto"
          />

          <input
            type="number"
            placeholder="Calories"
            value={newEntry.calories}
            onChange={(e) =>
              setNewEntry({ ...newEntry, calories: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full sm:w-auto"
          />

          <input
            type="number"
            step="0.1"
            placeholder="Fat (%)"
            value={newEntry.fat}
            onChange={(e) => setNewEntry({ ...newEntry, fat: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full sm:w-auto"
          />

          <input
            type="number"
            step="0.1"
            placeholder="Protein (g)"
            value={newEntry.protein}
            onChange={(e) =>
              setNewEntry({ ...newEntry, protein: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full sm:w-auto"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add
          </button>
        </form>
      </div>

      {/* Charts */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {weightLogs.length > 0 && (
          <ChartCard
            title="Weight Progress (kg)"
            data={weightLogs}
            color="#16a34a"
            dataKey="weight"
          />
        )}

        {calorieLogs.length > 0 && (
          <ChartCard
            title="Calorie Intake (per day)"
            data={calorieLogs}
            color="#f59e0b"
            dataKey="calories"
          />
        )}

        {fatLogs.length > 0 && (
          <ChartCard
            title="Body Fat Percentage (%)"
            data={fatLogs}
            color="#ef4444"
            dataKey="fat"
          />
        )}

        {proteinLogs.length > 0 && (
          <ChartCard
            title="Protein Intake (g)"
            data={proteinLogs}
            color="#3b82f6"
            dataKey="protein"
          />
        )}
      </div>

      {/* No Data */}
      {weightLogs.length == 0 &&
        calorieLogs.length == 0 &&
        fatLogs.length == 0 &&
        proteinLogs.length == 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p>No progress data yet. Add your first entry above!</p>
          </div>
        )}
    </div>
  );
}

// ✅ Simple Chart Component
function ChartCard({ title, data, color, dataKey }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Progress;
