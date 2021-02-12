import React,{useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./../SignUp/SignUp.css";
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";

export function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + email + " " +password)
    };

    return (
        <div className={"SignUpSuccess"}>
            <Container fluid className={"SignUP"}>
                <Row>
                    <Col lg={"7"} className={"border p-0"}>
                        <div className={"bgSignUp"}>
                            <div className={"logoWrap"}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className={"headerLeftText"}>
                                <h1>Welcome Back</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur ex officia officiis possimus ut. Soluta.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={"5"} className={"border"}>
                        <div className={"headerRightText"}>
                            <div>
                                <h2>Sign In</h2>
                            </div>
                            <div>
                                <form action="" onSubmit={handleSubmit}>
                                    <label>
                                        <input className={"input"} type="email" placeholder={"Email"} value={email}/>
                                    </label>
                                    <label>
                                        <input className={"input"} type="password" placeholder={"Password"} value={password}/>
                                    </label>
                                    <Link to="/ForgotPassword">Forgot Password?</Link>
                                    <label className={"signUpBtn"}>
                                        <Link to="/SignInSuccess">
                                            <input type="submit" value="Sign In" disabled={email} />
                                        </Link>
                                    </label>
                                </form>
                            </div>
                            <div>
                                <p>New user? <Link to="/SignUp"> Sign Up</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}