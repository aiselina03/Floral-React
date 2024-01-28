import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Detail() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:8080/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
    <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="img">
          <img src={products.image} alt="" />
        </div>
        <div className="text">
          <h3>{products.name}</h3>
          <p>${products.price}</p>
        </div>
      </div>
    </>
  );
}

export default Detail;
