import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Helmet } from "react-helmet-async";

function Wishlist() {
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  return (
    <>
    <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {wishlist.length ? (
        <div className="wishlistContainer">
          <div className="wishlist">
            <div className="cards">
              {wishlist.map((x) => (
                <>
                  <div className="card">
                    <div className="image">
                      <div className="bck">
                        <NavLink>
                          <i
                            class="fa-solid fa-heart"
                            onClick={() => addRemoveWishlist(x)}
                          ></i>
                        </NavLink>
                      </div>
                      <div className="bckDetail">
                        <NavLink to={"/home/" + x._id}>
                          <i class="fa-regular fa-eye"></i>
                        </NavLink>
                      </div>
                      <img src={x.image} alt="" />
                      <div className="addToCard" onClick={() => addBasket(x)}>
                        <h4>
                          <NavLink>Add to Card</NavLink>
                        </h4>
                      </div>
                    </div>
                    <div className="text">
                      <h3>{x.name}</h3>
                      <p>${x.price}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="heart">
          <i class="fa-regular fa-heart fa-beat-fade"></i>
        </div>
      )}
    </>
  );
}

export default Wishlist;
