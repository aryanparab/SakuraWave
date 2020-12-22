import React, { components } from "react";
import { HashLink } from 'react-router-hash-link';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import "./home.css"
class CustomLayout extends React.Component {
  // componentDidMount() {
  //   this.props.fetchCart();
  // }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
    <>
      <div className="fixed-side-navbar">
        <ul className="nav flex-column">
          <li className="item">
            <HashLink className="nav-link" to="#home">
              <span>Home</span>
            </HashLink>
          </li>
          <li className="item">
            <HashLink className="nav-link" to="#services">
              <span>Services</span>
            </HashLink>
          </li>
          <li className="item">
            <HashLink className="nav-link" to="#portfolio">
              <span>Products</span>
            </HashLink>
          </li>
          <li className="item">
            <HashLink className="nav-link" to="#contact-us">
              <span>Contact Us</span>
            </HashLink>
          </li>

        </ul>
      </div>

    </>
  );
}
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);

// <li className="item">
// {authenticated ? (
//   <React.Fragment>
//
//       <Link className="nav-link" to="/profile">
//         <span>Profile</span>
//   </Link>
//       <Dropdown
//         icon="cart"
//         loading={loading}
//         text={`${cart !== null ? cart.order_items.length : 0}`}
//         pointing
//         className="item"
//       >
//         <Dropdown.Menu>
//           {cart !== null ? (
//             <React.Fragment>
//               {cart.order_items.map(order_item => {
//                 return (
//                   <Dropdown.Item className="nav-link" key={order_item.id}>
//                     {order_item.quantity} x {order_item.item.title}
//                   </Dropdown.Item>
//                 );
//               })}
//               {cart.order_items.length < 1 ? (
//                 <Dropdown.Item>No items in your cart</Dropdown.Item>
//               ) : null}
//               <Dropdown.Divider></Dropdown.Divider>
//
//               <Dropdown.Item
//                 icon="arrow right"
//                 text="Checkout"
//
//                 onClick={() =>
//                   this.props.history.push("/order-summary")
//                 }
//               />
//             </React.Fragment>
//           ) : (
//             <Dropdown.Item>No items in your cart</Dropdown.Item>
//           )}
//         </Dropdown.Menu>
//       </Dropdown>
//
//       <Link className="nav-link"  header onClick={() => this.props.logout()}>
//       <span>  Logout
//       </span>
//       </Link>
//   </React.Fragment>
// ) : (
//     <>
//     <Link className="nav-link" to="/login">
//       <span>Login</span>
//     </Link>
//
//     <Link className="nav-link" to="/signup">
//       <span>Signup</span>
//     </Link>
//     </>
//
// )}
// </li>
