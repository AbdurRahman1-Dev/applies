import Getapplications from "@/utils/getapplications";
import Image from "next/image";
import React from "react";
import { FaRegClock, FaAngleDown } from "react-icons/fa";

const AllApplications = async () => {
  const appliedjobs = await Getapplications();
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-4">
        {appliedjobs?.map((applications) => (
          <div
            key={applications._id}
            className="bg-white p-5 border rounded-xl flex gap-3 items-start"
          >
            <div className="pt-2">
              <Image
                src={applications?.companyLogoURL}
                width={40}
                height={40}
                alt="logo"
              />
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-semibold">
                {applications.companyName}
              </h3>
              <p className="font-semibold primary-text-color">
                {applications.role}
              </p>

              <div className="flex justify-between items-center ">
                <div>
                  <FaRegClock className="inline-block me-1 text-xl primary-color"></FaRegClock>
                  {new Date(applications.date).toLocaleDateString()}
                </div>
                <div className="dropdown ">
                  <label
                    tabIndex={0}
                    className="btn btn-outline primary-border-color hover:bg-blue-500 hover:border-0 m-1"
                  >
                    <FaAngleDown></FaAngleDown>
                    {applications?.status}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Got Call</a>
                    </li>
                    <li>
                      <a>Interview</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
