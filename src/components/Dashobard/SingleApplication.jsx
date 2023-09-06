"use client";
import Image from "next/image";
import React from "react";
import {
  FaAngleDown,
  FaEdit,
  FaRegCalendarAlt,
  FaRegClock,
} from "react-icons/fa";
import ApplicationNotes from "./ApplicationNotes";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

const SingleApplication = ({ applicationData, mutate }) => {
  const { data } = useSession();
  console.log(data);
  const handleStatusUpdate = async (newStatus) => {
    const status = {
      status: newStatus,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/appliedjobs/${applicationData?._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(status),
        }
      );

      if (res.ok) {
        toast.success("Successfully Updated");
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-200">
      <div className="bg-white p-5 rounded-xl">
        <h3 className="text-3xl primary-color text-center font-bold pt-5 pb-8">
          Application Details
          <Link href={`/dashboard/editapplication/${applicationData?._id}`}>
            <FaEdit className="inline-block ms-2"></FaEdit>
          </Link>
        </h3>
        <div className=" flex justify-between items-center ">
          <div>
            <h3 className="text-3xl font-semibold">
              {applicationData?.companyName}
            </h3>
            <p className="primary-text-color">Role: {applicationData?.role}</p>
            <div>
              <FaRegClock className="inline-block me-1 text-xl primary-color"></FaRegClock>
              {new Date(applicationData?.date).toLocaleDateString()}
            </div>
          </div>

          {/* user info */}

          <div className="text-end">
            <h2 className="text-xl font-semibold">{data?.user?.name}</h2>
            <p className="primary-text-color">{data?.user?.email}</p>
          </div>

          {/* <div>
            <Image
              className="w-full"
              src={data?.companyLogoURL}
              width={100}
              height={80}
              alt="logo"
            ></Image>
          </div> */}
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className=" bg-white p-5 rounded-xl mt-8 w-1/2">
          <h3 className="text-xl font-semibold pb-4">
            Update Application Status -
            <span className="border py-1 px-2 rounded-xl bg-warning text-sm ms-2">
              {applicationData?.status}
            </span>
          </h3>
          <div className="dropdown w-full">
            <label tabIndex={0} className="btn btn-outline  w-full m-1">
              <p className="text-xl font-semibold">
                <FaAngleDown className="inline-block"></FaAngleDown>
                {applicationData?.status}
              </p>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
            >
              <li>
                <button
                  onClick={() => handleStatusUpdate("Interview Scheduled")}
                >
                  Interview Scheduled
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusUpdate("Offer Received")}>
                  Offer Received
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusUpdate("Rejected")}>
                  Rejected
                </button>
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

      <ApplicationNotes notes={applicationData?.notes}></ApplicationNotes>
    </div>
  );
};

export default SingleApplication;
