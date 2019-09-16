import React from 'react'
import AppInViewIcon from "../containers/app-in-view-icon"
import { UIActionCreater } from '../actions/ui';
export default class AppInViewNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.uiActionCreater = new UIActionCreater();
    }
    render() {


        return (
            <div className="app-in-view-nav-bar">
                <AppInViewIcon name="App Info" iconImgSrc="/images/icons/appinfo.png" id="app_info" activeView={this.props.activeView} />
                <AppInViewIcon name="Template Login" iconImgSrc="/images/icons/htmlIcon.png" id="template_login" activeView={this.props.activeView} />
                <AppInViewIcon name="OAuth Client" iconImgSrc="/images/icons/oauthIcon.png" id="oauth_client" activeView={this.props.activeView} />
                <AppInViewIcon name="Service Login" iconImgSrc="/images/icons/serviceLoginIcon.png" id="service_login" activeView={this.props.activeView} />
                <AppInViewIcon name="Dashboard" iconImgSrc="/images/icons/dashboardIcon.png" id="dashboard" activeView={this.props.activeView} />
                <AppInViewIcon name="Settings" iconImgSrc="/images/icons/settingsIcon.png" id="settings" activeView={this.props.activeView} />
            </div>
        )
    }
}