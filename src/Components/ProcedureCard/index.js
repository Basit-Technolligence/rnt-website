import React from "react";
import Modal from "../Modal";
import "./style.css";

const ProcedureCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="col-md-3 m-4 mt-5 procedure-card p-3" style={props.style?{boxShadow: 'none', backgroundColor:'#fff'}:{padding:'0px'}}>
        <img
          className="mt-4"
          src={require("../../Images/" + props.src + ".png")}
          style={props.height?{height:props.height}:{ width: "70%" }}
        />
        <h6 className="mt-3">
          <strong>{props.title}</strong>
        </h6>
        <p>{props.detail}</p>
        {props.style?<a href='' onClick={handleClickOpen}>show more</a>:''}
      </div>
    </>
  );
};

export default ProcedureCard;
