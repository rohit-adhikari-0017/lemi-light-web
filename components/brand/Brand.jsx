import React from "react";
import Style from "./Brand.module.css";
import BrandContainer from "./brandContainer/BrandContainer";
import { BrandContentData } from "@/data/brandContentData/BrandContentData";

const Brand = () => {
  return (
    <>
      <div className={`${Style.brand}`}>
        <BrandContainer brandData={BrandContentData}></BrandContainer>
      </div>
    </>
  );
};

export default Brand;
