import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function InstrumentForm({ instrument }) {
  const nav = useNavigate();
  const [instrumentData, setInstrumentData] = useState(instrument);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInstrumentData({ ...instrumentData, [name]: value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const data = {
      id: instrumentData.id,
      type: instrumentData.type,
      description: instrumentData.description,
      Price: instrumentData.Price,
      img: instrumentData.img,
    };
    fetch(`http://localhost:3005/instruments/${instrumentData.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Updated successfully");
        nav("/");
        Swal.fire({
          icon: "success",
          title: `Ready for Sale`,
          showConfirmButton: false,
          timer: 5000,
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif")
            left top
            no-repeat
          `
          
        });

      })
      .catch((err) => {
        console.error("Error updating instrument:", err);
        alert("Error updating instrument");
      });
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h3>Instrument Form</h3>

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={instrumentData.id}
                onChange={handleInputChange}
                className="form-control"
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={instrumentData.type}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="img" className="form-label">
                Image
              </label>
              <input
                type="text"
                id="img"
                name="img"
                value={instrumentData.img}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={instrumentData.description}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="Price"
                value={instrumentData.Price}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default InstrumentForm;