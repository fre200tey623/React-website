import React from "react"
import {Navbar, Nav, Container, Form, FormControl, Button} from "react-bootstrap"

export default function Header(){
  return(
    <Navbar expand="lg" className="nav">
      <Container fluid className="">
        <Navbar.Brand href="#">Suyfi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className="d-flex justify-content-between">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav
          className="my-2 my-lg-0 d-flex justify-content-end"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Sobre</Nav.Link>
          <Nav.Link href="#action3">Contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}