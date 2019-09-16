import React from 'react'


export default class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    render() {
        return (
            <div className="profile-menu">
                 <a onClick={this.handleClick} id={this.props.id} className="profile-icon" href="#" ><img id={this.props.id} src={this.props.iconImgSrc} width="60px" /></a>
                <div className="profile-menu-wrapper">
                    <ul className="profile-menu-list">
                        <li className="profile-menu-li">
                            <a href="#">Amandeep</a>
                        </li>
                        <li className="profile-menu-li">
                            <a href="#">Logout</a>
                        </li>
                    
                    </ul>
                </div>
               
            </div>



        )
    }

    handleClick(event) {

        if (event.target.id == "" || event.target.id == "undefined")
            return;


    }

}
