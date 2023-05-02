import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "product":
        return <ProductPage handleAddToCart={handleAddToCart} />;
      case "about":
        return <AboutUsPage />;
      case "team":
        return <TeamPage />;
      case "cart":
        return (
          <CartPage
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <Router>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">NAME OF THE COMPANY</h1>
        <p class="lead fw-normal">A company by XYZ.</p>
        
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage handleAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
    </Router>
    
  );
}

function HomePage() {
  return (
    <div>
     <h2 class="display-5">Aim of the product</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Aim of the product</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */}
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
        {/* cannot add a image, to be fixed */}
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Product description and purpose of creating the product will be mentioned here.</h2>
        <p class="lead">Detailed explanation.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
  </div>
    </div>
  );
}

function ProductPage({ handleAddToCart }) {
  const products = [
    { id: 1, name: "Product ", price: 10 },
    
  ];

  return (
    <div>
      <div>
     <h2 class="display-5">Aim of the product</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Product image will come here</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */}
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Product description</h2>
        <p class="lead">Maybe mention how the product was created too.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Instructions on how to use the product</h2>
        <p class="lead">Details.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
  </div>
    </div>
      {/* <h1>Product Page</h1> */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutUsPage() {
  return (
    <div>
      <div>
     <h2 class="display-5">Inspiration</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Inspiration for creation of product</h2>
         
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    
  </div>
    </div>
    <div>
     <h2 class="display-5">Challenges</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Challenges in detail.</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */}
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    
  </div>
    </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div>
       <div>
     <h2 class="display-5">Team member 1</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Image of team member</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */}
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Team member description: name, age.</h2>
        <p class="lead"> role in making product</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
    
  </div>
    </div>
    <div>
     <h2 class="display-5">Team member 2</h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Image of team member</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */}
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Team member description: name, age.</h2>
        <p class="lead"> role in making product</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
    
  </div>
    </div>
    </div>
  );
}

function CartPage({ cartItems, handleRemoveFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
// checkout form is still to be implemented.
  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default App;