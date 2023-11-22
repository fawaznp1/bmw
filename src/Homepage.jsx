import React from 'react'
import BMWiX1 from './Videos/BMWiX1.mp4'
import BMWx5 from '../src/Videos/BMWX5.mp4'
import car3 from '../src/Videos/car-on-solid.svg'
import car2 from '../src/Videos/car-rear-solid.svg'
import car1 from '../src/Videos/car-solid.svg'
import the7 from '../src/Videos/Screenshot (27).png'
import the8 from '../src/Videos/Screenshot (28).png'
import the9 from '../src/Videos/Screenshot (29).png'
import './Homepage.css'


function Homepage() {
  return (
    <>
     
    <div className='bg' id='ix1' >
       
        <video width={'100%'}    autoPlay playsInline muted loop>
      <source src={BMWiX1} type="video/mp4"  />
      </video>  
      <p id='overlay-textn'>Sheer Driving <span className='fw-bold'>Pleasure </span> </p>
      <p id='overlay-text'>THE FIRST FULLY ELECTRIC</p>
      <h1 id='overlay-text2'>BMW iX1</h1>
      <h4 id='overlay-text3'>CHARGE AHEAD.XCEED.</h4>
      <button id='overlay-button' ><a href="" style={{textDecoration:'none',color:"white"}}>Discover Now </a></button>

</div>
    <div className='mt-3' id='x5'>
       <video width={'100%'}   autoPlay muted loop >
        <source src={BMWx5} type="video/mp4"  />
        </video>  
        <p id='overlay-textX5'>THE NEW</p>
      <h1 id='overlay-text2'>BMW X5</h1>
      <h4 id='overlay-text3'>CRAFTED SUPREMACY</h4>
      <button id='overlay-button' > <a href="" style={{textDecoration:'none',color:"white"}}>Configure & Price</a></button>
      <button id='overlay-button2'  ><a href="" style={{textDecoration:'none',color:"white"}}>Know More</a> </button>

    </div>
    <div>
    <h4 className='text-center fs-6'>SHOPPING TOOLS</h4>
        <h1 className='text-center lead fs-1 mb-5'>FIND YOUR BMW</h1>
    </div>
    <div className='mb-3 d-flex justify-content-evenly'>
      <div>
        <img  src={car1} width={'130px'} alt="BMW" className='mt-5'/>
      <p className='mt-3 text-center mb-4'>Find a new Car</p>
      <button className='btn border border-black fw-bold mb-4 mt-4'>Search Now</button>
      </div>
      <div>
        <img className='ms-4 mt-5' src={car2} width={'130px'} alt="bmw"  />
        <p className='mt-3 text-center mb-4'>Book A Test Drive</p>
        <button className='btn border border-black fw-bold mb-4 mt-4'>Request A Test Drive</button>
      </div>
      <div>
      <img className='ms-3 mt-5' src={car3}width={'130px'}   alt="bmw"  />
        <p className='mt-3 text-center mb-4'>Build Your Own</p>
        <button className='btn border border-black fw-bold mb-4 mt-4'>Configure & Price</button>
      </div>
    </div>
    <div id='scrnimage'>
      <img src={the7} width={'100%'} alt="know image" className='mb-5' />
      <button id='overlay-buttoni' >   <a href="/"></a>   </button>
    </div>
    <div className='d-flex align-items-center justify-content-center '>
      <div className='me-3 mb-3'>
        <img src={the8} width={'600px'} alt="No image 8" />
      </div>
      <div>
        <p className='fw-bold' style={{color:'gray'}}>BMW ELECTRIFIED</p>
        <h1 className='fs-1'>THE JOY OF ELECTRIC <br />
         DRIVING</h1>
        <p>100% electric.100% driving pleasure. 100 % BMW. Experience an entirely <br /> new sensation of sheer driving pleasure.</p>
        <button className='btn border border-black fw-bold mb-4 mt-4 p-3' >Know more</button>
      </div>
    </div>
    <div className='d-flex align-items-center justify-content-center mt-5'>
      <div className='me-3' id=''>
        <img src={the9} width={'600px'} alt="No image 8" />
      </div>
      <div>
        <p className='fw-bold' style={{color:'gray'}}>BMW FINANCIAL SERVICES</p>
        <h1 className='fs-1'>BMW Special Offers
         </h1>
        <p>Check out a variety of BMW finance offers available across the BMW range.

</p>
        <button className='btn border border-black fw-bold mb-4 mt-4 p-3' >Know more</button>
      </div>
    </div>
    <hr />
    <div className='d-flex mb-5'>
      <p className='ms-5 mt-1' style={{fontSize:'13px'}}>FIND YOUR BMW</p>
      <a href="/" className='fw-bold ms-4' style={{textDecoration:'none',color:'black'}}>All Models</a>
    </div>
</>
  )
}

export default Homepage