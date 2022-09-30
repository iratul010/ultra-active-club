import React, { useState } from "react";
import "./Info.css";
import self from "../../Selfimg/profile.jpg";
import { ToastContainer, toast } from "react-toastify";
const Info = (props) => {
  let arr = [10, 20, 30, 40, 50];
  let [v, setV] = useState(0);
  const notify = () => toast("Your Work Done!");
  function brek(value) {
    v = value;
    setV(v);
    localStorage.setItem("breaktime", value);
  }
  return (
    <div className="container container-lg container-md  col-3 d-flex flex-column align-items-center  p-4   w-p bg-white">
      <div className=" row  ">
        <div className="col-lg-4 col-6">
          <img style={{ width: "100%", height: "80px", borderRadius: "10px" }} src={self} alt="" />
        </div>
        <div className="addrs col-lg-8 col-6 col-6">
          <h2>Ratul Islam</h2>
          <p>
            <span className="mx-3">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            Dhaka,Mirpur share 11
          </p>
        </div>
      </div>
      <div className="container about row bg-light  border p-3">
        <div className="weight col col-lg-4">
          <div className="kg">
            <span className="fw-bolder">6.8</span>
            <span>kg</span>
          </div>

          <div>Wight</div>
        </div>
        <div className="height col col-lg-4 ">
          <span className="fw-bolder">5.5</span>
          <br />
          <span>Height</span>
        </div>
        <div className="age  col col-lg-4">
          <div className="">
            <span className="fw-bolder">26</span>
            <span>years</span>
          </div>
          <div>
            <p>Age</p>
          </div>
        </div>
      </div>
      <div className="container break   my-5 border p-4">
        <div className="text-start my-2">
          {" "}
          <h3>Add A Break</h3>
        </div>
        <div className="row  ">
          {arr.map((value) => (
            <div key={value.toString()} className="weight col col-lg-2 mx-1">
              <div className="">
                <div>
                  <div onClick={() => brek(value)} className="circle rounded-circle  ">
                    <span>{value}</span>s
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container exercise container d-lg-flex flex-column  ">
        <div className="row align-items-center bg-light p-4 mb-4 ">
          <h4 className=" col col-lg-8">Exercise Time</h4>
          <div className="col col-lg-4 ">
            <span>{props.totalTime}</span> Seconds
          </div>
        </div>
        <div className="row align-items-center bg-light p-4">
          <h4 className=" col col-lg-8">Break Times</h4>
          <div className="col  col-lg-4">
            <span>{localStorage.getItem("breaktime")}</span> seconds
          </div>
        </div>
      </div>
      <div className="m-4">
        <button className="btn btn-primary" onClick={notify}>
          Activity Completed!
        </button>
      </div>
    </div>
  );
};

export default Info;
