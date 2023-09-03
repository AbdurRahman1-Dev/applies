import Link from "next/link";
import React from "react";
import {
  FaBriefcase,
  FaPlus,
  FaRocketchat,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen primary-bg-color w-1/6 fixed">
      <div className="justify-start p-5">
        <h3 className="text-3xl font-bold text-white border-b py-5 text-center">
          <Link className="cursor-pointer" href={"/"}>
            Applies
          </Link>
        </h3>
      </div>
      <div className="mt-20">
        <ul className="text-md font-semibold text-white">
          <Link href={"/dashboard"}>
            <li className="hover:bg-[rgba(50,39,255,0.91)] duration-200 p-5">
              <FaBriefcase className="inline-block me-2"></FaBriefcase>My
              Applications
            </li>
          </Link>
          <Link href={"/dashboard/addapplications"}>
            <li className="hover:bg-[rgba(50,39,255,0.91)] duration-200 p-5">
              <FaPlus className="inline-block me-2"></FaPlus>Add Applications
            </li>
          </Link>

          <Link href={"/dashboard/ai"}>
            <li className="hover:bg-[rgba(50,39,255,0.91)] duration-200 p-5">
              <FaRocketchat className="inline-block me-2"></FaRocketchat>Ask Ai.
            </li>
          </Link>
          <Link href={"/dashboard"}>
            <li className="hover:bg-[rgba(50,39,255,0.91)] duration-200 p-5">
              <FaUserCircle className="inline-block me-2"></FaUserCircle>Profile
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
