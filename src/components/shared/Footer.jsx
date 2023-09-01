import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 primary-bg-color text-white  rounded">
      <div className="grid grid-flow-col gap-2 lg:gap-5">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Features</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <FaLinkedin className="text-3xl"></FaLinkedin>
          <FaTwitterSquare className="text-3xl"></FaTwitterSquare>
          <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Applies</p>
      </div>
    </footer>
  );
};

export default Footer;
