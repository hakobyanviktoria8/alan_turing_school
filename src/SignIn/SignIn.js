import React,{useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import  { Link } from "react-router-dom";
import "./../SignUp/SignUp.css";
import logo from "./../img/logo.png";

export function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + email + " " +password)
    };
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };
    const handlePassword = (event) => {
        setPassword(event.target.value)
    };

    return (
        <div className = {"SignUpSuccess"}>
            <Container fluid className = {"SignUP"}>
                <Row>
                    <Col lg = {"7"} className = {"border p-0"}>
                        <div className = {"bgSignUp"}>
                            <div className = {"logoWrap"}>
                                <img src = {logo} alt = ""/>
                            </div>
                            <div className = {"headerLeftText"}>
                                <h1>Welcome Back</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur ex officia officiis possimus.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg = {"5"} className = {"border"}>
                        <div className = {"headerRightText"}>
                            <div>
                                <h2>Sign In</h2>
                            </div>
                            <div>
                                <form action = "" onSubmit = {handleSubmit}>
                                    <label>
                                        <input className = {"input"} type = "email" placeholder = {"Email"} value = {email} onChange = {handleEmail}/>
                                    </label>
                                    <label>
                                        <input className = {"input"} type = "password" placeholder = {"Password"} value = {password} onChange = {handlePassword}/>
                                    </label>
                                    <a href = "">Forgot Password?</a>
                                    <br/>
                                    <br/>
                                    <label className = {"signInBtn"}>
                                        <input className = {"input"} type = "submit" value = "Sign In" disabled = {email} />
                                    </label>
                                </form>
                            </div>
                            <div>
                                <p>New user <Link to = "/SignUp">Sign Up</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}