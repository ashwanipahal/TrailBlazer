import { connect } from 'react-redux';

import { getFoodDataAction } from './FoodMenuPage.actions';
import { foodMenuData } from './FoodMenuPage.selectors';
import FoodMenuPage from '../FoodMenuPage.view';

const mapStateToProps = state => {
  return {
    foodMenu: foodMenuData(state),
  };
};

const mapDispatchToProps = dispatch => {
    return {
      getFoodMenu: (payload) => {
        dispatch(getFoodDataAction(payload));
      },
    };
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodMenuPage);
