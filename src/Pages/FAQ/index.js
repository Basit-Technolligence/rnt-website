import React from "react";
import "./style.css";
import Header from "../../Containers/Header";

const FAQ = () => {
  let questions = [
    "How does solar technology work?",
    "How does solar system work?",
    "What is the best thing about having solar?",
    "What is the difference between the monocrystalline and polycrystalline cells that are used in solar panels?",
  ];
  let answer = [
    "(Photo meaning 'light' and voltaic meaning 'electricity'), Photovoltaic or PV modules, commonly known as solar panels convert sunlight directly into electricity. Photo voltaic cells are made of special materials called semiconductors such as silicon, which is currently used most commonly. When light strikes the cell, a certain portion of it is absorbed within the semiconductor material. This means that the energy of the absorbed light is transferred to the semiconductor. The energy knocks electrons loose, allowing them to flow freely. PV cells have one or more electric field that acts to force electrons freed by light absorption, to flow in a certain direction. This flow of electrons is a current, and by placing metal contacts on the top and bottom of the PV cell, we can draw that current off for external use, say, to power a calculator. This current, together with the cell's voltage (which is a result of its built-in electric field or fields), defines the power (or wattage) that the solar cell can produce.",
    "Solar technology consists of three parts; generation (solar/PV panels), conversion from DC to AC (inverter) and storage (batteries). Generation: Solar panels or Photovoltaic panels (technically called PV modules) produce electricity by converting Sunlight into electrical energy. A single module consists of multiple solar cells, which are usually made up of Silicon mixed with impurities. When Sunlight falls on the module, DC (Direct Current) electrical energy is produced. The amount of this energy produced depends on the climate, the angle of the module relative to the Sun, temperature and efficiency of the module. This DC electrical energy, can be used directly by appliances which run on DC, or can be converted into AC (Alternating Current) electrical energy on which most appliances run. Conversion: The DC electrical energy is converted into AC electrical energy by an inverter. Apart from the fact that most appliances run AC, AC electrical energy can be transported efficiently and cheaper than DC. DC wiring is also more costly than AC wiring. This converted AC electrical energy can either be used by appliances or fed into the utility grid. Storage: Electrical energy is stored in batteries which come in many types. Batteries are charged directly from the solar panels usually through a charge controller which monitors and controls the charging of the battery. Batteries can be used to run appliances in the evening and night or on cloudy days when solar production is low. Storage of electrical energy is optional and many people avoid it as batteries are unreliable and inefficient.",
    "The best thing about roof top solar is that you have access to free and clean energy! Of course it takes a few years to pay off your initial investment depending on the size of your system and if your system is of a considerable size and produces more than your consumption, you can earn from your rooftop solar system! How much depends on many factors such as your system size, your consumption, the cost at which your utility company buys electricity from you and how much sunshine your system receives. But solar is an amazing source of energy and if done properly, a great opportunity to invest your money.",
    "Both monocrystalline and polycrystalline solar panels serve the same function in the overall solar PV system: they capture energy from the Sun and turn it into electricity. They are both made from silicon, which is used for solar panels because it is an abundant, very durable element. Polycrystalline solar panels generally have lower efficiencies than monocrystalline ones, but their advantage is a lower price point. In addition, polycrystalline solar panels tend to have a blue hue instead of the black hue of monocrystalline panels.",
  ];
  let i = -1;
  return (
    <>
      <Header />
      <div className="container-fluid faq-container mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center mt-5">
            <h1 className="mb-4">FAQs</h1>
            <div className="text-left mt-5 mb-5">
              {questions.map((question) => {
                i++;
                return (
                  <>
                    <h5
                      className="faq-question mb-4"
                      data-toggle="collapse"
                      href={"#collapseExample" + i}
                      aria-expanded="false"
                    >
                      {question}
                    </h5>
                    <div
                      className="collapse text-justify"
                      id={"collapseExample" + i}
                    >
                      <div className="card card-body">{answer[i]}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
