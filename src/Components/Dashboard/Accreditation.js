import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import NAVbar from "../NAVbar";
import MenuButton from "./MenuButton";

export default function Accreditation() {
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
          maxWidth: "900px",
          marginTop: "10px",
          background: "#fff",
          padding: "25px 50px",
          borderRadius: "10px",
        }}
      >
        <div class="title">Institute Details</div>
        <Form action="#" style={{ fontSize: "medium" }}>
          <Row>
            <Col>
              <h5 style={{ color: "orangered", padding: "20px" }}>
                Institute Details
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="col-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Official Contact Number{" "}
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
                  placeholder="Enter organization name"
                />
                <datalist id="orgname">
                  <option value="Universal Grants Commision (UGC)" />
                  <option value="All India Council for Technical Education (AICTE)" />
                  <option value="National Board of Accreditation (NBA)" />
                  <option value="National Assessment and Accreditation Council (NAAC)" />
                  <option value="Association of Indian Universities (AIU)" />
                  <option value="Bar Council of India (BCI)" />
                  <option value="Medical Council of India (MCI)" />
                  <option value="Dental Council of India (DCI)" />
                  <option value="Pharmacy Council of India (PCI)" />
                  <option value="National Council for Teacher Education (NCTE)" />
                  <option value="Indian Nursing Council (INC)" />
                  <option value="Ministry of Human Resource Development (MHRD)" />
                  <option value="Bar Council of India (BCI)" />
                  <option value="Indian Maritime University (IMU)" />
                  <option value="National Council for Indian Education (NCIE)" />
                  <option value="Scientific Institute and Research Organization (SIROs)" />
                  <option value="Indian Council of Agricultural Research (ICAR)" />
                </datalist>
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  College Course{" "}
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
                  type="password"
                  required
                  placeholder="Enter Credential ID"
                />
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state of institute"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="col-4">
              <Form.Group className="mb-3">
                <Form.Label>
                  Location{" "}
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
                  placeholder="Enter location of institute"
                />
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group className="mb-3">
                <Form.Label>
                  Pincode{" "}
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
                <Form.Control type="text" placeholder="Enter pincode" />
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group className="mb-3">
                <Form.Label>
                  Social Media Handles{" "}
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
                  placeholder="Enter social media handles"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>
                  Type of College{" "}
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
                  list="typeofcol"
                  required
                  placeholder="Enter type of college"
                />
                <datalist id="typeofcol">
                  <option value="Autonomous" />
                  <option value="Private" />
                  <option value="Deemed" />
                  <option value="Affiliated" />
                </datalist>
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>
                  Registration Number{" "}
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
                <Form.Control type="number" placeholder="Enter pincode" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 style={{ color: "orangered", padding: "20px" }}>
                Courses Details
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <Form.Group className="mb-3">
                <Form.Label>
                  Courses Offered{" "}
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
                  placeholder="Enter contact number"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row></Row>

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
