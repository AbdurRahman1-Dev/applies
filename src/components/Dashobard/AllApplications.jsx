import getapplications from "@/utils/getapplications";
import React from "react";
import { FaRegClock } from "react-icons/fa";
const AllApplications = async () => {
  const appliedjobs = await getapplications();

  return (
    <div>
      <h1>ALl Applied Jobs</h1>

      <div className="grid grid-cols-3 gap-4">
        {appliedjobs.map((applications) => (
          <div
            key={applications._id}
            className="bg-white p-5 border rounded-md"
          >
            <h3 className="text-2xl font-semibold">
              {applications.companyName}
            </h3>
            <p className="font-semibold primary-text-color">
              {applications.role}
            </p>

            <div className="flex justify-between items-center">
              <div>
                <FaRegClock className="inline-block me-1 text-xl primary-color"></FaRegClock>{" "}
                {new Date(applications.date).toDateString()}
              </div>
              <p className="border p-2 rounded-xl"> {applications.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
