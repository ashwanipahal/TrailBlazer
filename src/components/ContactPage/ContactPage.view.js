import React from 'react';
import './style.scss';

const ContactPageView = (props) => {
  const { contactTransportData, contactITData, activeSearch } = props;
  let searchedObject;
  if (activeSearch == 'transport') {
    searchedObject = contactTransportData.toJS();
  } else {
    searchedObject = contactITData.toJS();
  }
  return (
    <div>
        <div className='contact-page'>
            <div class='row'>
              <div className='contact-page__image col-lg-6 col-md-6 col-sm-12'><img src="images/contactus.jpg" alt="contact information" /></div>
              <div className='contact-page__info col-lg-6 col-md-6 col-sm-12'>
              <ul>
      {Object.keys(searchedObject).map((key) => {
        return (
            <li><span className='key'>{key}</span> -<span>{searchedObject[key]}</span></li>
        );
      })}
      </ul>
      </div>
    </div>
    </div>
  </div>
  );
};

export default ContactPageView;
