import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="w-full my-14 mx-auto md:w-3/6 p-4  sm:p-6 md:p-8  ">
        <form className="space-y-6 bg-white text-black p-3 md:p-5 rounded-lg">
          <h5 className="text-xl font-medium ">Sign Up </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="Photo URL"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
              placeholder="Photo URL"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
              placeholder="Your E-mail"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
              required
            />
            {/* <p className="text-red-600">error</p> */}
          </div>

          <button
            type="submit"
            className="w-full text-white primary-bg-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center primary-bg-color "
          >
            Create account
          </button>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            already have an account?
            <Link href="/login" className=" hover:underline primary-color">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
