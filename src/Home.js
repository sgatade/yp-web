import React from "react";

import Panel from "./provider/Panel";
import Subscribers from "./provider/Subscribers";

const Home = () => {
    return (
        <React.Fragment>
            <Panel />
            <Subscribers />
        </React.Fragment>
    )
};

export default Home;