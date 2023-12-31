"use client";

import React from "react";
import avatar from "../../../public/avatar.png";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  const { data } = useSession();
  console.log(data);
  const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/features"}>Features</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>contact</Link>
      </li>
      {status == "authenticated" ? (
        <>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        </>
      ) : (
        <>
          {/* <li>
            <Link href={"/signup"}>Sign Up</Link>
          </li> */}
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" btn btn-sm btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl font-semibold"
          >
            {navItems}
            <div className="navbar-end">
              {status == "authenticated" ? (
                <button onClick={signOut} className="btn btn-sm btn-info">
                  LogOut
                </button>
              ) : (
                <button className="btn btn-sm btn-info">
                  <Link href={"/signup"}>SignIn</Link>
                </button>
              )}
            </div>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          {/* <Image src={logo} width={150} alt="applies"></Image> */}
          <h3 className="text-2xl font-semibold primary-color">Applies</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {navItems}
        </ul>
      </div>

      {/* condition */}

      {status == "authenticated" ? (
        <>
          <div className="navbar-end">
            <div className="avatar">
              <div className=" rounded-full">
                <Image
                  src={data?.user?.image || avatar}
                  width={50}
                  height={50}
                  alt="avatar"
                ></Image>
              </div>
            </div>
            <button
              onClick={signOut}
              className="btn btn-md ms-2 btn-error hidden lg:block"
            >
              LogOut
            </button>
          </div>
        </>
      ) : (
        <>
          <li>
            <button className="btn primary-btn hidden lg:block">
              <Link href={"/signup"}>Sign Up</Link>
            </button>
          </li>
        </>
      )}
    </div>
  );
};

export default Navbar;
