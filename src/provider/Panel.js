import React from "react";
import "./Panel.css"

class Panel extends React.Component {
    render() {
        const fxSearchBox = {
            "height": "36px",
            "border-radius": "6px",
        }
    
        return (
            <div className="four wide column fx-panel-main">

                {/* <!-- Search Subscribers --> */}

                <div className="ui category search">
                    <div className="ui fluid icon input">
                        <input
                            className="prompt " + {fxSearchBox}"
                            type="text"
                            placeholder="Search anything..."
                        />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>

                {/* <!-- Options --> */}

                <h5 className="ui top attached header fx-panel-options">
                    Options
                </h5>
                <div className="ui attached segment">
                    <div className="ui form">
                        <div className="grouped fields">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked" />
                                    <label>All Subscribers</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>On-boarded Subscribers</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>All Subscribers</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="ui attached header">
                    Filter
                </h5>
                <div className="ui bottom attached segment">
                    <p>Humans don't think of lions as being like cats, but they are.</p>
                </div>
            </div>
        );
    }

};

export default Panel;