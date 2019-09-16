import {connect} from 'react-redux';
import ProfileIcon from '../components/icons/profile-icon';

const mapStateToProps =  (state) =>({

    uiReducer : state.UIReducer
  })
const ProfileIconContainer = connect(
mapStateToProps,
)(ProfileIcon)

export default ProfileIconContainer;