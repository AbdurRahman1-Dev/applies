import Image from "next/image";
import React from "react";
import { FaAngleDown, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import ApplicationNotes from "./ApplicationNotes";

const SingleApplication = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="bg-white p-5 rounded-xl">
        <h3 className="text-3xl primary-color text-center font-bold pt-5 pb-8">
          Application Details
        </h3>
        <div className=" flex justify-between items-center ">
          <div>
            <h3 className="text-3xl font-semibold">{data?.companyName}</h3>
            <p className="primary-text-color">Role: {data?.role}</p>
          </div>

          <div>
            <FaRegClock className="inline-block me-1 text-xl primary-color"></FaRegClock>
            {new Date(data?.date).toLocaleDateString()}
          </div>
          <div>
            <Image
              src={data?.companyLogoURL}
              width={80}
              height={80}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className=" bg-white p-5 rounded-xl mt-8 w-1/2">
          <h3 className="text-2xl font-semibold pb-4">
            Update Application Status -
            <span className="border py-1 px-2 rounded-xl bg-warning text-xl ms-2">
              {data?.status}
            </span>
          </h3>
          <div className="dropdown w-full">
            <label tabIndex={0} className="btn btn-outline  w-full m-1">
              <p className="text-xl font-semibold">
                <FaAngleDown className="inline-block"></FaAngleDown>
                {data?.status}
              </p>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
            >
              <li>
                <a>Interview Scheduled</a>
              </li>
              <li>
                <a>Offer Received</a>
              </li>
              <li>
                <a>Rejected</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl mt-8 w-1/2 text-2xl text-center">
          <FaRegCalendarAlt className="text-center mx-auto block"></FaRegCalendarAlt>
          set interview date in calender
          <h4>Comming soon</h4>
        </div>
      </div>

      <ApplicationNotes notes={data?.notes}></ApplicationNotes>
    </div>
  );
};

export default SingleApplication;
