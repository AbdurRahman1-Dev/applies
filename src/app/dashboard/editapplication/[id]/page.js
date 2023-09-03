"use client";
import LoadingFull from "@/components/shared/LoadingFull";
import { toast } from "react-hot-toast";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditApplicationPage = ({ params }) => {
  const { data, isLoading, mutate, error } = useSWR(
    `http://localhost:3000/api/appliedjobs/${params.id}`,
    fetcher
  );

  if (isLoading) {
    return <LoadingFull></LoadingFull>;
  }

  const handleSUbmit = async (e) => {
    e.preventDefault();
    const updateApplication = {
      companyName: e.target.name.value,
      role: e.target.role.value,
      companyLogoURL: e.target.url.value,
      userEmail: "akrahman@gmail.com",
      notes: e.target.notes.value,
      status: e.target.status.value,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/appliedjobs/${params.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateApplication),
        }
      );

      if (res.ok) {
        toast.success("Successfully Updated");
        e.target.reset();
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center h-screen">
      <div className="w-full bg-white mx-5 py-5 rounded-3xl">
        <div className="flex flex-col  md:p-6 rounded-md w-full">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Update Application</h1>
          </div>
          <form onSubmit={handleSUbmit} className="space-y-6 w-full p-5">
            <div className="space-y-4">
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    defaultValue={data?.companyName}
                    className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">Role</label>
                  <input
                    name="role"
                    required
                    placeholder="Enter Your Role"
                    defaultValue={data?.role}
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Logo URL</label>
                  <input
                    type="text"
                    placeholder="Company Logo URL"
                    name="url"
                    defaultValue={data?.companyLogoURL}
                    className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">Status</label>
                  <input
                    type="text"
                    name="status"
                    defaultValue={data?.status}
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm">Notes</label>
                <textarea
                  type="textarea"
                  name="notes"
                  placeholder="Notes about this application"
                  defaultValue={data?.notes}
                  className="w-full h-28 px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="primary-bg-color w-full rounded-md py-3 text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditApplicationPage;
