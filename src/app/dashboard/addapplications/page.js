import React from "react";

const page = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-full bg-white mx-5 py-5 rounded-3xl">
        <div className="flex flex-col  md:p-6 rounded-md w-full">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add Application</h1>
          </div>
          <form className="space-y-6 w-full p-5">
            <div className="space-y-4">
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Company  Name"
                    className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Role
                  </label>
                  <input
                    name="Role"
                    required
                    placeholder="Enter Your Role"
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={"your email"}
                    className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">Status</label>
                  <input
                    type="text"
                    name="status"
                    defaultValue={"In Review"}
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="primary-bg-color w-full rounded-md py-3 text-white"
              >
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
