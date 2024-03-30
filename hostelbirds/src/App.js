import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stay from './components/Stay';
import PropertyList from './components/ListProperties';
import { Location } from './components/Location';
import '../src/css/nav.css'


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
     <NavigationBar></NavigationBar>
     
    <Container>
      <Stay></Stay>
    </Container>
    <div>
      <PropertyList />

      <div style={{ marginTop: '-14%' }}>
        <img src="./images/bg_rect.png" className="w-100" />
      </div>
    </div>
     

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

          
        </Row>


     </Container>

    </>

  );
}

export default App;
