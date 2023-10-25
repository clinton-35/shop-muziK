import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Product() {
  const nav = useNavigate();

  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");
  const [img, setImage] = useState("");
  const [type, setType] = useState("");
  const [Price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      description: description,
      img: img,
      type: type,
      Price: Price,
    };

    fetch(`http://localhost:3005/instruments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        // Update the frontend state with the new product
        setProducts([...products, newProduct]);

        console.log("Saved successfully");
        nav("/");
        Swal.fire({
          icon: "success",
          title: `Ready for Sale`,
          showConfirmButton: false,
          timer: 5000,
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif")
            left top
            no-repeat
          `,
        });
      });
  };

  return (
    <div className="product-container">
      <div className="product-form">
        <div className="row my-5">
          <div className="col">
            <h3 className="text-center text-4xl py-12">New Product</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <input
                  type="text"
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
