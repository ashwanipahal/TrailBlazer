import React from 'react';

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
      {Object.keys(searchedObject).map((key) => {
        return (
          <div>
            {key} - {searchedObject[key]}
          </div>
        );
      })}
    </div>
  );
};

export default ContactPageView;
