"use client";

import SingleApplication from "@/components/Dashobard/SingleApplication";
import LoadingFull from "@/components/shared/LoadingFull";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SingleApplicationPage = ({ params }) => {
  // get single data
  const { data, isLoading, mutate, error } = useSWR(
    `http://localhost:3000/api/appliedjobs/${params.id}`,
    fetcher
  );

  if (isLoading) {
    return <LoadingFull></LoadingFull>;
  }

  return (
    <div className="me-5 my-8">
      <SingleApplication
        applicationData={data}
        mutate={mutate}
      ></SingleApplication>
    </div>
  );
};

export default SingleApplicationPage;
