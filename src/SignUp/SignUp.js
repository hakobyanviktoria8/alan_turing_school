import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./SignUp.css";
import bgImg from "./img/bgSignUp.svg";
// import bg from "./img/Rectangle 1996.svg";

export function SignUP(props){
    return(
        <Container fluid className={"SignUP"}>
            <Row>
                <Col lg={"7"} className={"border p-0"}>
                    <div  style={{
                        backgroundImage: `url(${bgImg})`,
                        width: "100%",
                        height: "100vh",
                    }}
                          className={"bgSignUp"}> </div>
                </Col>
                <Col lg={"5"} className={"border"}> </Col>
            </Row>
        </Container>
    )
}
