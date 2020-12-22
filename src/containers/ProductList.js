import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";
import {
  Container,
  Dimmer,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./products.css";
class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {

    const { data, error, loading } = this.state;
    return (

        // {error && (
        //   <Message
        //     error
        //     header="There was some errors with your submission"
        //     content={JSON.stringify(error)}
        //   />
        // )}
        // {loading && (
        //   <Segment>
        //     <Dimmer active inverted>
        //       <Loader inverted>Loading</Loader>
        //     </Dimmer>
        //
        //     <Image src="/images/wireframe/short-paragraph.png" />
        //   </Segment>
        // )}
        <>
        <div className="parallax-content projects-content" id="portfolio">
        <h1 className="head">Our Instagram</h1>
        <div className="row">
          <img src="../assets/img/bleed.jpg" className="img" />
          <img src="../assets/img/jin.png" className="img" />
          <img src="../assets/img/golden.jpg" className="img" />
        </div>
        <div className="row">
          <img src="../assets/img/wander.png" className="img" />
          <img src="../assets/img/1st-item.jpg" className="img" />
          <img src="../assets/img/1st-item.jpg" className="img" />
        </div>
      </div>
      </>

        // <div className="parallax-content projects-content" id="portfolio">
        //   <h1 className="head">Our Instagram</h1>
        //   <div className = "row">
        //  {data.map(item => {
        //     return (
        //       <img src = {item.image} className="img" />
        //
        //         <Card style={{ backgroundColor: "yellow" }}>
        //           <Card.Img variant="top" src={item.image} />
        //           <Card.Body>
        //             <Card.Title>{item.price}</Card.Title>
        //             <Card.Text>{item.title}</Card.Text>
        //             <Button variant="primary"   onClick={() => this.handleAddToCart(item.slug)}>
        //               Buy Now
        //             </Button>
        //           </Card.Body>
        //         </Card>
        //
        //       );
        //     })}
//   </div>
// </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
