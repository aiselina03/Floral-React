import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Cards() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const [input, setInput] = useState("")
  const [sort, setSort] = useState(null)

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  function deleteById(id) {
    fetch("http://localhost:8080/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function search(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="backImage">
        <div className="header">
          <p>Devoted to wonderful beauty</p>
          <h1>Flowers Pricing</h1>
        </div>
        <div className="input">
          <input type="text" value={input} onChange={search} placeholder="Search..." /> 
        </div>
        <div className="filter">
          <button onClick={()=>setSort({property: "name", asc: true})}>A-Z <i className="fa-solid fa-arrow-up-a-z"></i></button> 
          <button onClick={()=>setSort({property: "name", asc: false})}>Z-A <i className="fa-solid fa-arrow-down-z-a"></i></button>
          <button onClick={()=>setSort(null)}>Default</button>
          <button onClick={()=>setSort({property: "price", asc: true})}>Price <i className="fa-solid fa-arrow-up-9-1"></i></button> 
          <button onClick={()=>setSort({property: "price", asc: false})}>Price <i className="fa-solid fa-arrow-down-9-1"></i></button>
        </div>
        <div className="cardsContainer">
          <div className="cards">
            {products
              .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
              .sort((a,b) => {
                if (sort && sort.asc===true ) {
                  return (a[sort.property] )> b[sort.property] ? 1 : ((b[sort.property] )> (a[sort.property])) ? -1 : 0
                }
                else if (sort && sort.asc===false) {
                  return (a[sort.property] )< b[sort.property] ? 1 : ((b[sort.property] )< (a[sort.property])) ? -1 : 0
                }
              })
              .map((x) => (
                <>
                  <div className="card">
                    <div className="image">
                      <div className="bck">
                        <NavLink>
                          <i
                            className={`${
                              checkIsWishlist(x)
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                            }`}
                            onClick={() => addRemoveWishlist(x)}
                          ></i>
                        </NavLink>
                      </div>
                      <div className="bckDelete">
                        <NavLink>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteById(x._id)}
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
    </>
  );
}

export default Cards;
