import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Header';
import '../css/nav.css'; 

const Navigationbar = () => {
  return (
    <div className='nav-bar1 bg-transparent'>
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center head-font">
            <img class="img-size" src={'./images/bird.webp'} alt="Logo" className="mr-2" />
            Hostel Bird
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-with-divider nav-links"> About</Nav.Link>
              <Nav.Link href="#home" className="nav-link-with-divider vl nav-links"><i style={{fontSize:'30px'}} class='fas fa-globe'></i> Destination</Nav.Link>
              <Nav.Link href="#link" className="nav-link-with-divider vl nav-links"><i style={{fontSize:'30px'}} class='fas fa-hospital'></i>Vendor Login</Nav.Link>
              <Nav.Link className='nav-link-with-divider nav-links' href="#link">List your properties</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
