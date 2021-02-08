import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./../SignUp/SignUp.css";
import logo from "./../SignUp/img/logo.png";
import website from "./../SignUp/img/Website.png";
import facebook from "./../SignUp/img/Facebook.png";
import linkedin from "./../SignUp/img/Linkedin.png";

export function SignUpSuccess(props) {
    return(
        <div className={"SignUpSuccess"}>
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
                        <div className={"headerRightTop"}>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry message. Lorem Ipsum is simply dummy text of the printing and typesetting industry message. </p>
                        </div>
                        <div className={"headerRightBottom"}>
                            <a href="" className={"mb-1"}>admin@alanturingschool.net</a>
                            <a href="tel:+374 00 000000" className={"mb-3"}> +374 00 000000</a>
                            <div className={"headerRightBottomLinks"}>
                                <a href="" className={"m-2"}><img src={website} alt=""/></a>
                                <a href="" className={"m-2"}><img src={facebook} alt=""/></a>
                                <a href="" className={"m-2"}><img src={linkedin} alt=""/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}