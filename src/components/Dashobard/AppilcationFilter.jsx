import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { MdSort } from "react-icons/md";

const AppilcationFilter = () => {
  return (
    <div className="bg-white p-5 rounded-xl my-7 me-5">
      <div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="lg:text-2xl font-bold">My Applications</h3>
          <button className="btn btn-outline btn-error hidden lg:block btn-md">
            <FaSignOutAlt className="inline-block"></FaSignOutAlt> Logout
          </button>
        </div>
        <div className="lg:flex items-center gap-10">
          <div className="lg:w-1/2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full"
            />

            <FaSearch className="inline-block text-2xl text-white p-1 -ms-10 z-50 primary-bg-color rounded-md"></FaSearch>
          </div>

          <div>
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-outline primary-border-color hover:bg-blue-500 hover:border-0 m-1"
              >
                <MdSort className="text-2xl"></MdSort>
                sort by Date
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Newest</a>
                </li>
                <li>
                  <a>Oldest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppilcationFilter;
