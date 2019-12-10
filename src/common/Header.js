import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


class Header extends React.Component {

    render() {
        console.log("Header Props : ", this.props);
        return (
            <div>
                <div className="ui item fx-header">
                    <div className="ui grid">
                        <div className="left aligned eight wide column">
                            <h1 className="ui header" style={{"paddingTop": "14px"}}>
                                <a className="ui teal big circular label" href="www.google.com">Y</a>
                                &nbsp;{this.props.props.provider.name}
                            </h1>
                        </div>
                        <div className="right aligned eight wide column">
                            <div className="fx-right-menu">
                                <Link className="ui image large label" to="/home">
                                    <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" alt="User avatar"/>
                                    {this.props.props.user.name}
                                </Link>

                                <Link className="ui red icon button" to="/login" style={{"marginLeft": "14px"}}>
                                    <i className="sign-out icon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui divider"></div>
            </div>
        );
    }
}

export default Header;