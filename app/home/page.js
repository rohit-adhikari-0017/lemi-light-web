import Banner from "@/components/banner/Banner";
import Brand from "@/components/brand/Brand";
import Header from "@/components/header/Header";
import React from "react";

function Home() {
  return (
    <>
      <div className="headerSection">
        <Header></Header>
      </div>
      <div className="bannerSection">
        <Banner></Banner>
      </div>
      <div className="brandSection">
        <Brand></Brand>
      </div>
    </>
  );
}

export default Home;
