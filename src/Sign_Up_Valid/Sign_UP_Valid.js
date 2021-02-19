import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Sign_Up_Valid.css";
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";
import ModalComponent from "../SignUp/ModalComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { sha256, sha224 } from 'js-sha256';



export function Sign_Up_Valid(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCash, setPasswordCash] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        sendDetailsToServer()
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value.split("").filter(x=>x===" "?"":x).join(""));
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        let hash = sha256.create().update(event.target.value.split("").filter(x => x === " " ? "" : x).join("")).hex();
        setPasswordCash(hash);
    };
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value.split("").filter(x => x === " "? "" : x).join(""));
    };

    const sendDetailsToServer = () => {
        // setError(null);
        const payload= {
            "email": email,
            "password": passwordCash,
        };
        // axios.post('User/PostUserItem', payload)
        //     .then(function (response) {
        //         if(response.statusText === "OK"){
        //             setSuccessMessage( 'Registration successful. Redirecting to home page..');
        //             // redirectToHome();
        //             setError(null)
        //         } else{
        //             alert("Some error ocurred");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        // });
        console.log(payload)
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
                                            value: 8,
                                            message: "Min length 8 character."
                                        },
                                        maxLength:{
                                            value: 15,
                                            message: "Max length 15 character."
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
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                                {errors.email ?  <p>{errors.email.message}</p> : null}

                                <input
                                    ref = {register({
                                        required: "Password is required",
                                        minLength:{
                                            value: 8,
                                            message: "Min length 8 character."
                                        },
                                        maxLength:{
                                            value: 15,
                                            message: "Max length 15 character."
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
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                                {errors.password ? <p>{errors.password.message}</p> : null}

                                <input ref = {register({
                                    required: "Confirm Password is required",
                                    validate: value => value === password ? null : "Do not match passwords"

                                })}
                                       name={"confirmPassword"}
                                       className={"input"}
                                       type="password"
                                       value={confirmPassword}
                                       onChange={handleChangeConfirmPassword}
                                />
                                {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

                                <label className={"d-flex agreeToRules"}>
                                    <input ref = {register({required: true})} name={"checked"} type="checkbox" checked={checkedAgree} onChange={()=>setCheckedAgree(!checkedAgree)}/>
                                    I accept the
                                    <ModalComponent title={"Terms of Use"}/> &
                                    <ModalComponent title={"Privacy Policy"}/>
                                </label>

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

