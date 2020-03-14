import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
const MyNavbar = () => (
  <Container fluid="true">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">HotScan Kanban</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home"> </Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </Container>
);

export default MyNavbar;
