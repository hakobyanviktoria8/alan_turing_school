import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./SignUp.css";
import logo from "./../img/logo.png";
import  { Link, useHistory } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { sha256 } from 'js-sha256';
import {API_BASE_URL} from '../constants/apiConstants';

export function SignUp(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCash, setPasswordCash] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);
    const { register, handleSubmit, errors, setError } = useForm();
    let history = useHistory();

    const onSubmit = data => {
        sendDetailsToServer()
    };

    //change email
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    //change password and hash 64 simbole
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        let hash = sha256.create().update(event.target.value).hex();
        setPasswordCash(hash);
    };

    //change confirm password
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    //data send to server call form onSubmit
    const sendDetailsToServer = () => {
        const payload= {
            "mail": email,
            "password": passwordCash,
        };
        // console.log(payload);

        axios.post(API_BASE_URL + '/User', payload)
            .then(function (response) {
                if(response.status === 201){
                    history.push("/SignUpSuccess");
                } else {
                    console.log(errors)
                }
            })
            .catch(function (error) {
                if (error.response.status === 409) {
                    setError("email", {message: "Email is already used"});
                }
            });
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
                            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" method={"post"}>
                                <input
                                    ref = {register({
                                        required: "Email is required",
                                        minLength:{
                                            value: 10,
                                            message: "Min length 10 character."
                                        },
                                        maxLength:{
                                            value: 50,
                                            message: "Max length 50 character."
                                        },
                                        validate: (value) => {
                                            return (
                                                [/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/].every(pattern => pattern.test(value)) ||
                                                "Invalid email."
                                            )
                                        }
                                    })}
                                    name={"email"}
                                    className={"input"}
                                    type="email"
                                    // value={email}
                                    onChange={(e) => handleChangeEmail(e)}
                                    placeholder={"Email"}
                                    id="email"
                                />
                                {errors.email ? <span>{errors.email.message}</span> : null}

                                <input
                                    ref = {register({
                                        required: "Password is required",
                                        minLength:{
                                            value: 8,
                                            message: "Min length 8 character."
                                        },
                                        maxLength:{
                                            value: 20,
                                            message: "Max length 20 character."
                                        },
                                        validate: (value) => {
                                            return (
                                                [/[a-z]/,/[A-Z]/,/[0-9]/].every(pattern => pattern.test(value)) ||
                                                "The password must contain uppercase, lowercase and number."
                                            )
                                        }
                                    })}
                                    name={"password"}
                                    className={"input"}
                                    type="password"
                                    // value={password}
                                    onChange={handleChangePassword}
                                    placeholder={"Password"}
                                    id="password"
                                />
                                {errors.password ? <span>{errors.password.message}</span> : null}

                                <input
                                    ref = {register({
                                    required: "Confirm Password is required",
                                    validate: value => value === password ? null : "Do not match passwords"

                                })}
                                   name={"confirmPassword"}
                                   className={"input"}
                                   type="password"
                                   // value={confirmPassword}
                                   onChange={handleChangeConfirmPassword}
                                   placeholder={"Confirm Password"}
                                    id="confirmPassword"
                                />
                                {errors.confirmPassword ? <span>{errors.confirmPassword.message}</span> : null}

                                <label className={"d-flex agreeToRules"}>
                                    <input
                                        ref = {register({
                                        required: "Are you agree"
                                    })}
                                       name={"checkedbtn"}
                                       type="checkbox"
                                       checked={checkedAgree}
                                       onChange={()=>setCheckedAgree(!checkedAgree)}
                                    />
                                    I accept the
                                    <ModalComponent title={"Terms of Use"}/> &
                                    <ModalComponent title={"Privacy Policy"}/>
                                </label>
                                {errors.checkedbtn ? <span>{errors.checkedbtn.message}</span> : null}

                                <input className={"input"} type="submit" value="Sign Up"/>
                            </form>
                        </div>
                        <div>
                            <p>Already have an account?
                                <Link to="/SignIn"> Sign In</Link>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

