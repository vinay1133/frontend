// import "./Login_Style.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import NAVbar from "../NAVbar";
import MenuButton from "./MenuButton";

export default function UploadFileHEI() {
  return (
    <>
      <NAVbar />
      <div style={{ padding: "1rem", marginLeft: "2rem" }}>
        <MenuButton />
      </div>
      <Container
        fluid
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          maxWidth: "700px",
          marginTop: "10px",
          background: "#fff",
          padding: "15px 50px",
          borderRadius: "10px",
          fontSize: "16px",
        }}
      >
        <div class="title">Upload Documents</div>
        <Form method="post">
          <Row>
            <Col>
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
                  required
                  placeholder="Enter your college name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>
                  University Name{" "}
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
                  placeholder="Enter your University name"
                  list="orgname"
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
                  <option value="Mahatma Phule Krishi Vidyapeeth" />
                  <option value="Rani Channamma University" />
                  <option value="Vijayanagara Sri Krishnadevaraya University" />
                  <option value="Karnataka Samskrit University" />
                  <option value="KSGH Music and Performing Arts University" />
                  <option value="Rajiv Gandhi University of Health Science" />
                  <option value="Gujarat University of Transplantation Sciences" />
                  <option value="Institute of Infrastructure Technology Research and Management" />
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
                  College Consent Letter{" "}
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
                <Form.Control type="file" action="api/uploadFile" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>
                  University Affiliation Letter{" "}
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
                <Form.Control type="file" action="api/uploadFile" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-2" controlId="formBasicEmail">
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
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit">
                Upload Documents
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
