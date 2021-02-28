import React,{ useEffect } from 'react';

const ContactPageView = (props) => {
  const { getContactDetails, contactDetail } = props;
  useEffect(() => {
    getContactDetails();
  }, []);
  return (<div>Helpline Number: {contactDetail}</div>);
};

export default ContactPageView;
