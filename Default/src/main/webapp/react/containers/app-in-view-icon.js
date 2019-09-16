import {connect} from 'react-redux';
import AppInViewIconBase from '../components/icons/AppInViewIconBase';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const AppInViewIconBaseContainer = connect(
mapStateToProps,
)(AppInViewIconBase)

export default AppInViewIconBaseContainer;