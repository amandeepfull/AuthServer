import React from 'react';
import AppInfo from "./app-info";
import TemplateLogin from "./template-login";
import OAuthClient from "./oauth-client";
import ServiceLogin from "./service-login";
import Dashboard from "./dashboard";
import Settings from "./settings";

export default class AppInBottomView extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        console.log("app in active view :"+this.props.activeView);
        switch (this.props.activeView) {

            default:
            case "app_info":
                return (
                    <div className="app-in-bottom-view">
                        <AppInfo />
                    </div>
                )
                break;
            case "template_login":
                return (
                    <div className="app-in-bottom-view">
                        <TemplateLogin />
                    </div>
                )
                break;

            case "oauth_client":
                return (
                    <div className="app-in-bottom-view">
                        <OAuthClient />
                    </div>
                )
                break;
            case "service_login":
                return (
                    <div className="app-in-bottom-view">
                        <ServiceLogin />
                    </div>
                )
                break;
            case "dashboard":
                return (
                    <div className="app-in-bottom-view">
                        <Dashboard />
                    </div>
                )
                break;
            case "settings":
                return (
                    <div className="app-in-bottom-view">
                        <Settings />
                    </div>
                )
                break;
        }

    }

}