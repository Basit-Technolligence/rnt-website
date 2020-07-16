import React from "react";
import "./style.css";
import HomeLandingScreen from "../../Components/HomeLandingScreen";
import Navbar from "../../Components/Navbar";
import ServiceCard from "../../Components/ServiceCard";
import ProcedureCard from "../../Components/ProcedureCard";
import UserHelp from "../../Components/UserHelp";

const Home = () => {
  const procedureCardTitle = [
    "Book an appointment",
    "Arrange a visit",
    "Assessment",
    "Results",
    "Time to go green!",
  ];
  const procedureCardDetail = [
    "Book an appointment with the top-rated consultant",
    "One of our staff members will visit your premises to understand your requirements",
    "Our staff will run a feasibility analysis on the site as per the requirement you set",
    "After the process, they will communicate the best possible solution",
    "The team will start implementing the changes on the site and install new infrastructure",
  ];
  const procedureCardImg = [
    "appointment",
    "visit",
    "assessment",
    "results",
    "time-to-green",
  ];
  let i = -1;
  return (
    <>
      <div className="container-fluid landing-container">
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10 mx-auto">
            <HomeLandingScreen />
          </div>
        </div>
      </div>
      <div className="container-fluid service-container pb-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mt-5">
            <h1 className="mb-4">Our Services</h1>
            <h5>
              Few energy solution providers can match the industry experience,
              legal skill, technical breadth and business knowledge of
              Renewables & Technologies.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto text-center mt-5">
            <div className="row">
              <ServiceCard
                title="Home Automation"
                detail="The present & future of all home
appliances"
                src="home-automation"
                size="80%"
              />
              <ServiceCard
                title="Solar Solutions"
                detail="For a greener, brighter tomorrow"
                src="solar-solution"
                size="90%"
                margin="27px"
              />
              <ServiceCard
                title="Security Systems"
                detail="Provide safety & security for your
                family"
                src="security-system"
                size="70%"
                margin="10px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  mb-5  mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h1>How it works?</h1>
            <div className="row justify-content-center">
              {procedureCardTitle.map((cardTitle) => {
                i++;
                return (
                  <ProcedureCard
                    title={cardTitle}
                    detail={procedureCardDetail[i]}
                    src={procedureCardImg[i]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <UserHelp />
    </>
  );
};

export default Home;
