import React from 'react'

export default class AppInViewIconBase extends React.Component {
    constructor(props) {
        super(props)
        this.getStyle = this.getStyle.bind(this);
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
        let style = this.getStyle(this.props.activeView, this.props.id);
        return (
            <a className="app-in-view-bar-icon-base" id={this.props.id} style={style} href="#"><img src={this.props.iconImgSrc} width="20px" /><span className="app-in-view-icon-title" title={this.props.name} >{this.props.name}</span></a>
        )
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