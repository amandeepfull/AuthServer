import React from 'react'
import UIActionCreater from '../../actions/ui'

export default class LeftSideBarIconBase extends React.Component {
    constructor(props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.uiActionCreater = new UIActionCreater();

        this.style = {
            activeView: {
                display: "flex",
                alignItems: "center",
                border: "0.5px solid  #3a415d",
                background: "#d3d3d626"
            },
            normalView: {
                display: "flex",
                alignItems: "center",
                border: "0.5px solid  #3a415d"
            }
        }

    }
    render() {

        let style = this.getStyle();

    return (
            <a id={this.props.id} className="left-side-bar-icon-base" onClick={this.handleClick} style={style} href="#" ><img id={this.props.id} src={this.props.iconImgSrc} width={this.props.iconWidth} /><span id={this.props.id} className="left-side-bar-icon-title" title={this.props.name} >{this.props.name}</span></a>
        )
    }

    handleClick(event) {

        if (event.target.id === "" || event.target.id === "undefined")
            return;

        let action = this.uiActionCreater.LeftSideViewIconClick(event.target.id);
        this.props.dispatch(action);
    }

    getStyle() {
        if ((this.props.activeView === "apps" || this.props.activeView === "profile") && this.props.activeView === this.props.id) {
            return this.style.activeView;
        } else {
            return this.style.normalView;
        }
    }
}