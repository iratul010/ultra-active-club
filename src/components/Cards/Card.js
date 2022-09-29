import React from "react";
import add from "../Utilities/Calculate/calculate";
import "./Card.css";
const Card = (props) => {
  const { data } = props;
  let time = data.time_required;

  return (
    <div className=" card col-lg-4 col-sm-6 d-flex flex-column  p-3 ">
      <div className="img">
        <img src={data.img} alt="" />
      </div>
      <div className="details d-flex flex-column justify-content-start text-start ">
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <p>
          For Age: <span className="fw-bolder">{data.for_age}</span>
        </p>
        <p>
          Time required: <span className="fw-bold second">{data.time_required}</span> s
        </p>
        <div className="text-center">
          <a type="button" onClick={() => add(parseInt(time))} className="btn btn-primary">
            Add To List
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
