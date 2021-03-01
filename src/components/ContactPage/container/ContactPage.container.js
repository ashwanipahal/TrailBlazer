import { connect } from 'react-redux';

import { contactData } from '../../ContactPage/container/ContactPage.selectors';
import { activeSearch } from '../../SearchPage/container/SearchPage.selectors';
import { getContactDataAction } from '../../ContactPage/container/ContactPage.actions';
import ContactPage from '../ContactPage.view';

const mapStateToProps = state => {
  return {
    contactDetail: contactData(state),
    activeSearch: activeSearch(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContactDetails: () => {
      dispatch(getContactDataAction());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);
