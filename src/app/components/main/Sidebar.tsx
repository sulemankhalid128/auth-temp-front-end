// src/components/Sidebar.tsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userProvider";

const Sidebar: React.FC = () => {
  const { user } = useContext<any>(UserContext);
  const navigate =useNavigate();
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          {user ? `Welcome ${user?.fullName}` : "Logo"}
        </h1>
      </div>
      <nav className="flex flex-col flex-1">
        <Link to="/" className="p-4 hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="p-4 hover:bg-gray-700">
          About
        </Link>
        <Link to="/services" className="p-4 hover:bg-gray-700">
          Services
        </Link>
        <Link to="/contact" className="p-4 hover:bg-gray-700">
          Contact
        </Link>
      </nav>
      <div className="p-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
            localStorage.removeItem('token');
            navigate('/auth/login')

        }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
