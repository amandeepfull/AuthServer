import React from 'react'

export default class LeftSideBarIconBase extends React.Component {
constructor(props){
    super(props);
    this.getStyle = this.getStyle.bind(this);

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
            <a className="left-side-bar-icon-base" style={style} href="#" id={this.props.id}><img src={this.props.iconImgSrc} width="20px" /><span className="left-side-bar-icon-title" title={this.props.name} >{this.props.name}</span></a>
        )
      }


      getStyle() {
        if ((this.props.activeView === "apps" || this.props.activeView === "profile") && this.props.activeView === this.props.id) {
            return this.style.activeView;
        } else {
            return this.style.normalView;
        }
    }
    }