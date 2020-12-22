import React, { components } from "react";
import { useState, useEffect } from "react";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import {
  CardD,
  Container,
  Dimmer,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";
import { productListURL , addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

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
  render(){
    const [show, setShow] = useState(false);
    const { data, error, loading } = this.state;
    return (
      <>
    {error && (
      <Message
        error
        header="There was some errors with your submission"
        content={JSON.stringify(error)}
      />
    )}
    {loading && (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>

        <Image src="/images/wireframe/short-paragraph.png" />
      </Segment>
    )}
      <div className="parallax-content projects-content" id="portfolio">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Hey!</strong>
          </Toast.Header>
          <Toast.Body>Store will be opening soon.</Toast.Body>
        </Toast>
      {data.map(item => {
          return (
        <CardDeck style={{ marginLeft: "5rem", marginRight: "15rem" }}>
          <Card style={{ backgroundColor: "yellow" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.price}</Card.Title>
              <Card.Text>{item.title}</Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        );
    })}
  );
}
}

    </>

export default Products;
