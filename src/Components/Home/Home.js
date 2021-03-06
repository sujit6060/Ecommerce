import React from "react";
import Product from "../Product/Product";

const Home = () => {
  return (
    <>
      <div>
        <div className="hero">
          <div className="card bg-dark text-white border-0">
            <img
              src="https://image.freepik.com/free-photo/beautiful-woman-black-friday-concept-with-copy-space_23-2148674185.jpg"
              className="card-img"
              alt="Background"
              height="550px"
            />
            <div className="card-img-overlay d-flex flex-column ">
              <div className="container ">
                <h5
                  className="card-title display-3 fw-bolder mb-2"
                  style={{ paddingLeft: "410px", paddingTop: "150px" }}
                >
                  NEW SEASON ARRIVAL
                </h5>
                <p className="card-text fs-3" style={{ paddingLeft: "550px" }}>
                  Check Out All The TRENDS
                </p>
              </div>
            </div>
          </div>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Home;
