import React, { useContext, useState } from "react";
import { BasketContext } from "../../context/basketContext";
import "./style.scss";
import { Helmet } from "react-helmet-async";

function Basket() {
  const { basket, removeItem, increaseCount, decreaseCount , getTotal} =
    useContext(BasketContext);

  return (
    <>
    <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {basket.length ? (
        <div className="basket">
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
            {basket.map((x) => (
              <>
                <tr>
                  <td>
                    <img src={x.image} alt="" />
                  </td>
                  <td>{x.name}</td>
                  <td>${x.price}</td>
                  <td>
                    <div className="count">
                      <div className="chevron">
                        <i
                          class="fa-solid fa-chevron-up"
                          onClick={() => increaseCount(x)}
                        ></i>
                        <i
                          class="fa-solid fa-chevron-down"
                          onClick={() => decreaseCount(x)}
                        ></i>
                      </div>
                      <p>{x.count}</p>
                    </div>
                  </td>
                  <td>${x.count * x.price}</td>
                  <td>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => removeItem(x)}
                    ></i>
                  </td>
                </tr>
              </>
            ))}
          </table>
          <div className="total">
            <h4>4{getTotal()}</h4>
          </div>
          
        </div>
      ) : (
        <div className="bounce">
          <i class="fa-solid fa-cart-shopping fa-bounce"></i>
        </div>
      )}
    </>
  );
}

export default Basket;
