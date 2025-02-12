import React from 'react';
import '../Contact.css';
import Nav from './Nav';
// iconify icons
import { Icon } from '@iconify/react';
import Footer from './Footer';

function Contact() {
  return (
    <div id='contactsection'>
      <Nav />
      <div className="conflex">
        <div className="concontainer">
          {/* form section replaced with text */}
          <div className="conform">
            <h3 className="write">Write to us</h3>
            <div className="formblock">
              <p className="contact-message">Please contact us for contracts via the information below:</p>
            </div>
          </div>

          {/* contact side */}
          <div className="leftside">
            <h3 className="contactus">Contact Us</h3>
            <div className="address">
              <div className="conicons">
                <Icon icon="entypo:address" id='conicon' />
              </div>
              <div className="cotext">
                174b Commercial Road, London, England
              </div>
            </div>
            <div className="eemail">
              <div className="conicons">
                <Icon icon="clarity:email-line" id='conicon' />
              </div>
              <div className="con-text">
                <a href="mailto:Business@surmaconstructionlimited.com">Business@surmaconstructionlimited.com</a>
              </div>
            </div>
            <div className="phone">
              <div className="conicons">
                <Icon icon="bxs:phone-incoming" id='conicon' />
              </div>
              <div className="con-text">
                <a href="tel:+44 07877949437">07877949437</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
