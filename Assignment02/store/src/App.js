import "./App.css";
import React, { useState, useEffect } from "react";
import Products from "./Products.json";
import Categories from "./Categories.json";
import logo from "./img/t1.webp";

// render something HTML :
export const App = () => {
  console.log("Step 1: After reading file :");

  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const form = document.getElementById('checkout-form')
const inputCard = document.querySelector('#inputCard')
const alertTrigger = document.getElementById('submit-btn')
const summaryCard = document.querySelector('.card')
const summaryList = document.querySelector('.card > ul')
const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
  `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  ` <div>${message}</div>`,
  ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)
  }
  
  // more code
  // var ProductsCategory = Products;

  const render_products = (Products) => {
    return (
      <div className="category-section fixed">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Products ({ProductsCategory.length})
        </h2>

        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "300px", overflowY: "scroll" }}
        >
          {Products.map(product => (
            <div key={product.id} className="group relative shadow-lg">
              <button type="button" variant="light" onClick={() => addToCart({product})}>
        {"                  "}
        +{"              "}
      </button>
      <button type="button" onClick={() => removeFromCart(product)}>
        -
      </button>{" "}
              <div className="min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-100 lg:aspect-none">
                <img
                  alt="Product Image"
                  src={logo}
                  className="fluid"
                />
              </div>
              <div className="flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {product.title}
                      </span>
                    </a>
                    <p>Tag - {product.category}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Rating: {product.rating.rate}
                  </p>
                </div>
                <p className="text-sm font-medium text-green-600">
                  ${product.price}
                </p>
              </div>
              <div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  const listProducts = Products.map((el) => (
    
    <div key={el.id}>
      {el.title}
      {el.category}
      {el.price}
      <button type="button" onClick={() => removeFromCart(el)}>
        -
      </button>{" "}
      <button type="button" variant="light" onClick={() => addToCart(el)}>
        {" "}
        +{" "}
      </button>
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

  const cartProducts = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products;
    if (tag && tag !== "Everything") {
      filtered = Products.filter((cat) => cat.category === tag);
    }
    setProductsCategory(filtered);
    console.log("Step 5 : ", Products.length, ProductsCategory.length);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(
      "Step 6 : in handleChange, Target Value :",
      e.target.value,
      "  Query Value :",
      query
    );
    if (e.target.value === "") {
      setProductsCategory(Products);
    } else {
      const results = ProductsCategory.filter((eachProduct) => {
        return eachProduct.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setProductsCategory(results);
    }
  };

  return (
    
    <div className="flex fixed flex-row">
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      
      
      <div
        className="h-screen  bg-slate-800 p-3 xl:basis-1/5"
        style={{ minWidth: "50%" }}
      >
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white">
            {" "}
            Product Catalog App{" "}
          </h1>
          <p className="text-gray-700 text-white">
            by - <b style={{ color: "orange" }}>Tin and Tejal</b>
          </p>
          
          <div className="py-10">
            {Categories ? <p className="text-white">Tags : </p> : ""}
            {Categories.map((tag) => (
              <button
                key={tag}
                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                onClick={() => {
                  handleClick(tag);
                  
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="py-10">
            <p>Search Bar</p>
            <input type="search" value={query} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}<div>
          <div>{listProducts}</div>
          
        <div>Items in Cart :</div>
        <div>{cartProducts}</div>
        <div>Order total to pay :{cartTotal}</div>
        
      </div>
      
      {render_products(ProductsCategory)}
          
        
      </div>
    </div>
    
  );
}; //end App
