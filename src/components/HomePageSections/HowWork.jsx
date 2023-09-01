import React from "react";
import { FaBookReader, FaBrain, FaEdit, FaPlusSquare } from "react-icons/fa";

const HowWork = () => {
  return (
    <div className="container mx-auto mb-40">
      <div className="w-11/12 lg:w-2/4 mx-auto text-center my-16">
        <h3 className="text-3xl font-bold">How Does it Workes?</h3>
        <p className="primary-text-color py-3">
          With Applies, you're equipped to take control of your job search. Stay
          organized, make informed decisions, and increase your chances of
          landing your dream job.
        </p>
      </div>
      <div className="lg:grid grid-cols-4 gap-8 space-y-6 my-10 mx-3">
        <div className=" mx-auto rounded-tr-[50px] rounded-bl-[50px] border-[3px] border-[rgba(98,90,255,0.71)] p-8  shadow-xl">
          <FaPlusSquare className="text-5xl primary-color inline-block rounded-tr-[20px] rounded-bl-[20px] "></FaPlusSquare>
          <h3 className="text-xl font-bold py-3 ">Add Job Applications</h3>
          <p className="primary-text-color">
            After logging in, click on the "Add Application" button to start
            adding your job applications.
          </p>
        </div>
        <div className=" mx-auto rounded-tr-[50px] rounded-bl-[50px] border-[3px] border-red-300 p-8  shadow-xl">
          <FaBookReader className="text-5xl text-red-500 inline-block rounded-tr-[20px] rounded-bl-[20px] "></FaBookReader>
          <h3 className="text-xl font-bold py-3 ">Stay Organized</h3>
          <p className="primary-text-color">
            Our intuitive dashboard helps you keep everything in one place. View
            all your job applications at a glance, organized by status.
          </p>
        </div>
        <div className=" mx-auto rounded-tr-[50px] rounded-bl-[50px] border-[3px] border-green-300 p-8  shadow-xl">
          <FaBrain className="text-5xl text-green-500 inline-block rounded-tr-[20px] rounded-bl-[20px] "></FaBrain>
          <h3 className="text-xl font-bold py-3 ">Track Progress</h3>
          <p className="primary-text-color">
            Gain insights into your job search journey. See how many
            applications you've submitted, your interview success rate, and
            more.
          </p>
        </div>
        <div className=" mx-auto rounded-tr-[50px] rounded-bl-[50px] border-[3px] border-yellow-300 p-8  shadow-xl">
          <FaEdit className="text-5xl text-yellow-500 inline-block  "></FaEdit>
          <h3 className="text-xl font-bold py-3 ">Update and Edit</h3>
          <p className="primary-text-color">
            Edit your job applications anytime, ensuring your records are always
            up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
