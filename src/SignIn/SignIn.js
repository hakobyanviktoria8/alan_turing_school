import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./../SignUp/SignUp.css";
import logo from "./../img/logo.png";
import axios from "axios/index";
import {sha256} from "js-sha256";
import {useForm} from "react-hook-form/dist/index";
import  { Link, useHistory } from "react-router-dom";
import {API_BASE_URL} from '../constants/apiConstants';

export function SignIn(props) {
    const { register, handleSubmit, errors, setError } = useForm({mode: 'onChange'});
    let history = useHistory();

    const onSubmit = data => {
        const payload= {
            "mail": data.email,
            "password": sha256.create().update(data.password).hex(),
        };
        console.log(payload);

        // axios.post(API_BASE_URL + '/User', payload)
        //     .then(function (response) {
        //         if(response.status === 201){
        //             history.push("/SignInSuccess");
        //         } else {
        //             console.log(errors)
        //         }
        //     })
        //     .catch(function (error) {
        //         if (error.response.status === 409) {
        //             setError("email", {message: "Email is already used"});
        //         }
        //     });
    };


    return (
        <div className = {"SignUpSuccess"}>
            <Container fluid className = {"SignUP"}>
                <Row>
                    <Col lg = {"7"} className = {"p-0"}>
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
                    <Col lg = {"5"}>
                        <div className = {"headerRightText"}>
                            <div>
                                <h2>Sign In</h2>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" method={"post"}>
                                    <Row>
                                        <Col lg={12}>
                                            <input
                                                ref = {register({
                                                    required: "Email is required"})
                                                }
                                                name={"email"}
                                                className={"input"}
                                                type="email"
                                                placeholder={"Email"}
                                            />
                                        </Col>
                                    </Row>
                                    {errors.email ? <span>{errors.email.message}</span> : null}
                                    <br/>
                                    <Row>
                                        <Col lg={12}>
                                            <input
                                                ref = {register({
                                                    required: "Password is required"
                                                })}
                                                name={"password"}
                                                className={"input"}
                                                type="password"
                                                placeholder={"Password"}
                                             />
                                        </Col>
                                    </Row>
                                    {errors.password ? <span>{errors.password.message}</span> : null}
                                    <br/>
                                    <a href = "">Forgot Password?</a>
                                    <br/>
                                    <br/>
                                    <label className = {"signInBtn"}>
                                        <input className = {"input"} type = "submit" value = "Sign In" />
                                    </label>
                                </form>
                            </div>
                            <div>
                                <p className={"text-center"}>New user <Link to = "/SignUp">Sign Up</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}