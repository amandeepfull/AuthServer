
import React from 'react'
import ProfileIcon from '../containers/profile-icon'

export default class TopNavBar extends React.Component {

render() {
    return (
     <div className="top-nav-bar">
     <ProfileIcon id="top_logout" iconImgSrc="/images/icons/profileIcon.png"/>
     </div>    
    )
  }
}
