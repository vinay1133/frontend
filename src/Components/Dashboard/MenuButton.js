import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function MenuButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        style={{ width: "13rem", height: "3rem", backgroundColor: "#231955" }}
        onClick={handleShow}
      >
        HEI Dashboard
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ color: "#231955", fontWeight: "600", fontSize: "30px" }}
          >
            HEI Dashboard
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a
            href="/accreditation"
            style={{ color: "orangered", fontSize: "20px", padding: "2rem" }}
          >
            Institute Details
          </a>
          <br />
          <a
            href="/UploadFileHEI"
            style={{ color: "orangered", fontSize: "20px", padding: "2rem" }}
          >
            Upload Documents
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
