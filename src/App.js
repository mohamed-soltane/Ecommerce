import React from 'react';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import Product from "./pages/Product";
import Deal from './Components/Deal'
import Footer from './pages/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";


function App() {
  return (
    
      <Router>
        <Deal /> 
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/kid" component={Kids} />
        <Route path="/products/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Footer />
      </Router>
      
      
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
