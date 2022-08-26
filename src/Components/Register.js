import "./register_style.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import NAVbar from "./NAVbar";
import PasswordChecklist from "react-password-checklist";

export default function Register() {
  // const [password, setPassword] = useState("");
  // const [passwordAgain, setPasswordAgain] = useState("");

  function matchPassword() {
    var pw1 = document.getElementById("psw1");
    var pw2 = document.getElementById("psw2");
    if (pw1 != pw2) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
  }

  return (
    <>
      <NAVbar />
      <Container
        fluid
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          maxWidth: "600px",
          marginTop: "40px",
          background: "#fff",
          padding: "15px 50px",
          borderRadius: "10px",
          fontSize: "16px",
          // principal, college dropbox, email, password, mobile no.
        }}
      >
        <div class="title">Registration</div>
        <Form>
          <Row>
            <Col className="col-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Principal's Name:{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter your first name"
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  College Name{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="text"
                  list="orgname"
                  required
                  placeholder="Enter college name"
                />
                <datalist id="orgname">
                  <option value="Acharaya N.G.Ranga Agricultural University" />
                  <option value="Acharya Nagarjuna University" />
                  <option value="Adikavi Nannaya University" />
                  <option value="Kanyashree University" />
                  <option value="Hindi University" />
                  <option value="Alipurduar University" />
                  <option value="Harichand Guruchand University" />
                  <option value="National Academy of Legal Studies & Research University" />
                  <option value="Jawaharlal Nehru Technological University" />
                  <option value="Marathwada Agricultural University" />
                  <option value="Mumbai University" />
                  <option value="Mahatma Phule Krishi Vidyapeeth"/>
                  <option value="Rani Channamma University" />
                  <option value="Vijayanagara Sri Krishnadevaraya University" />
                  <option value="Karnataka Samskrit University" />
                  <option value="KSGH Music and Performing Arts University" />
                  <option value="Rajiv Gandhi University of Health Science" />
                  <option value="Gujarat University of Transplantation Sciences" />
                  <option value="Institute of Infrastructure Technology Research and Management"/>
                  <option value="Navsari Agriculture University" />
                  <option value="Bhakta Kavi Narsinh Mehta University" />
                  <option value="Shri Govind Guru University" />
                  <option value="Sardar Krushinagar Dantiwada Agricultural University" />
                </datalist>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
              {/* <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button> */}
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>
                  Phone Number{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="tel"
                  required
                  placeholder="Enter your phone no."
                />
              </Form.Group>
              {/* <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button> */}
            </Col>
          </Row>

          <Row>
            <Col className="col-6">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                {/* <Form.Control
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordChecklist
                  rules={[
                    "minLength",
                    "specialChar",
                    "number",
                    "capital",
                    "match",
                  ]}
                  minLength={5}
                  value={password}
                  valueAgain={passwordAgain}
                  style={{ fontSize: "12px" }}
                /> */}
                <Form.Control
                  type="password"
                  id="psw1"
                  name="psw"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Confirm Password{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    class="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                {/* <Form.Control
                  type="password"
                  required
                  placeholder="ReEnter your password"
                  onChange={(e) => setPasswordAgain(e.target.value)}
                /> */}
                <Form.Control
                  type="password"
                  id="psw2"
                  name="psw"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="ReEnter your password"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-2" style={{ textAlign: "center" }}>
            <Col>
              Already have an account?{" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit" onClick={matchPassword}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
