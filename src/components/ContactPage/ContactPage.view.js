import React, { useEffect } from 'react';
import './style.scss';

const ContactPageView = (props) => {
  const { getContactDetails, contactDetail } = props;
  useEffect(() => {
    getContactDetails();
  }, []);
  return (
    <div>
      <div className='contact-page'>
        <div class='row'>
          <div className='contact-page__image col-lg-6 col-md-6 col-sm-12'>
            <img src='images/contactus.jpg' alt='contact information' />
          </div>
          <div className='contact-page__info col-lg-6 col-md-6 col-sm-12'>
            <ul>
              <li>
                <span className='key'>Helpline Number: {contactDetail}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageView;
