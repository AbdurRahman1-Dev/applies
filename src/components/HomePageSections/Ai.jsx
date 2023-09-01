import React from "react";
import ai from "../../../public/ai.jpg";
import Image from "next/image";
import {
  BsAlarmFill,
  BsFillLightningFill,
  BsPersonFillCheck,
} from "react-icons/bs";

const Ai = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center w-11/12 lg:w-2/4 mx-auto">
        <h3 className="text-3xl font-bold"> ChatGPT Integration</h3>
        <p className="primary-text-color py-3">
          ntroducing ChatGPT, your virtual job search assistant, seamlessly
          integrated into Applies. With ChatGPT, you have a powerful AI
          companion to enhance your job application journey.
        </p>
      </div>
      <div className="lg:flex items-center">
        <div className="lg:w-1/2">
          <Image className="" src={ai} alt="ai"></Image>
        </div>
        <div className="lg:w-1/2 mx-3">
          <h4 className="text-3xl font-semibold">
            Meet Your Virtual Job Search Assistant: ChatGPT
          </h4>
          <p className="primary-text-color py-3">
            Harness the power of AI with ChatGPT to supercharge your job
            application process. From expert advice to timely reminders, ChatGPT
            is your reliable companion in your quest for the perfect job.
          </p>
          <div className="flex items-center gap-4 lg:w-3/4 p-3 border-yellow-500 border-2 rounded-xl mt-5">
            <BsFillLightningFill className="text-2xl text-yellow-500 "></BsFillLightningFill>
            <div>
              <h4 className="text-xl font-semibold">Instant Answers</h4>
              <p className="primary-text-color">
                ChatGPT is here to answer your questions 24/7.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:w-3/4 p-3 border-2 rounded-xl mt-5 border-[rgba(98,90,255,0.71)]">
            <BsPersonFillCheck className="text-2xl primary-color "></BsPersonFillCheck>
            <div>
              <h4 className="text-xl font-semibold">Interview Preparation</h4>
              <p className="primary-text-color">
                personalized tips and practice questions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:w-3/4 p-3 border-2 rounded-xl mt-5 border-red-300">
            <BsAlarmFill className="text-2xl text-red-500"></BsAlarmFill>
            <div>
              <h4 className="text-xl font-semibold">Reminders and Alerts</h4>
              <p className="primary-text-color">
                set up reminders for important dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ai;
