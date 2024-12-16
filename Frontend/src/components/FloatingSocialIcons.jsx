import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FloatingSocialIcons = () => {
  return (
    <div className="floating-social-icons left-2 md:left-5">
      <a
        href="https://www.facebook.com/sushilchaudharySC"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon text-blue-500"
      >
        <FaFacebookSquare size={30} />
      </a>
      <a
        href="https://www.instagram.com/sushil_14ry/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon bg-instagram-gradient text-white"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/sushilchaudhary0408/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon text-[#0882BD]"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon text-black"
      >
        <FaSquareXTwitter size={30} />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
