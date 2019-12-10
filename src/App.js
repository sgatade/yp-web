import React from "react";
import Header from "./common/Header";
import Home from "./Home";
import Login from "./Login";

import { BrowserRouter, Route } from "react-router-dom";

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

    changeName = () => {
        this.setState({provider: {name: 'El Eye Walleck'}});
    }

    render () {
        return (
            <BrowserRouter>
                <Header props={this.state} />
                <div className="ui grid">
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    {/* <Panel props={this.state} />
                    <Subscribers props={this.state} /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;