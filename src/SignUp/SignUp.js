import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./SignUp.css";
import logo from "./img/logo.png";

export function SignUp(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + email + " " +password)
    };


    return(
        <Container fluid className={"SignUP"}>
            <Row>
                <Col lg={"7"} className={"border p-0"}>
                    <div  className={"bgSignUp"}>
                        <div className={"logoWrap"}>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={"headerLeftText"}>
                            <h1>Lorem Ipsum </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequuntur ex officia officiis possimus ut. Soluta.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={"5"} className={"border"}>
                    <div className={"headerRightText"}>
                        <div>
                            <h2>Sign Up</h2>
                        </div>
                        <div>
                            <form action="" onSubmit={handleSubmit}>
                                <label>
                                    <input className={"input"} type="email" placeholder={"Email"} value={email} onChange={handleChangeEmail}/>
                                </label>
                                <label>
                                    <input className={"input"} type="password" placeholder={"Password"} value={password} onChange={handleChangePassword}/>
                                </label>
                                <label>
                                    <input className={"input"} type="password" placeholder={"Confirm Password"} value={password} onChange={handleChangePassword}/>
                                </label>
                                <label>
                                    <input type="checkbox" checked={checkedAgree} onChange={()=>setCheckedAgree(!checkedAgree)}/>
                                    I accept the <span><a href="">Terms of Use</a> & <a href="">Privacy Policy</a></span>
                                </label>
                                <label className={"signUpBtn"}>
                                    <input type="submit" value="Sign Up" disabled={!checkedAgree} />
                                </label>
                            </form>
                        </div>
                        <div>
                            <p>Already have an account? <a href="">Sign In</a></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
