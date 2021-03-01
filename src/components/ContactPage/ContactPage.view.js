import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ContactPageView = (props) => {
  const { getContactDetails, contactDetail } = props;

  let query = useQuery();
  let data = query.get('query');
  useEffect(() => {
    getContactDetails(data);
  });
  return (
    <div>
      <div className='contact-page'>
        <div class='row'>
          <div className='contact-page__image col-lg-6 col-md-6 col-sm-12'>
            <img src='images/contactus.jpg' alt='contact information' />
          </div>
          <div className='contact-page__info col-lg-6 col-md-6 col-sm-12'>
            <ul className='contact-page__list'>
              <li>
                <span className='key'>{data}: {contactDetail}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageView;
