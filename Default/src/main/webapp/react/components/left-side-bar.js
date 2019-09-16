
import React from 'react'
import LeftSideBarIconBase from '../containers/left-side-bar-icon-base'

export default class LeftSideBar extends React.Component {
        constructor(props){
            super(props);

        }

    render() {
        return (
         <nav className="left-side-bar">
         <div className="app-logo"><h2> OAuthCater</h2></div>
        <LeftSideBarIconBase name="Apps" iconImgSrc="/images/icons/app.png" id="apps" activeView={this.props.activeView}/>
        <LeftSideBarIconBase name="Profile" iconImgSrc="/images/icons/profileIcon.png" id="profile" activeView={this.props.activeView}/>
         </nav> 
        )
      }
    }