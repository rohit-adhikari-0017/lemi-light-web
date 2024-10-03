"use client";
import React from "react";
import Image from "next/image";
import Style from "./BrandItemBox.module.css";
import { IoIosArrowForward } from "react-icons/io";

const BrandItemBox = ({ data }) => {
  // console.log(data);
  return (
    <>
      {/* Brand Item Box */}
      <div className={`${Style.brandItemBox} `}>
        {/* Brand Image */}
        <div className={`${Style.brandImg}`}>
          <Image src={data.image} alt={data.title} />
        </div>
        {/* Brand Content */}
        <div className={`${Style.brandContent}`}>
          <div className={`${Style.brandDetails}`}>
            <h1>{data.title}</h1>
            <p>{data.parr}</p>
          </div>
          <div className={`${Style.brandIconBox}`}>
            <span className={`${Style.brandIcon}`}>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandItemBox;
