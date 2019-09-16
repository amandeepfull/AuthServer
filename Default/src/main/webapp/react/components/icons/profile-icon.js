import React from 'react'


export default class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.showProfileMenu = this.showProfileMenu.bind(this);

    }

    render() {
        return (
            <div className="profile-menu">
                <a onClick={this.showProfileMenu} id={this.props.id} className="profile-icon" href="#" ><img id={this.props.id} src={this.props.iconImgSrc} width="60px" /></a>
                <div className="profile-menu-wrapper">
                    <ul className="profile-menu-list">
                        <li className="profile-menu-li">
                            <a href="#">Amandeep</a>
                        </li>
                        <li className="profile-menu-li">
                            <a href="#">Logout</a>
                        </li>

                    </ul>
                </div>

            </div>



        )
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
