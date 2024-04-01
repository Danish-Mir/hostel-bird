import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stay from './components/Stay';
import PropertyList from './components/ListProperties';
import { Location } from './components/Location';
import '../src/css/nav.css';
import Included from './components/Included';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const locations = [
    {title: 'Karnataka', img: './images/1.png'},
    {title: 'Kerala', img: './images/2.png'},
    {title: 'Jaisalmer', img: './images/3.png'},
    {title: 'Agra', img: './images/4.png'},
    {title: 'Karnataka', img: './images/4.png'},
    {title: 'Kerala', img: './images/3.png'},
    {title: 'Jaisalmer', img: './images/2.png'},
    {title: 'Agra', img: './images/1.png'},
  ]

  const stats = [
    { data: 2000, title: 'Contributions' },
    { data: 2000, title: 'Vistiors' },
    { data: 2000, title: 'Reviews' },
    { data: 2000, title: 'Members' },
    { data: 2000, title: 'Contributions' },
    { data: 2000, title: 'Vistiors' },
    { data: 2000, title: 'Reviews' },
    { data: 2000, title: 'Members' },
  ]


  return (
    <>   
     {/* <NavigationBar></NavigationBar> */}
     <Header />
     
    <Container>
      <Stay></Stay>
    </Container>
    <Container >
  <div className="prop-main-div">
    <div style={{ zIndex: 1 }}>

  <PropertyList />
    </div>
    <div className="prop-bg-img">
    <img style={{width:"1100px"}} src="./images/bg_rect.png" alt="Background"/>
  </div>
  </div>
  
</Container>
     <Container className='mt-5'>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 style={{ fontWeigt: 'bold' }}>Top Destinations</h3>

          <a href="" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#F65656', fontSize: 13 }}>All Destinations > </a>
        </div>
        <Row style={{ rowGap: 15 }}>
          {
            locations.map((item, index) => {
              return(
                <Location item={ item }/>
              )
            })
          }

        </Row>
        

        <Row style={{ rowGap: 60 }}>
          <div className="text-center mt-5">
            <h3>Your next coliving home</h3>
          </div>

          {
            stats.map((item, index) => {
              return(
                <Col xs md={3} key={ index }>
                  <div className="coliving-stat">
                    <strong>{ item.data }</strong>
                    { item.title }
                  </div>
                </Col>
              )
            })
          }
          {/* new code */}
          <Col xs md={4} >
                  <div >
                    <img className="img-format" src='../images/Coins.png'></img>
                    <strong>No booking fees </strong><br/>
                    Never pay a booking fee. More money for living instead.
                  </div>
                </Col>
                <Col xs md={4} >
                  <div className>
                    <img className="img-format" src='../images/Internet.png'></img>
                    <strong>100% online process </strong><br/>
                    Book rooms, chat with hosts, and pay rent online.                  </div>
                </Col>
                <Col xs md={4} >
                  <div className>
                    <img className="img-format" src='../images/Lock.png'></img>
                    <strong>Payment protection</strong><br/>
                    We securely collect your rent after you move in.                  </div>
                </Col>

          
        </Row>

     </Container>

     <Included></Included>
     <Footer></Footer>
    </>

  );
}

export default App;
