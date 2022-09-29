import React from "react";
import logo from "../../Image/logo.svg";
import self from "../../Selfimg/profile.jpg";

const Main = () => {
  return (
    <section>
      <div
        className="container container-fluid d-flex bg-light flex-column flex-lg-row
 "
      >
        <div className=" col-8  m-5">
          <div className=" d-flex align-items-center">
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
              <div className="title">
                <h2>Select today’s exercise</h2>
              </div>
              <div className="cards">
                {/*  */}
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                {/*  */}
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card " style={{ width: "300px" }}>
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "80%" }} className="bg-success container col-4 d-flex flex-column align-items-center p-5">
          <div className="info d-flex align-items-center">
            <div style={{ width: "100px", height: "80px", marginRight: "10px" }}>
              <img style={{ width: "100%", height: "80px", borderRadius: "10px" }} src={self} alt="" />
            </div>
            <div className="addrs">
              <h2>Ratul Islam</h2>
              <p>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Dhaka,Mirpur share 11
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
