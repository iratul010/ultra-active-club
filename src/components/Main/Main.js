import React, { useEffect, useState } from "react";
import logo from "../../Image/logo.svg";
import Card from "../Cards/Card";
import Info from "../Info/Info";
import "./Main.css";

const Main = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section>
      <div
        style={{ padding: "30px", margin: "0 auto" }}
        className=" d-flex bg-light flex-column flex-lg-row  p-5
 "
      >
        <div className=" col-8 m-3">
          <div className="mb-5 container-sm d-flex  align-items-center">
            <div className="w-2">
              <img style={{ width: "100px" }} src={logo} alt="logo" />
            </div>{" "}
            <div>
              {" "}
              <h1 className="text-warning">Try-On-Club</h1>
            </div>
          </div>
          <div className="d-flex ">
            <div className="items bg-white">
              <div className="title text-start p-4 bg-light">
                <h2>Select today's exercise</h2>
              </div>
              <div className="container ">
                <div className="row  p-4 g-3">
                  {items.map((data) => (
                    <Card data={data} key={data.id}></Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Info></Info>
      </div>
    </section>
  );
};

export default Main;
