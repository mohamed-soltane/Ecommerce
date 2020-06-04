import React from "react";
import ProductItem from "../Components/ProductItem";
import ProductsApi from "../Api/products";
import { Carousel } from "react-bootstrap";
import img12 from "../img/img12.jpg";

export default class Kid extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {
    ProductsApi.getAll().then(data => {
      this.setState({
        products: data
      });
    });
  }
  render() {
    return (
      <div>
        <div className="kid-product-img">
          <img src={img12} alt="Smiley face" />
          <div className="imge-caption">
            <h3>20%-70% OFF</h3>
            <p> Nulla vitae elit libero, a pharetra</p>
            <a href="/products" className="btn courasel-btn bg-white text-dark">
              More Deals
            </a>
          </div>
        </div>
        <div className="section-title text-center">
          <h2>
            <span className="dot"></span>
            Trending Products
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {this.state.products
              .filter(product => product.Gender === "Kid")
              .map(product => (
                <div className={"col-6  col-md-4 col-lg-3"} key={product.id}>
                  <ProductItem product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
