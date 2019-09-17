import React from 'react'
import AppService from '../services/AppService';
import AppsActionCreater from '../actions/apps'

export default class AppInTopView extends React.Component {

    constructor(props) {
        super(props);
        this.allUserAppsLocalStoreKey = "allUserApps";
        this.apps = JSON.parse(localStorage.getItem(this.allUserAppsLocalStoreKey)) || {};
        this.state = {
            allUserApps: this.apps,
            firstAppName: ""
        }

        this.showAppList = this.showAppList.bind(this);
        this.showNewAppPopup = this.showNewAppPopup.bind(this);
        this.appService = new AppService();
        this.appActionCreater = new AppsActionCreater();
    }

    componentDidMount() {
        
        let keys = Object.keys(this.state.allUserApps);
        if (keys.length > 0){
            this.setState({
                allUserApps: this.state.allUserApps,
                firstAppName: this.state.allUserApps[keys[0]].name
            })
        }
            

        this.appService.getAllUserApps(currentUserId).then(apps => {
            if (Object.keys(apps).length <= 0) {
                this.setState({
                    firstAppName: "No App Created"
                })
            } else {
                let mapOfApps = this.getMapOfApps(apps);
                this.setState({
                    allUserApps: mapOfApps,
                    firstAppName: apps[0].name
                })
                localStorage.setItem(this.allUserAppsLocalStoreKey, JSON.stringify(mapOfApps));
            }
        }).catch((err) => {

        });
    }

    getMapOfApps(apps) {
        var mapOfApps = {};
        apps.map(app => {
            mapOfApps[app.id] = app;
        });

        return mapOfApps;
    }

    generateList = (app) => {
        return (<li className="app-li" key={app.id}>
            <a href="#">{app.name}</a>
        </li>)
    }

    render() {
        let firstApp;
        let apps = this.state.allUserApps;
        let keys = Object.keys(this.state.allUserApps);

        return (
            <div className="app-in-top-view">
                <div className="select-app">
                    <span className="app-text"> Select App</span>
                    <button onClick={this.showAppList} className="select-app-option">{this.state.firstAppName}
                        <img src="/images/down_arrow.jpg" />
                    </button>
                    <div className="app-option-wrapper">
                        <ul className="app-list">

                            {
                                keys.map((key) => {
                                    return this.generateList(this.state.allUserApps[key]);
                                })
                            }

                        </ul>
                    </div>
                </div>
                <button className="new-app-btn" onClick={this.showNewAppPopup}>
                    <img src="/images/icons/plusIcon.png" />New App
                </button>

                <div className="app-title">
                    <h2>{this.state.firstAppName}</h2>
                </div>

            </div>

        )
    }

    showAppList() {
        const applistWrapperDisplayStyle = document.getElementsByClassName("app-option-wrapper")[0].style.display;
        if (applistWrapperDisplayStyle === "")
            document.getElementsByClassName("app-option-wrapper")[0].style.display = "block"
        else
            document.getElementsByClassName("app-option-wrapper")[0].style.display = "";
    }

    showNewAppPopup() {
        document.getElementsByClassName("overlay")[0].style.display = "block";
        document.getElementsByClassName("new-app-popup")[0].style.display = "block"
    }



}