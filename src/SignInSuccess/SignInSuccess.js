import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../SignUp/SignUp.css";
import logo from "../img/logo.png";
import website from "../img/Website.png";
import facebook from "../img/Facebook.png";
import linkedin from "../img/Linkedin.png";

export function SignInSuccess(props) {
    return(
        <div className={"SignUpSuccess"}>
            <Container fluid className={"SignUP"}>
                <Row>
                    <Col lg={"7"} md={"7"} className={"p-0"}>
                        <div  className={"bgSignUp"}>
                            <div className={"logoWrap"}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className={"headerLeftText"}>
                                <h1>Lorem Ipsum </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur ex officia officiis possimus.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={"5"} md={"5"} className={"p-0"}>
                        <div className={"headerRightTop"}>
                            <h2>Sign in successfully</h2>
                            <p></p>
                            <p>Please check your email. The of the printing and typesetting industry message.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry message.
                            </p>
                        </div>
                        <div className={"headerRightBottom"}>
                            <a href="https://www.alanturingschool.net/" className={"mb-1"}>admin@alanturingschool.net</a>
                            <a href="tel:+374 00 000000" className={"mb-3"}> +374 00 000000</a>
                            <div className={"headerRightBottomLinks"}>
                                <a href="https://www.alanturingschool.net/" className={"m-2"}><img src={website} alt=""/></a>
                                <a href="https://www.facebook.com/PhilosophyOfProgramming" className={"m-2"}><img src={facebook} alt=""/></a>
                                <a href="https://www.linkedin.com/company/alanturingschool/" className={"m-2"}><img src={linkedin} alt=""/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}