import { connect } from 'react-redux';

import { contactTransportData, contactITData,activeSearch } from '../../SearchPage/container/SearchPage.selectors';
import ContactPage from '../ContactPage.view';

const mapStateToProps = state => {
  return {
    contactTransportData: contactTransportData(state),
    contactITData: contactITData(state),
    activeSearch: activeSearch(state),
  };
};



export default connect(
  mapStateToProps
)(ContactPage);
