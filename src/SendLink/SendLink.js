import React, { useState } from "react";
import "./SendLink.css";
import { Container, Row, Col } from 'reactstrap';
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";

export function SendLink (props){
    const [password, setPassword] = useState("");
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + password )
    };

    return(
        <div  className={"SendLink"}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className={"logoWrap"}>
                            <img src={logo} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <h2>Reset Password</h2>
                        </div>
                        <div>
                            <p>Enter your Email and we'll send you a link to reset your password</p>
                        </div>
                        <div>
                            <form action="" onSubmit={handleSubmit}>
                            <label>
                                <input className={"input"} type="password" placeholder={"Password"} value={password} onChange={handleChangePassword}/>
                            </label>
                            <label>
                                <input className={"input"} type="password" placeholder={"Confirm Password"} value={password} onChange={handleChangePassword}/>
                            </label>
                                <label className={"signUpBtn"}>
                                    <Link to="/SendLink">
                                        <input type="submit" value="Reset Password" disabled={password} />
                                    </Link>
                                </label>
                            </form>
                        </div>
                        <div>
                            <p>Back to <Link to="/SignIn"> Sign In</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}