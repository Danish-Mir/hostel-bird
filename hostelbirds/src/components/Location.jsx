import React from 'react';
import Col from 'react-bootstrap/Col';

export const Location = ({ item }) => {
  return (
      <Col md={3}>
         <div className='position-relative'>
         <img src={ item.img } className='w-100 rounded' />
         <div className='position-absolute px-3 py-3 h-100 w-100 d-flex flex-column justify-content-between' style={{ top: 0}}>
            <h5 className='text-light'><strong>{ item.title }</strong></h5>
            <div className="d-flex w-100 justify-content-end">
               <a href="" style={{ border: '2px solid white',  padding: '2px 15px', borderRadius: 20, fontSize: 12, color: 'white', textDecoration: 'none' }}>Explore</a>
            </div> 
         
         </div>
         
         </div>
         
      </Col>
  )
}
