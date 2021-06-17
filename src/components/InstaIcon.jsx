import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const InstaIcon = () => {
  return (
    <a
      href="https://www.instagram.com/sophiekelevra/"
      target="_blank"
      rel="noreferrer"
    >
      <AiOutlineInstagram className=" fixed  m-6 bottom-0 right-0 h-20 w-20 p-2 bg-black duration-300 text-white rounded-full z-50 hover:bg-gradient-to-r from-blue to-pink hover:text-black" />
    </a>
  );
};

export default InstaIcon;
