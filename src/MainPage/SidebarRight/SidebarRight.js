import React, {useState} from 'react';
import "./SidebarRight.css";

function SidebarRight(props) {

    const [bool, setBool] = useState("");
    console.log(props.edu_arrow);
    const handleClick = () => {
        setBool(!props.edu_arrow);

    };

    console.log(props.edu_arrow);

    props.edu_arrow ?
        [...document.querySelectorAll(".rightbar_activ")].map(x => x.style.right = "25rem")
        :
        [...document.querySelectorAll(".rightbar_activ")].map(x => x.style.right = "5rem");

    return (
        <div className="SidebarRight"
             style={{
                 display: props.edu_arrow ? "block" : "none",
                 right: props.edu_arrow ? "20rem" : "0"
             }}>
            <button className={"p-2"} onClick={handleClick}>___{props.edu_arrow ? ">" : "<"}___</button>
        </div>
    )
}

export default SidebarRight