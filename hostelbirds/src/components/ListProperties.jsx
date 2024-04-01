import React from 'react';
import Property from './Property';
import Container from 'react-bootstrap/Container';


import '../css/nav.css';


const ListProperties = () => {
   const PropertyList = [
      {
        "Body": {
          "Title": "Introducing Hostel Jodhpur",
          "Text": "Welcoming you in our second hostel in the land of camels and castles.",
          "Image": "../images/img1.png"
        }
      },
      {
        "Body": {
          "Title": "Introducing Sprinklers Hostel",
          "Text": "Welcoming you in our second hostel in the land of camels and castles",
          "Image": "../images/img2.png"
        }
      },
      {
        "Body": {
          "Title": "Featuring Hostel Goa (Anjuna)",
          "Text": "Welcoming you in our second hostel in the land of camels and castles.",
          "Image": "../images/img3.png"
        }
      },
      {
        "Body": {
          "Title": "Introducing Moustache Delhi",
          "Text": "Welcoming you in our second hostel in the land of camels and castles.",
          "Image": "../images/img4.png"
        }
      },
      {
        "Body": {
          "Title": "Introducing Hosteller Delhi",
          "Text": "Welcoming you in our second hostel in the land of camels and castles.",
          "Image": "../images/img5.png"
        }
      }
    ];
  return ( 
    <Container> 
        <div className="prop d-flex jsutify-content-between">
         {PropertyList.map((property, index) => (
            <div md={2}>
               <Property key={index} data={property} />
            </div>
         ))}
      </div>

    </Container>
  );
}

export default ListProperties;
