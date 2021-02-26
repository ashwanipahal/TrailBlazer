import { connect } from 'react-redux';

import { searchData } from '../../SearchPage/container/SearchPage.selectors';
import MapPageView from '../MapPage.view';

const mapStateToProps = state => {
  return {
    seatData: searchData(state)
  };
};


export default connect(
  mapStateToProps,
)(MapPageView);
