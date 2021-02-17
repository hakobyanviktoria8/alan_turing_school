import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Sign_Up_Valid.css";
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";
import ModalComponent from "../SignUp/ModalComponent";
import { useForm } from "react-hook-form";
// import TextField from '@material-ui/core/TextField';
// import EmailIcon from '@material-ui/icons/Email';
// import LockIcon from '@material-ui/icons/Lock';
// import Button from '@material-ui/core/Button';
// import axios from "axios";


export function Sign_Up_Valid(props){
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordErrorMassage, setPasswordErrorMassage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        //password === confirmPassword
        setConfirmPassword(event.target.value);
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if(password === confirmPassword) {
    //         console.log(email + " " +password);
    //         // sendDetailsToServer()
    //     } else {
    //         alert('Passwords do not match');
    //     }
    // };

    /*const sendDetailsToServer = () => {
        if(email.length && password.length) {
            setError(null);
            const payload={
                "email": email,
                "password": password,
            };
            axios.post('User/PostUserItem', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setSuccessMessage( 'Registration successful. Redirecting to home page..');
                        // redirectToHome();
                        setError(null)
                    } else{
                        alert("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert('Please enter valid username and password');
        }
    };*/

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
                                    ref = {register({required: true, minLength: 8})}
                                    name={"email"}
                                    className={"input"}
                                    type="email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                                {errors.email && errors.email.type === "required" && (<p>Email is required</p>)}
                                {errors.email && errors.email.type === "minLength" && (<p>Email min length is 8</p>)}
                                <input
                                    ref = {register({
                                        required: "Password is required",
                                        minLength:{
                                            value: 8,
                                            message: "Length 8 char."
                                        },
                                        validate: (value) => {
                                            return (
                                                [/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)) ||
                                                    "The password must contain uppercase, lowercase, number and a special character."
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

                                <input ref = {register({required: true})} name={"confirm_password"} className={"input"} type="password" value={confirmPassword} onChange={handleChangeConfirmPassword}/>

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

