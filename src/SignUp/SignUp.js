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
import { useForm } from "react-hook-form";


// import { makeStyles } from '@material-ui/core/styles';
// import {makeStyles} from "@material-ui/core/styles/index";
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

export function SignUp(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);
    // const [successMessage, setSuccessMessage] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handleSubmit1 = (data) => {
        console.log(data)
    };
    // const handleSubmit1 = (event) => {
    //     event.preventDefault();
    //     if(password === confirmPassword) {
    //         console.log("hi " + email + " " +password)
    //
    //         // sendDetailsToServer()
    //     } else {
    //         // props.showError('Passwords do not match');
    //         alert('Passwords do not match');
    //     }
    // };
    /*const sendDetailsToServer = () => {
        if(email.length && password.length) {
            // props.showError(null);
            const payload={
                "email": email,
                "password": password,
            };
            axios.post(API_BASE_URL+'User/PostUserItem', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setSuccessMessage( 'Registration successful. Redirecting to home page..');
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        // redirectToHome();
                        // props.showError(null)
                    } else{
                        // props.showError("Some error ocurred");
                        alert("Some error ocurred")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // props.showError('Please enter valid username and password')
            alert('Please enter valid username and password')
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
                            {/*user/signup*/}
                            <form noValidate autoComplete="off" method={"post"}>
                                <TextField
                                    id="standard-search"
                                    label= {<span><EmailIcon/> Email</span>}
                                    type="email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                    className="input"
                                    name="email"
                                    ref={register}
                                />
                                <TextField
                                    id="standard-password-input"
                                    label={<span><LockIcon/> Password</span>}
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    className="input"
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
                                <Button onClick={handleSubmit(handleSubmit1)} className="btnSignUp" color="primary" type="submit" variant="contained"  disableElevation disabled={!checkedAgree}>
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
