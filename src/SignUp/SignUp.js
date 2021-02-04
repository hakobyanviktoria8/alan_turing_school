import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./SignUp.css";
// import logoBig from "img/logoBig.png";

export function SignUP(props){
    return(
        <Container fluid className={"SignUP"}>
            <Row>
                <Col lg={"7"} className={"border p-0"}>
                    <div  className={"bgSignUp"}>
                        {/*<img src={logoBig} alt=""/>*/}
                        <div className={"header-left"}>
                            <h1>Lorem Ipsum </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequuntur ex officia officiis possimus ut. Soluta.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={"5"} className={"border"}> </Col>
            </Row>
        </Container>
    )
}
