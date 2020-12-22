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
            <Card.Img
              variant="top"
              src="../assets/img/imgs/vedant.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Vedant Kunte</Card.Title>
            <Card.Text>
              Give a man a fish and you feed him for a day. Teach him how to
              fish and you feed him for a lifetime.
            </Card.Text>
            <a href="https://www.instagram.com/shibuibeats_/" target="_blank">
              <Button variant="primary">@shibuibeats_</Button>
            </a>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/parab.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Aryan Parab</Card.Title>
            <Card.Text>
              In the end we only regret the chances we dont take.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/sam.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Samuel Daniell</Card.Title>
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
            <Card.Title>Piyush Chaudhary</Card.Title>
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
