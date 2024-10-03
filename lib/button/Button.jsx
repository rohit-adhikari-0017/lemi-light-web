"use client";
import React from "react";
import Style from "./Button.module.css";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ ReadMoreBtn }) => {
  return (
    <>
      <div className={`${Style.brandBtn}`}>
        <button className={`${Style.btn}`} onClick={ReadMoreBtn}>
          Read More
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default Button;
