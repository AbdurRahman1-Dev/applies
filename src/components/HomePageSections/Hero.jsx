import React from "react";
import banner from "../../../public/banner.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero lg:min-h-screen container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <Image
          className="shadow-2xl  lg:w-1/2 overflow-hidden"
          src={banner}
          alt="banner"
          placeholder="blur"
        ></Image>
        <div className="w-full lg:w-1/2">
          <h1 className="lg:text-6xl text-3xl font-bold">
            Elevate Your
            <span className="primary-color">
              Job
              <br /> Search
            </span>
            Game!
          </h1>
          <p className="pt-3 primary-text-color">
            Your Personal Job Application Assistant
          </p>
          <p className="py-3 primary-text-color">
            Effortlessly organize and track your job applications from one
            place.
          </p>
          <Link href={"/signup"}>
            {" "}
            <button className="btn primary-btn text-white">Sign Up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
