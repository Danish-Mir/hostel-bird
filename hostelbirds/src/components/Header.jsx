import React from 'react';
import '../css/nav.css';
import Navigationbar from './NavigationBar';

const Header = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img className="bg-size" src="../images/friends.webp" alt="" />
      <div style={{ position: 'absolute', top: '40%', left: '50%', zIndex: '1', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <h1 className='bg-heading'>Find Your Tribe</h1>
      </div>
      <div style={{ position: 'absolute', top: '80%', left: '50%', zIndex: '1', transform: 'translate(-50%, -50%)', width: '90%' }}>
        <table className="table table-striped table-condensed table-bordered">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th colSpan={3}><i style={{ fontSize: '30px' }} className='fas fa-globe'></i> HOTELS</th>
              <th colSpan={3}>CO-LIVING LONG STAYS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                <div className="container">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker location-icon" style={{ fontSize: '25px', marginRight: '10px' }}></i>
                        <div>
                          <p>Where do you want to go?</p>
                          <input type="text" style={{width: "80px", background: "transparent", outline: "none", border: "none" }} className="form-control" placeholder='New Delhi' />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker location-icon" style={{ fontSize: '25px', marginRight: '10px' }}></i>
                        <div>
                          <p>Guests</p>
                          <input  type="text" style={{width: "80px", background: "transparent", outline: "none", border: "none" }} className="form-control" placeholder='2' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colSpan={3}>
  <div className="container">
    <div className="row g-0">
      <div className="col-md-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-map-marker location-icon" style={{ fontSize: '25px', marginRight: '10px' }}></i>
          <div>
            <p>Check in</p>
            <input type="text" style={{ width: "80px", background: "transparent", outline: "none", border: "none" }} className="form-control" placeholder='20,Feb' />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-map-marker location-icon" style={{ fontSize: '25px', marginRight: '10px' }}></i>
          <div>
            <p>Check out</p>
            <input type="text" style={{ width: "80px", background: "transparent", outline: "none", border: "none" }} className="form-control" placeholder='22, Feb' />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex align-items-center">
          <div>
          <input type="button" className="btn btn-danger" value="Submit" />

          </div>
        </div>
      </div>
    </div>
  </div>
</td>
             </tr>
          </tbody>
        </table>
      </div>
      <Navigationbar />
    </div>
  );
};

export default Header;
