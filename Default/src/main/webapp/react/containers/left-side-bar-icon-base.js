import {connect} from 'react-redux';
import LeftSideBarIconBase from '../components/icons/Left-Side-Bar-Icon-Base';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const LeftSideBarIconBaseContainer = connect(
mapStateToProps,
)(LeftSideBarIconBase)

export default LeftSideBarIconBaseContainer;