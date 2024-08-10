import React from "react";
// import {FaSearch} from 'react-icon/fa'
import { FaHome } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-[#304b24] shadow-md h-screen px-10 py-3">
      <div className="flex flex-col items-start max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className=" flex flex-wrap ">
            <span className="font-extrabold text-4xl text-white">Agri</span>
            <span className="font-extrabold  text-4xl text-white">Link</span>
          </h1>
        </Link>
        
        <ul className="flex gap-4 text-white flex-col my-10">
        <Link to="/profile">
            {currentUser ? (
              <div className="flex gap-5">
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
              <span>Profile</span>
              </div>
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
          <Link to="/">
          <div className="flex gap-4">
            <FaHome className='text-white text-3xl' />
            <li className="hidden sm:inline text-white hover:underline">
              Home
            </li>
            </div>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-white   hover:underline">
              About
            </li>
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
