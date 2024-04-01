import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/nav.css'
const Footer = () => {
  return (
   <div className='main-div'>      
    <div className='footer-style'>
      <img src="../images/bird.webp" alt="logo" srcset="" />
      <h1> Hostel Bird</h1>
      <hr/>
      <Row>
         <Col md={3}>
            <div><strong>Accomodations</strong> </div>
         </Col>
         <Col md={3}>
            <div><strong>Important Links</strong> </div>
         </Col>
         <Col md={3}>
            <div><strong>Policies</strong> </div>
         </Col>
         <Col md={3}>
            <div><strong>Contact details</strong> </div>
         </Col>
      </Row>

      <Row>
         <Col md={3}>
            <div>Destinations </div>
         </Col>
         <Col md={3}>
            <div>Career</div>
         </Col>
         <Col md={3}>
            <div>Guest Policy</div>
         </Col>
         <Col md={3}>
            <div> Hostels</div>
         </Col>
      </Row>
      <Row>
         <Col md={3}>
            <div>Sitemap</div>
         </Col>
         <Col md={3}>
            <div>Privacy Policy</div>
         </Col>
         <Col md={3}>
            <div>Community</div>
         </Col>
         <Col md={3}>
            <div>Support Center </div>
         </Col>
      </Row>

      <Row>
         <Col md={3}>
            <div>Workations </div>
         </Col>
         <Col md={3}>
            <div>Volunteer</div>
         </Col>
         <Col md={3}>
            <div>Refund Policy</div>
         </Col>
         <Col md={3}>
            <div>Contact Us </div>
         </Col>
      </Row>

      
      <Row>
         <Col md={3}>
            <div>Group Bookings </div>
         </Col>
         <Col md={3}>
            <div>Invest & Partner</div>
         </Col>
         <Col md={3}>
            <div>Terms & Conditions</div>
         </Col>
         <Col md={3}>
            <div>Others </div>
         </Col>
      </Row>
      <hr />
      <div><strong>Hostel Bird Private Limited © 2024 All Rights Reserved</strong></div>
    </div>
    <hr />
    </div>
  )
}

export default Footer