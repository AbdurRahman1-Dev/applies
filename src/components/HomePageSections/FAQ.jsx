import Image from "next/image";
import React from "react";
import faq from "../../../public/faq.jpg";
const FAQ = () => {
  return (
    <section className="container mx-auto my-32">
      <h3 className="lg:text-3xl text-2xl mx-3 font-bold">
        Frequently Asked Questions(FAQ)
      </h3>
      <div className="lg:flex items-center mx-3">
        <div className="lg:w-1/2">
          <Image src={faq} alt="faq"></Image>
        </div>
        <div className="lg:w-1/2 space-y-3">
          <div className="collapse collapse-plus primary-bg-color text-white">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                officiis ab! Provident nihil qui voluptate temporibus dolor
                rerum reprehenderit harum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus primary-bg-color text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus primary-bg-color text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
