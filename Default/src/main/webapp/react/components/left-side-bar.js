
import React from 'react'
import LeftSideBarIconBase from './icons/Left-Side-Bar-Icon-Base'

export default class LeftSideBar extends React.Component {
        constructor(props){
            super(props);

        }

    render() {
        console.log(this.props.uiReducer.leftSideMenuClick);
        return (
         <nav className="left-side-bar">
         <div className="app-logo"><h2> OAuthCater</h2></div>
        <LeftSideBarIconBase name="Apps" iconImgSrc="/images/icons/app.png" id="apps" activeView={this.props.uiReducer.leftSideMenuClick}/>
        <LeftSideBarIconBase name="Profile" iconImgSrc="/images/icons/profileIcon.png" id="profile" activeView={this.props.uiReducer.leftSideMenuClick}/>
         </nav> 
        )
      }
    }