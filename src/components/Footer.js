import React from 'react';
import '../footer.css';

export default function Footer() {
  return (
    <div className="wrapper"> {/* This is the main wrapper for the layout */}
      {/* Main content area (you should have content here that fills space) */}
      <div className="content">
        {/* Your main content goes here */}
      </div>
      
      <div className="footer"> {/* Directly use footer class */}
        <div className="ftext">
          <p className="fp">
            Surma Construction Limited<br />We design your dreams!
          </p>
        </div>
        <div className="flink">
          <h6 className='text-uppercase fw-bold mb-4 text-lg font-bold'>Links</h6>
          <div>
            <a id='fleft' href="/">Home</a>
          </div>
          <div>
            <a id='fleft' href="/Service">Services</a>
          </div>
        </div>
        <div className="addr">
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-lg font-bold'>Contact</h6>
            <p>
              <i id='foothover' className='fas fa-home me-3'></i>174b Commercial Road, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England
            </p>
            <p>
              <i className='fas fa-envelope me-3'></i>
              <a id='foothover' href="mailto:Business@surmaconstructionlimited.com">Business@surmaconstructionlimited.com</a>
            </p>
            <p>
              <i className='fas fa-phone me-3'></i>
              <a id='foothover' href="tel:+44 07877949437">07877949437</a>
            </p>
            <p>
              <i className='fas fa-print me-3'></i>
              <a id='foothover' href="tel:+44 07877949437">07877949437</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
