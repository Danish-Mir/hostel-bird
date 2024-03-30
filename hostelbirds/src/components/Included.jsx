import React from 'react'
import Table from 'react-bootstrap/Table';
import '../css/nav.css';
const Included = () => {
  return (
    <div className='table-style'>
      <h3 className='table-heading' >What is included</h3>
      <p>Save up to 40% compared to living in a studio</p>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th><strong>Hostel Bird</strong></th>
          <th><strong>Studio</strong></th>
          <th><strong>Flat Share</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Community & networking</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Fully furnished</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Streaming services</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong> Work space</strong></td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Kitchen essentials</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>WiFi</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td> <strong>Cleaning</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Laundry services *</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Pool *</strong></td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
        <tr>
          <td><strong>Gym *</strong> </td>
          <td><i class="fas fa-check green-tick"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
          <td><i class="fas fa-times red-cross"></i></td>
        </tr>
      </tbody>
    </Table>
<p>* Amenities may vary depending on the coliving space</p>
    </div>
  )
}

export default Included