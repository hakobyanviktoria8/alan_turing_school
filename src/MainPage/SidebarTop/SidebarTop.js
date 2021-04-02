import React from 'react';
import "./SidebarTop.css";
import {Link, useRouteMatch, useLocation} from "react-router-dom";
import messages from "./images/Messages.svg"
import notifications from "./images/Notifications.svg"
import user from "./images/User.svg"

const SidebarTop = (props) => {
    let {url} = useRouteMatch();
    let location = useLocation();
    let title = location.pathname.split("/")[2]?.replace("-", " ");
    let edu_title = location.pathname.split("/")[2] === "education";

    return (
        <div className={`${edu_title ? "rightbar_activ" : ""} SidebarTop`}>
            <h3 className={"main_title"}>{title ? title[0].toUpperCase() + title.slice(1)
                :
                "Main page"}
            </h3>
            <div>
                <Link to={`${url}/messages`}>
                    {
                        title === "messages" ? "" : <img src={messages} alt=""/>
                    }
                </Link>
                <Link to={`${url}/notifications`}>
                    {
                        title === "notifications" ? "" : <img src={notifications} alt=""/>
                    }

                </Link>
                <Link to={`${url}/my-account`}>
                    <img className={"user_img"} src={user} alt=""/>
                </Link>
            </div>
        </div>
    )
};

export default SidebarTop