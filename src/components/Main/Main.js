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

  let [totalTimes, setTotalTimes] = useState(0);
  function add(data) {
    totalTimes += parseInt(data);
    setTotalTimes(totalTimes);
  }

  return (
    <section>
      <div
        style={{ margin: "0 auto" }}
        className="container-fluid d-flex bg-light flex-column flex-lg-row  p-5
 "
      >
        <div className=" col-8 m-3">
          <div className="mb-5   container-sm d-flex flex-column flex-lg-row  align-items-center">
            <div className=" ">
              <img style={{ width: "100px" }} src={logo} alt="logo" />
            </div>{" "}
            <div className="">
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
                <div className="row   p-4 g-3">
                  {items.map((data) => (
                    <Card data={data} add={add} key={data.id}></Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Info totalTime={totalTimes}></Info>
      </div>
      <div className="container container-lg p-5 ">
        {/*  */}
        <div className="accordion accordion-flush bg-light container" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How does react works?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly
                to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many
                components as necessary without cluttering your code.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Difference between props and state!
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Simply put, State is the local state of the component which cannot be accessed and modified outside of the
                component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by
                giving components the ability to receive data from their parent component in the form of props.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                More Benefits of useEffect!
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Using useEffect is probably the best part of React Hooks. It helps reduce the clutter of the component lifecycle
                methods and, most importantly, it helps separate different logic that can appear in the lifecycle methods. The
                useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching
                data, directly updating the DOM, and timers. useEffect accepts two arguments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
