import React from "react";
import { getById } from "../Api/products";
import { addToCart } from "../store/Actions/action";
import { connect } from "react-redux";

class Product extends React.Component {
  state = {
    loading: true,
    quantity: 0,
    product: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    getById(parseInt(id)).then(product => {
      this.setState({
        product,
        loading: false
      });
    });
  }
  handleQuantity = event => {
    const value = event.target.value;
    if (value < 0) return;
    this.setState({
      quantity: value
    });
  };

  addToCart = product => {
    this.props.addToCart(product, this.state.quantity);
  };

  render() {
    if (this.state.loading) return "Loading...";
    const product = this.state.product;
    const quantity = this.state.quantity;

    return (
      <div className="container Product-item">
        <div className={"row"}>
          <div className="col-8 col-md-6">
            <img src={product.image} width={"90%"} height={"400px"} />
          </div>
          <div className="col-6">
            <h1>{product.name}</h1>

            <p>Price: {product.price}$</p>
            <div class="product-review">
              <div class="rating text-left">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a class="rating-count" href="#">
                3 reviews
              </a>
            </div>

            <p>{product.description}</p>
            <p>
              Vendor: <b>Lereve</b>
            </p>
            <p>
              {" "}
              Availability: <b>In stock (7 items)</b>
            </p>
            <div class="product-size-wrapper">
              <h4>Size:</h4>
              <ul>
                <li>
                  <a href="#">XS</a>
                </li>
                <li className="active">
                  <a href="#">S</a>
                </li>
                <li>
                  <a href="#">M</a>
                </li>
                <li>
                  <a href="#">XL</a>
                </li>
                <li>
                  <a href="#">XXL</a>
                </li>
              </ul>
            </div>
            <br />

            <input
              type="number"
              value={quantity}
              onChange={this.handleQuantity}
            />
            <br />
            <br />

            <p>Total : ${quantity * product.price}</p>

            <button
              className="btn"
              onClick={() => this.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToCart(productsInfo, quantity))
  };
};

export default connect(null, mapDispatchToProps)(Product);
