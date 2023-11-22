import React from 'react'
import { Col, Row } from 'react-bootstrap'

function FooterBMW() {
  return (
    <div className='container ' style={{backgroundColor:'rgba(246, 240, 240, 0.727)'}}>
       <Row>
        <Col>
        <p>Contact</p>
        <p className='fw-bold'>Find a Dealer</p>
        <p className='fw-bold'>Request a Test Drive</p>
        <p className='fw-bold'>Careers</p>
        <p className='fw-bold'>Contact Us</p>
        </Col>
        <Col>
        <p className='mb-3'>Quick Links </p> 
        <p className='fw-bold'>Build your BMW</p>
        <p className='fw-bold'>BMW Financial Services</p>
        <p className='fw-bold'>BMW Safety </p>
        <p className='fw-bold'>EMI Calculator <i class="fa-solid fa-up-right-from-square"></i></p>
        <p className='fw-bold'>BMW Premium Selection (Used Cars) <i class="fa-solid fa-up-right-from-square"></i></p>
        </Col>
        <Col>
        <p className='mb-3'>
        Experience BMW</p>
        <p className='fw-bold'>BMW Group
</p>
        <p className='fw-bold'>BMW Excellence Club
</p>
        <p className='fw-bold'>BMW Motorrad
</p>
        <p className='fw-bold'>Charging Network
</p></Col>
         <Col>
         <p className='mb-3'> Legal </p>
         <p className='fw-bold'>Legal Disclaimer/Imprint
</p>
         <p className='fw-bold'>Privacy Policy</p></Col>
       </Row>
       <Row>
        <Col>
        <i  class="fa-brands fa-facebook-f ms-5 me-4 fs-5"></i>
        <i class="fa-brands fa-instagram  me-4  fs-5"></i>
        <i class="fa-brands fa-youtube me-4 fs-5"></i>
        <i class="fa-brands fa-linkedin-in me-4 fs-5"></i>
        <i class="fa-brands fa-twitter me-4 fs-5"></i>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
       </Row>
     
       <div className='d-flex align-items-center '>
        <div className='ms-5 mt-5 mb-4'>
        <p> ©️ BMW AG 2023</p>
        </div>
        <div  className='ms-auto me-5'>
            <a className='me-5 fw-bold' style={{textDecoration:'none',color:'black'}} href="/">Legal Disclaimer/Imprint</a>
            <a className='me-5 fw-bold' style={{textDecoration:'none',color:'black'}} href="/"> Privacy Policy</a>
            <a className='me-5 fw-bold' style={{textDecoration:'none',color:'black'}} href="/"> Contact Us</a>
        </div>
       </div>
    </div>
  )
}


export default FooterBMW