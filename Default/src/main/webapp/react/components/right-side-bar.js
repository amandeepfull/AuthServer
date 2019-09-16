import React from 'react'
import Apps from './apps'
import Profile from './profile'
export default class RightSideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        switch (this.props.activeView) {

            default:
            case "apps":
                return (
                    <div className="right-side-bar">
                        <Apps />
                    </div>
                )
                break;

                case "profile" :
                return (
                    <div className="right-side-bar">
                        <Profile />
                    </div>
                )
                break;
        }

    }
}