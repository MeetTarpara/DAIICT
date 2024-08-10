import React from "react";
// import {FaSearch} from 'react-icon/fa'
import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-[#304b24] shadow-md h-screen pl-12 pr-12 py-3">
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
              <div className="flex gap-5 justify-start items-center">
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
                <span className="text-xl">Profile</span>
              </div>
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
          <Link to="/">
            <div className="flex gap-4 justify-start items-center border-b-2 pr-28 pb-2 border-gray-200 ">
              <FaCircle className="text-white text-xs" />
              <li className="hidden sm:inline text-white hover:underline text-xl">
                Home
              </li>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex gap-4 justify-start items-center mb-2 border-b-2 pr-28 pb-2 border-gray-200">
              <FaCircle className="text-white text-xs" />

              <li className="hidden sm:inline text-white hover:underline text-xl">
                Subsedy
              </li>
            </div>
            <ul className="pl-7 flex flex-col gap-3">
              <Link to="/export-subsidy">
                  <li className="hidden sm:inline text-white hover:underline text-lg">
                    Export
                  </li>
              </Link>
              <Link to="/power-subsidy">
                  <li className="hidden sm:inline text-white hover:underline text-lg">
                    Power
                  </li>
              </Link>
              <Link to="/seed-subsidy">
                  <li className="hidden sm:inline text-white hover:underline text-lg">
                    Seed
                  </li>
              </Link>
              <Link to="/fertilizer-subsidy">
                  <li className="hidden sm:inline text-white hover:underline text-lg">
                    Fertilizer
                  </li>
              </Link>
            </ul>
          </Link>
        </ul>
      </div>
    </header>
  );
}
