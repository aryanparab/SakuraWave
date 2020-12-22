import React, { Component } from "react";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";
import { useState } from "react";
import "./contactus.css";

export default function Contactus() {
  return (
    <div className="parallax-content contact-content" id="contact-us">
      <CardDeck style={{ margin: "6rem" }}>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img variant="top" src="../assets/img/imgs/vedant.jpg" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
