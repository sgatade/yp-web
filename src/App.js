import React from "react";
import Header from "./common/Header";
import Panel from "./provider/Panel";
import Subscribers from "./provider/Subscribers";

import "./App.css";

class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="ui grid fx-app-grid">
                    <Panel />
                    <Subscribers />
                </div>
            </div>
        );
    }
}

export default App;