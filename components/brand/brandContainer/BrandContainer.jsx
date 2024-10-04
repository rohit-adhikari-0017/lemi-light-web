"use client";
import React, { useState } from "react";
import Style from "./BrandContainer.module.css";
import BrandItemBox from "../brandItemBox/BrandItemBox";
import Button from "@/lib/button/Button";

const BrandContainer = ({ brandData }) => {
  const [visibleCountData, setVisibleCountData] = useState(2);
  const ReadMoreButton = () => {
    let newData = visibleCountData + 2;
    setVisibleCountData(newData);
  };
  return (
    <>
      <div className={`${Style.brandContainer} container`}>
        <div className={`${Style.brandMainBox}`}>
          {brandData.map((data, i) => {
            return (
              <>
                {i <= visibleCountData ? (
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
