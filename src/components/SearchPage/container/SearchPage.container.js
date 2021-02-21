import { connect } from 'react-redux';

import { setSearchData } from './SearchPage.actions';
import { searchData } from './SearchPage.selectors';
import SearchPageView from '../SearchPage.view';

const mapStateToProps = state => {
  return {
    mapData: searchData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchData: (payload) => {
      dispatch(setSearchData(payload));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageView);
