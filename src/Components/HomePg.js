import React from "react";
import './HomePg.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import NAVbar from "./NAVbar";

export default function HomePg() {
  return (
    <>
      <NAVbar/>
      <Container fluid style={{maxWidth:"100%",maxHeight:"100%",padding:"0"}}>
        <Carousel>
          <Carousel.Item interval={800} >
            <img
              className="d-block w-100"
              alt="First slide"
              src={require('./images/clg1.png')}
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require('./images/clg2.png')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require('./images/clg3.png')}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require('./images/clg4.png')}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require('./images/clg5.png')}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
