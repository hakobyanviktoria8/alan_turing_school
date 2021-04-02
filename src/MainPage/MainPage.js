import React from "react";
import "../SignUp/SignUp.css";
import {useLocation} from "react-router-dom";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import SidebarTop from "./SidebarTop/SidebarTop";
import MainContent from "./MainContent/MainContent";
import SidebarRight from "./SidebarRight/SidebarRight";

export function MainPage(props) {
    let location = useLocation();
    let edu_title = location.pathname.split("/")[2] === "education";

    return (
        <div className={"MainPage"}>
            <SidebarTop/>
            <SidebarLeft/>
            <MainContent/>
            <SidebarRight edu_arrow={edu_title}/>
        </div>
    )
}