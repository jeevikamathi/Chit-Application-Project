import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
     
      <div className="hidden lg:block flex-1 relative">
        <img
          src="/images/savings_image.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

   
      <div className="flex flex-col items-center justify-center flex-1 px-8 py-12 bg-white">
        <div className="mb-8">
          <img
            src="/images/chit-image.jpg"
            alt="App Logo"
            className="w-20 h-20"
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Our App!
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Join us to experience something amazing. Let's make it better
          together!
        </p>

        <div className="space-y-4 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          >
            Login
          </button>

          <p className="text-gray-600">New user? Follow</p>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
