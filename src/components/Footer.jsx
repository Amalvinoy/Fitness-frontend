import React from "react";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left section */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">FitTrack</span>. All rights reserved.
        </p>

        {/* Right section */}
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a
            href="#"
            className="hover:text-green-200 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-green-200 transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-green-200 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
