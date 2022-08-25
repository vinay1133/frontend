import React from "react";
import "./Login_Style.css";
import Container from "react-bootstrap/Container";
import NAVbar from "./NAVbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Videobg from './Videobg';

export default function Login() {
  return (
    <>
      <NAVbar/>
      <Container
        fluid
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          maxWidth: "400px",
          marginTop: "40px",
          background: "#fff",
          padding: "25px 50px",
          borderRadius: "10px",
        }}
      >
        <div class="title">Login</div>
        <Form style={{ fontSize: "large" }}>
          <Row>
            <Col className="col-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{marginBottom:"6px"}}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control type="email" required placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{marginBottom:"6px"}}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg></Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter your password"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row
            className="col-12 mb-3"
            style={{ textAlign: "center", fontSize: "small" }}
          >
            <Col>
              Forgot Password?{" "}
              <Link to="/ForgotPass" style={{ textDecoration: "none" }}>
                Click here
              </Link>
            </Col>
          </Row>

          {/* <Row>
            <Col className="col-12">
              <Form.Group className="mb-3">
                <Form.Label>Security Code</Form.Label>
                <Form.Control type="number" placeholder="Enter 6-digit code" />
              </Form.Group>
            </Col>
          </Row> */}

          <Row
            className="col-12 mb-3"
            style={{ textAlign: "center", fontSize: "small" }}
          >
            <Col>
              New User?{" "}
              <Link to="/Register" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
