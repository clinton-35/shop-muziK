import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InstrumentForm from "./InstrumentForm";

export default function SingleBlog() {
  const [singleInstrument, setSingleInstrument] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3005/instruments/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleInstrument(res);
        setIsLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    console.log(`Deleting instrument with ID: ${id}`);
    fetch(`http://localhost:3005/instruments/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("deleted successfully");
        nav("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `instrument ${id} deleted successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error deleting instrument:", error);
        alert("Error deleting instrument");
      });
  };

  return (
    <div className="singleInstrument container">
      <h1>{singleInstrument?.type}</h1>
      <div className="row">
        <div className="col-6 card bg-light me-2">
          <img
            src={singleInstrument?.img}
            className="img-fluid "
            alt="loading..."
          />
          <h5>{singleInstrument?.type}</h5>
          <p>{singleInstrument?.description}</p>
          <p>{singleInstrument?.Price}</p>
        </div>
        <div className="col-4 p-3 card bg-light">
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
          <br />

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <InstrumentForm instrument={singleInstrument} />
          )}
        </div>
      </div>
    </div>
  );
}
