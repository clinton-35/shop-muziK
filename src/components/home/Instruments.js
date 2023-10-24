import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Instrument() {
  const [instrument, setInstrument] = useState([]);

  useEffect(() => {
    fetch("https://shopmuziq-81pd.onrender.com/instruments", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInstrument(res);
      });
  }, []);

  return (
    <div className="instrument-collection">
      <div className="text-center">
        <h2 className="fw-bold">INSTRUMENTS</h2>
        <h3>Have you seen our latest products???!</h3>
      </div>

      <div className="container mt-5">
        <div className="row">
          {instrument.length > 0 ? (
            instrument.map((data) => (
              <div className="  col-md-6 col-lg-4" key={data.id}>
                <div className="the-card border bg-light overflow-hidden">
                  <div className="card mb-4">
                    <img
                      src={data.img}
                      className="card-img-top img-fluid rounded"
                      alt=""
                    />
                  </div>
                  <Link
                    to={`instruments/${data.id}`}
                    className="btn btn-secondary w-100"
                  >
                    {data.type}
                    <br />
                    {data.description}
                    <br />
                    Ksh {data.Price}/-
                    <br />
                    Buy Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>You dont have data at the moment</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Instrument;
