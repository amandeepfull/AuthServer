import {connect} from 'react-redux';
import AppInTopView from '../components/App-In-top-view';

const mapStateToProps =  (state) =>({

    appsReducer : state.AppsReducer
  })
const AppInTopViewContainer = connect(
mapStateToProps,
)(AppInTopView)

export default AppInTopViewContainer;