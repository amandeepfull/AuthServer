import {connect} from 'react-redux';
import LeftSideBar from '../components/left-side-bar';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const LeftSideBarContainer = connect(
mapStateToProps,
)(LeftSideBar)

export default LeftSideBarContainer;