import React from 'react'
import AppInView from '../containers/app-in-view'
import AppInTopView from './App-In-top-view'
import NewAppPopup from './popups/NewAppPopup'
export default class Apps extends React.Component {

    render() {
        return (
            <div className="apps-view">
                <NewAppPopup />
                <AppInTopView />
                <AppInView />
            </div>
        )
    }
}
