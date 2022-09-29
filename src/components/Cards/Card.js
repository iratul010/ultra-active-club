import React from "react";
import "./Card.css";
const Card = (props) => {
  const { data } = props;
  console.log(data.img);
  return (
    <div className=" card col-lg-4 col-sm-6 d-flex flex-column  p-3 ">
      <div className="img">
        <img src={data.img} alt="" />
      </div>
      <div className="details d-flex flex-column justify-content-start">
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <p>For Age: {data.for_age}</p>
        <p>Time required: {data.time_required}s</p>
        <div>
          <a type="button" className="btn btn-primary btn-lg">
            Large button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
