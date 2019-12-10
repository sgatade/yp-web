import React from "react";

import Panel from "./provider/Panel";
import Subscribers from "./provider/Subscribers";

const Home = () => {
    return (
        <div>
            <Panel />
            <Subscribers />
        </div>
    )
};

export default Home;