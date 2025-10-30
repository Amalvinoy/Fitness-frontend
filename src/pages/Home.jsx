import { Link } from "react-router-dom";

 function Home() {
  const categories = [
    {
      name: "Yoga",
      image:
        "https://img.freepik.com/free-photo/adult-woman-practicing-yoga-home_23-2148756379.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Enhance flexibility, balance, and peace of mind.",
    },
    {
      name: "Calisthenics",
      image:
        "https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F3s6iQxzlvCVcGJ1a3ISPMv%2Fe2731b4c3043a233aa594cedeff271bc%2FBeginners_Calisthenics_Workout.jpg&w=3840&q=85",
      description: "Bodyweight workouts for strength and control.",
    },
    {
      name: "Cardio",
      image:
        "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/12/cardio-or-weights-first-scaled.jpg?fit=2560%2C1707&ssl=1",
      description: "Boost endurance and burn calories fast.",
    },
    {
      name: "Strength",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60",
      description: "Build muscle, power, and confidence.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center text-gray-800">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Transform Your Body & Mind
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Watch guided workouts, track your diet, and monitor your progress — all in one place.
        </p>
        <Link
          to="/workouts"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-100 transition"
        >
          Start Your Journey
        </Link>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl w-full py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Workout Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                <Link
                  to={`/workouts?category=${cat.name}`}
                  className="text-green-700 font-medium hover:underline"
                >
                  View Workouts →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-green-600 w-full text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
        <p className="mb-6">
          Log your diet, monitor your weight, and visualize your improvements.
        </p>
        <div className="space-x-4">
          <Link
            to="/diet"
            className="bg-white text-green-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-green-100 transition"
          >
            Track Diet
          </Link>
          <Link
            to="/progress"
            className="border border-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
          >
            View Progress
          </Link>
        </div>
      </section>

    </div>
  );
}
export default Home;
