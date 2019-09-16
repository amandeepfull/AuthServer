import {connect} from 'react-redux';
import AppInView from '../components/appInView';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const AppInViewContainer = connect(
mapStateToProps,
)(AppInView)

export default AppInViewContainer;