import React, { useState, useEffect } from "react";
import items from "./Products.json";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const listItems = items.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={100} />
      {el.title}
      {el.category}
      {el.price}
    </div>
  ));

  const addToCart = (el) => {
    setCart([...cart, el]);
    };
    
    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        };
        
  return <div> {listItems} </div>;
};
export default Shop;