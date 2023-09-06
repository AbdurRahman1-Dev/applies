"use client";

import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const route = useRouter();
  const { status } = useSession();
  // const [error, setError] = useState("");
  // const handleSUbmit = async (e) => {
  //   e.preventDefault();
  //   const userInfo = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };

  //   try {
  // const resExist = await fetch("/api/userexist", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(email),
  // });

  // const user = await resExist.json();
  // console.log(user);

  // if (user) {
  //   setError("user exist");
  //   return;
  // }

  //     const res = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(userInfo),
  //     });
  //     if (res.ok) {
  //       console.log(res);
  //       toast.success("user created");
  //       alert("ccreated");
  //       e.target.reset();
  //     }
  //   } catch (error) {
  //     console.log("fail");
  //     setError("something went wrong");
  //   }
  // };
  return (
    // <div className="w-full bg-slate-100">
    //   <div className="w-full my-14 mx-auto md:w-3/6 p-4  sm:p-6 md:p-8  ">
    //     <form
    //       onSubmit={handleSUbmit}
    //       className="space-y-6 bg-white text-black p-3 md:p-5 rounded-lg"
    //     >
    //       <h5 className="text-xl font-medium ">Sign Up </h5>
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900 ">
    //           Your Name
    //         </label>
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
    //           placeholder="Your name"
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900 ">
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
    //           placeholder="Your E-mail"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900">
    //           Your password
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           placeholder="••••••••"
    //           className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
    //           required
    //         />
    //         <p className="text-red-600">{error}</p>
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full text-white primary-bg-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center primary-bg-color "
    //       >
    //         Create account
    //       </button>

    //       <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
    //         already have an account?
    //         <Link href="/login" className=" hover:underline primary-color">
    //           Login
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="h-screen flex justify-center items-center  mx-3">
      <div>
        <div className="text-center">
          <h3 className="text-3xl primary-color mb-4 font-bold">Applies</h3>
        </div>
        <div className=" text-center py-5">
          <h4 className="text-2xl font-semibold pb-2">😊 Let's get Started</h4>
          <p className="primary-text-color">
            Signup Now and Elevate YourJob SearchGame!
          </p>
        </div>

        <div className="w-full">
          <button
            onClick={() => {
              signIn("google");
            }}
            className="btn primary-btn w-full"
          >
            <FaGoogle className="text-2xl"></FaGoogle>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
