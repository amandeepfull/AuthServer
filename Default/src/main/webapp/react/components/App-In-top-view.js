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
        }

        this.handleAppListClick = this.handleAppListClick.bind(this);
        this.toggleAppList = this.toggleAppList.bind(this);
        this.showNewAppPopup = this.showNewAppPopup.bind(this);
        this.appService = new AppService();
        this.appActionCreater = new AppsActionCreater();
    }

    componentDidMount() {

        let keys = Object.keys(this.state.allUserApps);

        if (keys.length > 0) {
            this.updateActiveApp(this.state.allUserApps[keys[0]]);
            this.setState({
                allUserApps: this.state.allUserApps
            })
            return;
        }

        this.getAllUserAppsAndUpdateState();
    }


    render() {

        let keys = Object.keys(this.state.allUserApps);

        return (
            <div className="app-in-top-view">
                <div className="select-app">
                    <span className="app-text"> Select App</span>
                    <button onClick={this.toggleAppList} className="select-app-option">{this.props.appsReducer.activeApp.name}
                        <img src="/images/down_arrow.jpg" />
                    </button>
                    <div className="app-option-wrapper">
                        <ul className="app-list">

                            {
                                keys.map((key) => {

                                    if (this.state.allUserApps[key].id == this.props.appsReducer.activeApp.id)
                                        return;

                                    return this.generateAppList(this.state.allUserApps[key]);
                                })
                            }

                        </ul>
                    </div>
                </div>
                <button className="new-app-btn" id="new-app-pop-btn" onClick={this.showNewAppPopup}>
                    <img src="/images/icons/plusIcon.png" />New App
                </button>

                <div className="app-title">
                    <h2>{this.props.appsReducer.activeApp.name}</h2>
                </div>

            </div>

        )
    }

    getAllUserAppsAndUpdateState() {

        this.appService.getAllUserApps(currentUserId).then(apps => {
            
            if (Object.keys(apps).length <= 0) {

            } else {
            
                let mapOfApps = this.getMapOfApps(apps);
                this.setState({
                    allUserApps: mapOfApps,
                })

                let keys = Object.keys(mapOfApps);
                this.updateActiveApp(mapOfApps[keys[0]]);
                if (keys.length <= 0)
                    document.getElementById("new-app-pop-btn").click();

                localStorage.setItem(this.allUserAppsLocalStoreKey, JSON.stringify(mapOfApps));
            }
        }).catch((err) => {
            console.error("Exception while fetching apps and updating state : "+err);
        });
    }

    updateActiveApp(app) {
    
        if(!app)
        return;

        let action = this.appActionCreater.updateActiveApp(app);
        this.props.dispatch(action);
    }

    getMapOfApps(apps) {
        var mapOfApps = {};
        apps.map(app => {
            mapOfApps[app.id] = app;
        });

        return mapOfApps;
    }

    generateAppList = (app) => {
        return (<li className="app-li" key={app.id} id={app.id} onClick={this.handleAppListClick}>
            <a href="#" id={app.id}>{app.name}</a>
        </li>)
    }

    handleAppListClick(event) {
        this.updateActiveApp(this.state.allUserApps[event.target.id]);
        this.toggleAppList();
    }

    toggleAppList() {
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