import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Stay = () => {
  return (
    <>
      
      <div className="container mt-4 mb-3">
        <h3>Why Stay with Us</h3>
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <img src={'../images/stay1.png'} alt="" className='img-fluid'/>
          </Col>
          <Col sm={6}>
            <img src={'../images/stay2.png'} alt="" className='img-fluid' />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <img src={'../images/stay3.png'} alt="" srcset="" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Stay;
