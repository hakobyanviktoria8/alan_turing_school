import React from 'react';
import "./SidebarLeft.css";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import logo from './images/Logo_AlanTuring.png';
import eduIcon from './images/_education.svg';
import eduIconActiv from './images/Education.svg';
import calendarIcon from './images/_calendar.svg';
import calendarIconActiv from './images/Calendar.svg';

const SidebarLeft = (props) => {
    let { url } = useRouteMatch();
    let location = useLocation();
    // console.log(location.pathname.split("/")[2]);

    return (
    <div className="SidebarLeft">
        <Link to={`${url}`}>
            <img src={logo} alt="logo"/>
        </Link>
        <Link to={`${url}/education`}>
            {location.pathname.split("/")[2] === "education" ?
                <img className={"icon activ_icon"} src={eduIconActiv} alt="education"/>
                :
                <img className={"icon"} src={eduIcon} alt="education"/>
            }
        </Link>
        <Link to={`${url}/calendar`}>
            {location.pathname.split("/")[2] === "calendar" ?
                <img className={"icon activ_icon"} src={calendarIconActiv} alt="education"/>
                :
                <img className={"icon"} src={calendarIcon} alt="calendar"/>
            }
        </Link>
    </div>
  );
};

export default SidebarLeft;