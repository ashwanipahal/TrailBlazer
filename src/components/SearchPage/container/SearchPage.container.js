import { connect } from 'react-redux';

import { setSearchData,setActiveSearch } from './SearchPage.actions';
import SearchPageView from '../SearchPage.view';

const mapDispatchToProps = dispatch => {
  return {
    searchData: (payload) => {
      dispatch(setSearchData(payload));
    },
    activeSearch: (payload) => {
      dispatch(setActiveSearch(payload));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchPageView);
