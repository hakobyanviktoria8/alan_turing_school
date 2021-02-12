import React, { useState } from "react";
import "./ForgotPassword.css";
import { Container, Row, Col } from 'reactstrap';
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";

export function ForgetPassword (props){
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + email )
    };

    return(
        <div  className={"ForgetPassword"}>
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
                        <div className={"ForgetPasswordRow"}>
                            <div>
                                <h2>Forgot Password?</h2>
                            </div>
                            <div>
                                <p>Enter your Email and we'll send you a link to reset your password</p>
                            </div>
                            <div>
                                <form action="" onSubmit={handleSubmit}>
                                    <label>
                                        <input className={"input"} type="email" placeholder={"Email"} value={email}/>
                                    </label>
                                    <label className={"signUpBtn"}>
                                        <Link to="/SendLink">
                                            <input type="submit" value="Send Link" disabled={email} />
                                        </Link>
                                    </label>
                                </form>
                            </div>
                            <div>
                                <p>Back to <Link to="/SignIn"> Sign In</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}