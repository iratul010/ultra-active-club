import React from "react";
import "./Info.css";
import self from "../../Selfimg/profile.jpg";

const Info = () => {
  //  function break(){

  //  }
  return (
    <div style={{ height: "80%" }} className="bg-white container col-3 d-flex flex-column align-items-center p-4 ">
      <div className="info d-flex ">
        <div style={{ width: "100px", height: "80px", marginRight: "10px" }}>
          <img style={{ width: "100%", height: "80px", borderRadius: "10px" }} src={self} alt="" />
        </div>
        <div className="addrs">
          <h2>Ratul Islam</h2>
          <p>
            <span className="mx-3">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            Dhaka,Mirpur share 11
          </p>
        </div>
      </div>
      <div className="about d-lg-flex bg-light my-5 border p-3">
        <div className="weight ">
          <div className="kg">
            <span className="fw-bolder">6.8</span>
            <span>kg</span>
          </div>

          <div>Wight</div>
        </div>
        <div className="height col mx-5">
          <span className="fw-bolder">5.5</span>
          <br />
          <span>Height</span>
        </div>
        <div className="age col mx-5">
          <div className="">
            <span className="fw-bolder">26</span>
            <span>years</span>
          </div>
          <div>
            <p>Age</p>
          </div>
        </div>
      </div>
      <div className="break  bg-light my-5 border p-4">
        <div className="text-start my-2">
          {" "}
          <h3>Add A Break</h3>
        </div>
        <div className="d-lg-flex">
          <div className="weight col mx-1">
            <div className="">
              <div>
                <div className="circle rounded-circle  ">
                  <span>10</span>s
                </div>
              </div>
            </div>
          </div>
          <div className="height col mx-1">
            <div className="">
              <div className="circle rounded-circle  ">
                <span>20</span>s
              </div>
            </div>
          </div>
          <div className="age col mx-1">
            <div className="">
              <div className="circle rounded-circle  ">
                <span>30</span>s
              </div>
            </div>
          </div>
          <div className="height col mx-1">
            <div className="">
              <div className="circle rounded-circle  ">
                <span>40</span>s
              </div>
            </div>
          </div>
          <div className="age col mx-1">
            <div className="">
              <div className="circle rounded-circle  ">
                <span>50</span>s
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="exercise container d-lg-flex flex-column bg-white ">
        <div className="d-lg-flex  align-items-center bg-light p-4 mb-4 ">
          <h4 className="mx-5">Exercise Time</h4>{" "}
          <span>
            {" "}
            <span className="times">{0}</span> Seconds
          </span>
        </div>
        <div className="d-lg-flex align-items-center bg-light p-4">
          <h4 className="mx-5 ">Break Times</h4>
          <span>15 seconds</span>
        </div>
      </div>
      <div className="m-4">
        {" "}
        <a href="#" className="btn btn-primary">
          Activity Completed
        </a>
      </div>
    </div>
  );
};

export default Info;
