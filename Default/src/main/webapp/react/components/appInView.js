import React from 'react';
import AppInViewNavBar from "../containers/app-in-view-nav-bar";
import AppInBottomView from "./AppInBottomView";

export default class AppInView extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        return (

         <div className="app-in-view">
        <AppInViewNavBar activeView = {this.props.uiReducer.sideViewNavBarClick}/>
        <AppInBottomView activeView={this.props.uiReducer.sideViewNavBarClick}/>
         </div> 
        )
      }
    }