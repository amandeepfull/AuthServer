import React from 'react'
import AppInView from '../containers/app-in-view'
import AppInTopView from './App-In-top-view'

export default class RightSideBar extends React.Component {
        constructor(props){
            super(props)
        }
    render() {
        return (
         <div className="right-side-bar">
        <AppInTopView/>
         <AppInView/>
         </div> 
        )
      }
    }