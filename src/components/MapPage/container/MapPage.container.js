import { connect } from 'react-redux';

import { mapData } from '../../MapPage/container/MapPage.selectors';
import { getMapDataAction } from '../../MapPage/container/MapPage.actions';
import MapPageView from '../MapPage.view';

const mapStateToProps = state => {
  return {
    seatData: mapData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMapData: (payload) => {
      dispatch(getMapDataAction(payload));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPageView);
