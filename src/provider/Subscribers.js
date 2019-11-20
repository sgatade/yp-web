import React from "react";
import "./Subscribers.css";

class Subscribers extends React.Component {
    render() {
        return (
            <div className="twelve wide column fx-subs-main">
                <div className="ui center aligned container">
                    <button className="ui left floated yellow labelled icon button">
                        <i className="sync alternate icon"></i>
                        &nbsp; Refresh Subscribers List
                    </button>
                    <div className="ui pagination menu">
                        <a className="item" href="www.google.com">
                            <i className="caret left icon"></i>
                        </a>
                        <a className="active item" href="www.google.com">
                            1
                        </a>
                        <a className="item" href="www.google.com">
                            2
                        </a>
                        <a className="item" href="www.google.com">
                            3
                        </a>
                        <a className="item" href="www.google.com">
                            <i className="caret right icon"></i>
                        </a>
                    </div>
                    <button className="ui right floated blue labelled icon button">
                        <i className="user plus icon"></i>
                        &nbsp; Onboard new Subscriber
                    </button>
                </div>
                <table className="ui selectable stripped table">
                    <thead>
                        <tr>
                            <th className="four wide">Name</th>
                            <th className="two wide">Mobile</th>
                            <th className="four wide">Onboarded by</th>
                            <th className="two wide center aligned">Devices</th>
                            <th className="two wide center aligned">Status</th>
                            <th className="two wide">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jon Doe</td>
                            <td>+46783777387</td>
                            <td>Dominatrix Pvt. Ltd</td>
                            <td className="center aligned">2</td>
                            <td className="center aligned">Active</td>
                            <td className="fx-subs-actions">
                                <div className="ui icon buttons">
                                    <button className="ui olive button">
                                        <i className="address card outline icon"></i>
                                    </button>
                                    <button className="ui teal button">
                                        <i className="chart bar icon"></i>
                                    </button>
                                    <button className="ui yellow button">
                                        <i className="envelope outline icon"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td>+46748847474</td>
                            <td>Alpine Agency</td>
                            <td className="center aligned">1</td>
                            <td className="center aligned">Alpha</td>
                            <td className="fx-subs-actions">
                                <div className="ui icon buttons">
                                    <button className="ui olive button" title="View Subscriber details">
                                        <i className="address card outline icon"></i>
                                    </button>
                                    <button className="ui teal button" title="View activity">
                                        <i className="chart bar icon"></i>
                                    </button>
                                    <button className="ui yellow button" title="Send message">
                                        <i className="envelope outline icon"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Jhonny Doe</td>
                            <td>+4638839848498</td>
                            <td>Dominatrix Pvt. Ltd</td>
                            <td className="center aligned">1</td>
                            <td className="center aligned">Active</td>
                            <td className="fx-subs-actions">
                                <div className="ui icon buttons">
                                    <button className="ui olive button">
                                        <i className="address card outline icon"></i>
                                    </button>
                                    <button className="ui teal button">
                                        <i className="chart bar icon"></i>
                                    </button>
                                    <button className="ui yellow button">
                                        <i className="envelope outline icon"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Subscribers;