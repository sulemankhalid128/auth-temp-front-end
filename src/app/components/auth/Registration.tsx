import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div
    className="h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center"
  >
    <div
      className="max-w-md p-6 bg-white rounded-lg shadow-md w-dvw"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Register</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Already have an account? 
        <Link
          to="/auth/login"
          className="text-blue-500 hover:text-blue-700"
        >
          Login here
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Registration