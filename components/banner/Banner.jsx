"use client";
import React from "react";
import Style from "./Banner.module.css";
import Image from "next/image";
import BannerImg from "@/public/assets/img/bannerImg.png";

const Banner = () => {
  return (
    <>
      <div className={`${Style.banner}`}>
        <div className={`${Style.bannerContainer} container`}>
          {/* Banner SignUp Box */}

          <div className={`${Style.bannerSignUpBox}`}>
            {/* Sign Up Email Content */}
            <div className={`${Style.signUpEmailContent}`}>
              <h1 className={`${Style.emailContentHeading}`}>
                Premium Design Graphic Resource Center
              </h1>
              <p>
                We offer high quality design Resource such as fonts icon sets,
                web templates, background, and much much more for FREE!
              </p>
            </div>
            {/* Sign Up Email Input Box*/}

            <div className={`${Style.signUpEmailBox}`}>
              <p>Join our malling list & receive a new freebie everday!</p>
              <input
                type="email"
                placeholder="enter email"
                className={`${Style.signUpEmail}`}
              />
              <button className={`${Style.signUpBtn}`}>Sign Up</button>
            </div>
          </div>
          {/* Image Box */}
          <div className={`${Style.bannerImgBox}`}>
            <Image src={BannerImg}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
