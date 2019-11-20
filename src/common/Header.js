import React from "react";
import styles from "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="ui item fx-header">
                    <div className="ui grid">
                        <div className="left aligned eight wide column">
                            <h1 className="ui header" style={{"paddingTop": "14px"}}>
                                <a className="ui teal big circular label" href="www.google.com">Y</a>
                                &nbsp;Dominatrix Pvt. Ltd.
                            </h1>
                        </div>
                        <div className="right aligned eight wide column">
                            <div className="fx-right-menu">
                                <a className="ui image large label" href="www.google.com">
                                    <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" alt="User avatar"/>
                                    Elliot J. Sulphur
                                </a>

                                <a className="ui red icon button" href="www.google.com" style={{"marginLeft": "14px"}}>
                                    <i className="sign-out icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui divider fx-divider-main"></div>
            </div>
        );
    }
}

export default Header;