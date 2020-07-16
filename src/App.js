import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Pages/Home";
import Footer from "./Components/Footer";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default App;
