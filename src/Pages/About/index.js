import React from "react";
import "./style.css";
import Header from "../../Containers/Header";
import HomeLandingScreen from "../../Components/HomeLandingScreen";
import ProcedureCard from "../../Components/ProcedureCard";

const About = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mb-5 mt-5">
          <div className="col-md-10 mx-auto">
            <HomeLandingScreen
              title="About Us"
              detail="Renewables and Technologies (Pvt) Ltd is a solar system installation and automation company. We also deal in solar pumping and solar street lights, CCTV surveillance, bio-gas plants, PLCs and microcontrollers, engineering works, import and export and general order supplies."
              src="about"
              imgClass=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid  mb-5  mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <div className="row justify-content-center">
              <ProcedureCard
                title="Mission"
                detail="We aim to become one of the leading energy companies in Pakistan by exploring the abundance of clean energy sources in our country and to educate people."
                src="mission"
              />
              <ProcedureCard
                title="Vission"
                detail="To bridge the energy gap in our country and provide our customers cost effective solutions by harnessing energy from clean sources and providing energy efficient solutions."
                src="vission"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
