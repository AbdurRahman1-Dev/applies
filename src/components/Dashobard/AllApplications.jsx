"use client";

import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaRegClock, FaTrashAlt } from "react-icons/fa";
import LoadingSm from "../shared/LoadingSm";
import { toast } from "react-hot-toast";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllApplications = () => {
  // get all application
  const {
    data: appliedjobs,
    isLoading,
    error,
    mutate,
  } = useSWR("http://localhost:3000/api/appliedjobs", fetcher);

  if (isLoading) {
    return <LoadingSm></LoadingSm>;
  }
  if (error) {
    return <div className="text-3xl text-red-500">Something went wrong</div>;
  }

  // delete by Id

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/appliedjobs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Successfully Deleted");
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden me-5">
      <div className="lg:grid grid-cols-3 gap-4">
        {appliedjobs?.map((applications) => (
          <div
            key={applications?._id}
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
              <div className="flex justify-between items-start">
                <div>
                  <Link
                    href={`/dashboard/singleapplication/${applications?._id}`}
                  >
                    <h3 className="text-2xl font-semibold">
                      {applications?.companyName}
                    </h3>
                    <p className="font-semibold primary-text-color">
                      {applications?.role}
                    </p>
                  </Link>
                </div>

                <div className="dropdown ">
                  <label tabIndex={0} className="cursor-pointer">
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
                  >
                    <li>
                      <Link
                        href={`/dashboard/editapplication/${applications?._id}`}
                      >
                        <FaEdit className="inline-block text-black"></FaEdit>
                        Edit
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => handleDelete(applications?._id)}
                        className="text-error"
                      >
                        <FaTrashAlt className="inline-block "></FaTrashAlt>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <FaRegClock className="inline-block me-1 text-xl primary-color"></FaRegClock>
                  {new Date(applications?.date).toLocaleDateString()}
                </div>

                <p className="bg-warning px-2 py-1 rounded-xl">
                  {" "}
                  {applications?.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
