import {connect} from 'react-redux';
import AppInviewNavBar from '../components/AppInviewNavBar';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const AppInviewNavBarContainer = connect(
mapStateToProps,
)(AppInviewNavBar)

export default AppInviewNavBarContainer;