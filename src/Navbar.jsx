import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import bmw from '../src/Videos/BMWbgr.png'
import './Homepage.css'
function Navbmw() {
  return (
    <div style={{zIndex:'2'}} id='navbar'>
           <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <Navbar.Brand href="/">
        <img src={bmw} width={'40px'} alt="no image here" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='nav1' href="/" style={{color:'white'}}>Models</Nav.Link>
            <Nav.Link id='nav1' href="/" style={{color:'white'}}>Electric</Nav.Link>
            <Nav.Link id='nav1' href="/" style={{color:'white'}}>Configurator</Nav.Link>
            <Nav.Link id='nav1' href="/" style={{color:'white'}}>Visit Online shop</Nav.Link>
            <Nav.Link id='nav1' href="/" style={{color:'white'}}>More BMW</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  >
            <Nav>
              <Nav.Link id='nav1' style={{color:'white'}}>           <i class="fa-solid fa-cart-shopping me-4" ></i>

              </Nav.Link >
              <Nav.Link id='nav1' style={{color:'white'}}>          <i class="fa-solid fa-location-dot me-4"></i>

              </Nav.Link>
               <Nav.Link id='nav1' style={{color:'white'}}>          <i class="fa-solid fa-magnifying-glass v"></i>

              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Navbmw