import React from "react";
import Instrument from "./home/Instruments";
import { Link } from "react-router-dom";
import Carousel from "./home/carousel";

function Home() {
  return (
    <div className="home">
      <div className="landing row">
        <div className="col d-flex justify-content-center align-items-center">
          <Carousel />
          {/* <img
            className="image"
            src="https://media.istockphoto.com/id/1320186474/vector/music-notes-with-curves-and-swirls.jpg?s=612x612&w=0&k=20&c=neILgetK4Eq8J3Z4e-80nR82pjVSqnUUVENH90Fmt40="
            alt="image loading..."
          /> */}
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div>
            <h2>Best Music tools Just for you.</h2>
            <p>
              Welcome to our musical instruments app! Whether you're a seasoned
              musician or a beginner, we're here to help you explore the
              wonderful world of music.{" "}
            </p>
            <Link to="contact">
              <button type="button" className="button-50">
                Where to find us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Instrument />
    </div>
  );
}

export default Home;
