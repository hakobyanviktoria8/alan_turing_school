import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./SignUp.css";
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";
import ModalComponent from "./ModalComponent";
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import axios from "axios";


export function SignUp(props){
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordErrorMassage, setPasswordErrorMassage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChangeEmail = (event) => {
        const reg = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
        if (reg.test(event.target.value)) {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
        setEmail(event.target.value);

    };
    const handleChangePassword = (event) => {
        if (/(?=.{8,})/.test(event.target.value)) {
            setPasswordValid(false);
            setPasswordErrorMassage("Length 8 character")

        } else if (/(?=.*[a-z])/.test(event.target.value)) {
            setPasswordValid(false);
            setPasswordErrorMassage("Password contain a-z charakters")
        }  else {
            setPasswordValid(true)
        }
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        //password === confirmPassword
        setConfirmPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password === confirmPassword) {
            console.log(email + " " +password);
            sendDetailsToServer()
        } else {
            alert('Passwords do not match');
        }
    };

    const sendDetailsToServer = () => {
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
                            <form noValidate autoComplete="off" method={"post"}>
                                <TextField
                                    id="standard-search"
                                    label= {<span><EmailIcon/> Email</span>}
                                    type="email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                    className="input"
                                    error={emailValid}
                                    helperText={emailValid? "Error" :""}
                                />
                                <TextField
                                    id="standard-password-input"
                                    label={<span><LockIcon/> Password</span>}
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    className="input"
                                    error={passwordValid}
                                    helperText={passwordErrorMassage}
                                />
                                <TextField
                                    id="standard-password-input"
                                    label={<span><LockIcon/> Confirm Password</span>}
                                    type="password"
                                    autoComplete="current-password"
                                    value={confirmPassword}
                                    onChange={handleChangeConfirmPassword}
                                    className="input"
                                />
                                <label className={"d-flex agreeToRules"}>
                                    <input type="checkbox" checked={checkedAgree} onChange={()=>setCheckedAgree(!checkedAgree)}/>
                                    I accept the
                                    <ModalComponent title={"Terms of Use"}/> &
                                    <ModalComponent title={"Privacy Policy"}/>
                                </label>
                                <Button onClick={handleSubmit} className="btnSignUp" color="primary" type="submit" variant="contained"  disableElevation disabled={!checkedAgree}>
                                    Sign Up
                                </Button>
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

