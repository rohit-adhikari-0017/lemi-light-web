import React from "react";
import Style from "./Header.module.css";
import { IoMdHome } from "react-icons/io";
import Image from "next/image";
import Logo from "@/public/assets/img/logo.svg";
const Header = () => {
  return (
    <>
      <div className={`${Style.header}`}>
        <div className={`${Style.headerContainer} container`}>
          <div className={`${Style.logo}`}>
            <Image src={Logo}></Image>
          </div>
          <ul className={`${Style.headerList}`}>
            <li className={`${Style.listItem} ${Style.listItemFlex}`}>
              <div className={`${Style.homeIcon}`}>
                <IoMdHome></IoMdHome>
              </div>
              <div className={`${Style.circle}`}></div>
            </li>
            <li className={`${Style.listItem}`}>Blog</li>
            <li className={`${Style.listItem}`}>Fonts</li>
            <li className={`${Style.listItem}`}>Templates</li>
            <li className={`${Style.listItem}`}>Icons</li>
            <li className={`${Style.listItem}`}>Wordpress</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
