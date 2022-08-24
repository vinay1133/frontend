import { Container } from "@mui/system";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="absolute-div">
      <div className="search-bar">
        <Container className="container-fluid">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Colleges"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}
