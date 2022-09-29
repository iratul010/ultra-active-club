import React from "react";
import self from "../../Selfimg/profile.jpg";
const Info = () => {
  return (
    <div style={{ height: "80%" }} className="bg-white container col-3 d-flex flex-column align-items-center p-4 ">
      <div className="info d-flex align-items-center">
        <div style={{ width: "100px", height: "80px", marginRight: "10px" }}>
          <img style={{ width: "100%", height: "80px", borderRadius: "10px" }} src={self} alt="" />
        </div>
        <div className="addrs">
          <h2>Ratul Islam</h2>
          <p>
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            Dhaka,Mirpur share 11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
