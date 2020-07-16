import React from "react";
import "./style.css";

const ProcedureCard = (props) => {
  return (
    <>
      <div className="col-md-3 m-4 mt-5 procedure-card p-3">
        <img
          className="mt-4"
          src={require("../../Images/" + props.src + ".png")}
          style={{ width: "70%" }}
        />
        <h6 className="mt-3">
          <strong>{props.title}</strong>
        </h6>
        <p>{props.detail}</p>
      </div>
    </>
  );
};

export default ProcedureCard;
