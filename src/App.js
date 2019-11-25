import React from "react";
import Header from "./common/Header";
import Panel from "./provider/Panel";
import Subscribers from "./provider/Subscribers";

import "./App.css";

class App extends React.Component {
    
    // State
    state = {
        provider: {
            name: "Propertix Bank Pvt. Ltd."
        },
        user: {
            name: "Elliot Harper"
        }
    };

    render () {
        return (
            <div>
                <Header props={this.state} />
                <div className="ui grid">
                    <Panel props={this.state} />
                    <Subscribers props={this.state} />
                </div>
            </div>
        );
    }
}

export default App;