"use client";
import React, { useState } from "react";
import Style from "./BrandContainer.module.css";
import BrandItemBox from "../brandItemBox/BrandItemBox";
import Button from "@/lib/button/Button";

const BrandContainer = ({ brandData }) => {
  const [iCounter, setICounter] = useState(2); // Initialize state for iCounter
  const ReadMoreButton = () => {
    setICounter((prevCounter) => prevCounter + 3); // Increase iCounter by 3
  };
  return (
    <>
      <div className={`${Style.brandContainer} container`}>
        <div className={`${Style.brandMainBox}`}>
          {brandData.map((data, i) => {
            return (
              <>
                {i <= iCounter ? (
                  <BrandItemBox key={i} data={data}></BrandItemBox>
                ) : null}
              </>
            );
          })}
        </div>
        <Button ReadMoreBtn={ReadMoreButton}></Button>
      </div>
    </>
  );
};

export default BrandContainer;
