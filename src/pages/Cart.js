import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../Api/products";
import { connect } from "react-redux";
import { clearCart } from "../store/Actions/action";


class Cart extends React.Component {
  placeOrder = () => {
    this.props.clearCart();
    alert("we recieved your order, we will send you an update");
  };

  render() {
    return (
      <div>
        <div className="container">
         <div className="cart-item">
          <h1>Cart</h1>
          <div className="row">
            {this.props.cartItems.map((item, index) => (
              <div className={"col-6 col-md-3"} key={item.product.id}>
                <CartItem item={item} index={index} />
              </div>
            ))}
          </div>
          <h3>Total: ${this.props.total}</h3>
          <button onClick={this.placeOrder} class="btn btn-block order-btn">
            Place Order
          </button>
        </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    )
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
