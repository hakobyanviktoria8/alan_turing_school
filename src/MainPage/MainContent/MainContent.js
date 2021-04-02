import React from 'react';
import "./MainContent.css";
import {Switch, Route, useRouteMatch, useLocation} from "react-router-dom";

const MainContent = (props) => {
    let {path} = useRouteMatch();
    let location = useLocation();
    let edu_title = location.pathname.split("/")[2] === "education";

    return (
        <div className={`${edu_title ? "rightbar_activ" : ""} MainContent`}>
            <Switch>
                <Route exact path={path}>
                    <h1>main page</h1>
                </Route>
                <Route path={`${path}/education`}>
                    <h1>education</h1>
                </Route>
                <Route path={`${path}/calendar`}>
                    <h1>calendar</h1>
                </Route>
                <Route path={`${path}/messages`}>
                    <h1>messages</h1>
                </Route>
                <Route path={`${path}/notifications`}>
                    <h1>notifications</h1>
                </Route>
                <Route path={`${path}/my-account`}>
                    <h1>my Account</h1>
                </Route>
            </Switch>
        </div>
    )
};

export default MainContent