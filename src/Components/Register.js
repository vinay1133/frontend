import "./Login_Style.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import NAVbar from "./NAVbar";
import PasswordChecklist from "react-password-checklist";

export default function Login() {
  const [password,setPassword]=useState("")
  const [passwordAgain,setPasswordAgain]=useState("")

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
          maxWidth: "600px",
          marginTop: "10px",
          background: "#fff",
          padding: "15px 50px",
          borderRadius: "10px",
          fontSize:'16px'
        }}
      >
        <div class="title">
          Registration
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name <svg
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
                <Form.Control type="text" required placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name <svg
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
                <Form.Control type="text" required placeholder="Enter your last name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DOB <svg
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
                <Form.Control type="date" required placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Gender <svg
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
                  <p style={{border:"0.5px solid lightgray",padding:"5px"}}>
                        Male <input type="radio" name="gender" id="male" required /> 
                        {" "}
                        {" "}
                        Female <input type="radio" name="gender" id="female" required />
                  </p>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email <svg
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
                <Form.Control type="email" required placeholder="Enter your email" />
              </Form.Group>
              <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>Phone Number <svg
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
                <Form.Control type="tel" required placeholder="Enter your phone no." />
              </Form.Group>
              <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="col-6">
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
                  onChange={e => setPassword(e.target.value)}
                />
                <PasswordChecklist rules={["minLength","specialChar","number","capital","match"]}
                  minLength={5}
                  value={password}
                  valueAgain={passwordAgain}
                  style={{fontSize:"12px"}}
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password <svg
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
                  placeholder="ReEnter your password"
                  onChange={e=>setPasswordAgain(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              Already have an account? <Link to="/Login" style={{textDecoration:"none"}}>Login</Link>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
