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
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" style={{backgroundColor:'plum'}}>
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Safety Scan</h1>
        <p class="lead fw-normal">PPE Detection Software</p>
        
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
     <h2 class="display-5"></h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Upload picture here.</h2>
        
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2>Safety Scan uses cameras paired with artificial intelligence to actively alert workers when they are missing or improperly wearing safety equipment.</h2>
        <h2> It alerts workers audibly, similarly to the seatbelt in your car. We provide a 5 second free zone that allows the worker to take off their safety equipment for readjustment or such before giving an audible alert.</h2>
        
        <p class="lead"> If the worker does not fix the safety violation within 10 seconds of the audible alert, the alarm stops, and a notification is sent to the safety manager</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Upload picture here.</h2>
        {/* <p class="lead">And an even wittier subheading.</p> */} 
        <img src="C:\coms 319\final_project\check.png" alt="check"></img> 
        {/* cannot add a image, to be fixed */}
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2>Worker privacy is of the utmost importance. That is why the safety manager is not notified right away. A violation history is available for the worker to see in the user interface.</h2>
        <h2> In the violation history, the safety manager will be unable to see the worker's face because it will be blurred to further enhance the worker's privacy. </h2>
        
        <p class="lead"> If cameras are not currently set up at the workstation, Safety Scan can set them up. These cameras take up about a half square foot of area and are applied with a removable adhesive.</p> 
        <p>The cameras can be powered through a cable if a power outlet or computer is available. </p>
        <p>There is an option to have the cameras be battery-powered, requiring a charging station to be installed nearby. </p>
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
     <h2 class="display-5"></h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Product image will come here</h2>
        
        <img src="C:\coms 319\final_project\src\pic1.jpg" alt="pic1"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2>We will use tensorflow and opencv, that are industry standard python libraries for the software aspect. Then using a small computer located at the station, we will process the image and then send it to the cloud hosted on an amazon AWS servers.</h2><h2>It then tells our hardware to alert the worker using a speaker if the worker has been more than 5 seconds without safety equipment to account for any minor adjustments. </h2>
       <h2> It will then store violations on a database that safety managers will be able to access to see where more training is required. </h2>
        <p class="lead">And please remember, the workers will remain anonymous meaning their faces will be blurred and data on the precise location of the violation will not be stored.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto"></div>
    </div>
    
   
  </div>
    </div>
    <div>
     <h2 class="display-5"></h2>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Product image will come here</h2>
        
        <img src="C:\coms 319\final_project\src\pic1.jpg" alt="pic1"></img> 
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" ></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2>In the user interface, which is in the form of a desktop or mobile app, the worker will be able to see a dashboard with safety violations visually graphed, assign safety training to employees based on violations.</h2>
       <h2> Additionally, track the violation history along with pictures of the violation, choose what safety equipment is being monitored at each station, access to a change management sheet, and a communication system between the employee and manager.</h2>
       
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
        <h2 class="display-5">The biggest challenges are training the model. This is a very labor intensive job that requires skilled labor. This leads to challenges with a limited budget and a small talent pool to choose from. Further challenges are protecting worker privacy and creating hardware that is small yet powerful enough to set up at a workbench that does not intrude on the worker.</h2>
        
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
        <h2 class="display-5">Phillip Gorni</h2>
        <p class="lead"> Creator of the product</p>
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
        <h2 class="display-5">Sarah Ng</h2>
        <p class="lead"> Creator of the product</p>
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
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit the form data
  };

// checkout form is still to be implemented.
  return (
    <div>
     
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      <button onClick={handleCheckoutClick}>Checkout</button>
      {showCheckoutForm && (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
      )}
    </div>
  );
}










export default App;