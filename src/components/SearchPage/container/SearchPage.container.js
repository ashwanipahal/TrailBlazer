import { connect } from 'react-redux';

import { setSearchData } from './SearchPage.actions';
import SearchPageView from '../SearchPage.view';

const mapDispatchToProps = dispatch => {
  return {
    searchData: (payload) => {
      dispatch(setSearchData(payload));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchPageView);
