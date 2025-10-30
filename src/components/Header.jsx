import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="FitTrack Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">FitTrack</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/workouts"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Workouts
          </NavLink>

          <NavLink
            to="/diet"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Diet Tracker
          </NavLink>

          <NavLink
            to="/progress"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Progress
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Profile
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

