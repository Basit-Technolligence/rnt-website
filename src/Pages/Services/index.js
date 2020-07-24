import React from "react";
import "./style.css";
import Header from "../../Containers/Header";
import ServiceContainer from "../../Containers/ServiceContainer";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
  const serviceTitle = [
    "Smart Street Lights",
    "Bio-gas Plants",
    "Solar Street Lights",
    "Solar Irrigation Pumping",
  ];
  const serviceDetail = [
    "LED based street lights with a light sensor",
    "Helps nature generate energy for you",
    "Illuminate your streets at night using sunlight",
    "Pump water from beneath the Earth's surface to fulfill your needs",
  ];
  const serviceImg = ["security-system"];
  let i = -1;
  return (
    <>
      <Header />
      <ServiceContainer>
        {serviceTitle.map((cardTitle) => {
          i++;
          return (
            <ServiceCard
              title={cardTitle}
              detail={serviceDetail[i]}
              src={serviceImg[0]}
              size="70%"
              margin="10px"
            />
          );
        })}
      </ServiceContainer>
    </>
  );
};

export default Services;
