import React from 'react'
import LeftSideBar from "../containers/left-side-bar"
import RightSideBar from "./Right-Side-Bar"


export default class MainBottomView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.uiReducer.leftSideMenuClick);
        return (
            <div className="main-bottom-view">
                <LeftSideBar activeView={this.props.uiReducer.leftSideMenuClick} />
                <RightSideBar activeView={this.props.uiReducer.leftSideMenuClick} />
            </div>
        )
    }
}