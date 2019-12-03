import React from "react";
import "./Panel.css"

class Panel extends React.Component {

    render() {
        const fxSearchBox = {
            "height": "36px",
            "border-radius": "6px"
        }

        return (
            <React.Fragment>
            <div className="four wide column" >
                {/* style={{"paddingLeft": "22px"}} */}

                {/* <!-- Search Subscribers --> */}

                <div className="ui category search">
                    <div className="ui fluid icon input">
                        <input
                            className={fxSearchBox}
                            type="text"
                            placeholder="Search anything..."
                        />
                        <i className="search icon" ></i>
                    </div>
                    <div className="results"></div>
                </div>

                {/* <!-- Options --> */}

                <h5 className="ui top attached header" style={{"marginTop": "14px"}}>
                    Options
                </h5>
                <div className="ui attached segment">
                    <div className="ui form">
                        <div className="grouped fields">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked" onChange="test" />
                                    <label>All Subscribers</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" onChange="test" />
                                    <label>On-boarded Subscribers</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" onChange="test" />
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
            </React.Fragment>
        );
    }
};

export default Panel;