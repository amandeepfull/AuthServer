import React from 'react'
import Ajax from '../../services/Ajax'
import CommonConstants from '../../CommonContansts'
import UIActionCreater from '../../actions/ui'

export default class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.showProfileMenu = this.showProfileMenu.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleMyProfile = this.handleMyProfile.bind(this);

        this.ajax = new Ajax();
        this.uiActionCreater = new UIActionCreater();
    }

    render() {
        return (
            <div className="profile-menu">
                <a onClick={this.showProfileMenu} id={this.props.id} className="profile-icon" href="#" ><img id={this.props.id} src={this.props.iconImgSrc} width="60px" /></a>
                <div className="profile-menu-wrapper">
                    <ul className="profile-menu-list">
                        <li onClick={this.handleMyProfile} name="my_profile" className="profile-menu-li">
                            <a href="#" name="my_profile">{currentUser.firstName}</a>
                        </li>
                        <li className="profile-menu-li" onClick={this.handleLogout} name="profile_menu_logout">
                            <a href="#" name="profile_menu_logout">Logout</a>
                        </li>

                    </ul>
                </div>

            </div>



        )
    }


    handleMyProfile() {
        if (event.target.name == "" || event.target.name == "undefined" || event.target.name != "my_profile")
            return;

        let action = this.uiActionCreater.LeftSideViewIconClick("profile");
        this.props.dispatch(action);
    }

    handleLogout(event) {
        if (event.target.name == "" || event.target.name == "undefined" || event.target.name != "profile_menu_logout")
            return;
        console.log("logout : " + event.target.name);
        this.ajax.makeRequest("GET", CommonConstants.getDefaultUrl("logout"), "").then(logoutData => {
            if (logoutData.ok)
                location.reload();
        })

    }

    showProfileMenu(event) {
        if (event.target.id == "" || event.target.id == "undefined")
            return;
        const applistWrapperDisplayStyle = document.getElementsByClassName("profile-menu-wrapper")[0].style.display;
        if (applistWrapperDisplayStyle === "")
            document.getElementsByClassName("profile-menu-wrapper")[0].style.display = "block"
        else
            document.getElementsByClassName("profile-menu-wrapper")[0].style.display = "";
    }

}
