import React from 'react'
import UIActionCreater from '../../actions/ui'

export default class AppInViewIconBase extends React.Component {
    constructor(props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.uiActionCreater = new UIActionCreater();
       
        this.style = {
            activeView: {
                display: "inline-flex",
                alignItems: "center",
                paddingRight: "10px",
                textDecoration: "none",
                background: " #d6e4d6"
            },
            normalView: {
                display: "inline-flex",
                alignItems: "center",
                paddingRight: "10px",
                textDecoration: "none",
            }

        }
    }

    render() {
        let style = this.getStyle();
        return (
            <a className="app-in-view-bar-icon-base" onClick={this.handleClick} id={this.props.id} style={style} href="#"><img id={this.props.id} src={this.props.iconImgSrc} width="20px" /><span className="app-in-view-icon-title" title={this.props.name}  id={this.props.id}>{this.props.name}</span></a>
        )
    }

    handleClick(event) {
        
        if(event.target.id === "" || event.target.id === "undefined")
        return;

        let action = this.uiActionCreater.SideViewNavBarClick(event.target.id);
        this.props.dispatch(action);
    }

    getStyle() {
        if ((this.props.activeView === "app_info" || this.props.activeView === "template_login" || this.props.activeView === "oauth_client"
            || this.props.activeView === "service_login" || this.props.activeView === "dashboard" || this.props.activeView === "settings") && this.props.activeView === this.props.id) {
            return this.style.activeView;
        } else {
            return this.style.normalView;
        }
    }
}