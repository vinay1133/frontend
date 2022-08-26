import React from "react";
import "./HomePg.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import NAVbar from "./NAVbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function HomePg() {
  return (
    <>
      <NAVbar />

      <Container style={{ display: "grid" }}>
        <Row>
          {/* <Col style={{width: "10rem",
          background: "wheat",
          margin:"10px",
          padding: "10px",
          borderRadius: "10px"}}>

          </Col> */}
          <Col>
            <div style={{ textAlign: "center" }}>
              <img src={require("./images/ugc_logo.png")} alt="ugc_logo" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          display: "grid",
          maxWidth: "100%",
          maxHeight: "100%",
          padding: "0",
        }}
      >
        <Carousel>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              alt="First slide"
              src={require("./images/clg1.png")}
            />
            <Carousel.Caption>
              <p>
                <a
                  href="https://www.bits-pilani.ac.in/Pilani/"
                  target="_blank"
                  style={{ color: "orange", fontSize: "1.3rem" }}
                >
                  Birla Institute of Technological Science, Pilani
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require("./images/clg2.png")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>
                <a
                  href="https://www.iitb.ac.in/"
                  target="_blank"
                  style={{ color: "orange", fontSize: "1.3rem" }}
                >
                  Indian Institute of Technology Bombay
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require("./images/clg3.png")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                <a
                  href="https://vit.ac.in/"
                  target="_blank"
                  style={{ color: "white", fontSize: "1.3rem" }}
                >
                  Vellore Institute of Technology
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require("./images/clg4.png")}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <p>
                <a
                  href="https://www.annauniv.edu/nwsnew/"
                  target="_blank"
                  style={{ color: "white", fontSize: "1.3rem" }}
                >
                  Anna University
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={require("./images/clg5.png")}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <p>
                <a
                  href="https://home.iitd.ac.in/"
                  target="_blank"
                  style={{ color: "white", fontSize: "1.3rem" }}
                >
                  Indian Institute of Technology, Delhi
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <Button
            style={{
              width: "25rem",
              height: "3rem",
              backgroundColor: "Green",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            <Link
              to={"/displaytable"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>{" "}
              Which college are you looking for?
            </Link>{" "}
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
