import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Header';
import '../css/nav.css'; 

const Navigationbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img class="img-size" src={'./images/bird.webp'} alt="Logo" className="mr-2" />
            Hostel Bird
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-with-divider">Destination</Nav.Link>
              <Nav.Link href="#link" className="nav-link-with-divider">Vendor Login</Nav.Link>
              <Nav.Link href="#link">List your properties</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header /> 
    </div>
  );
}

export default Navigationbar;
