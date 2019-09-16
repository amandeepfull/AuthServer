import {connect} from 'react-redux';
import MainBottomView from '../components/MainBottomView';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const MainBottomViewContainer = connect(
mapStateToProps,
)(MainBottomView)

export default MainBottomViewContainer;