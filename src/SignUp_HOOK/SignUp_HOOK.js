import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import "../SignUp/SignUp.css";
import logo from "./../img/logo.png";
import  {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";



export function SignUp_HOOK(props){
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordErrorMassage, setPasswordErrorMassage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkedAgree, setCheckedAgree] = useState(false);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if(password === confirmPassword) {
    //         console.log(email + " " +password);
    //         sendDetailsToServer()
    //     } else {
    //         alert('Passwords do not match');
    //     }
    // };
    //
    // const sendDetailsToServer = () => {
    //     if(email.length && password.length) {
    //         setError(null);
    //         const payload={
    //             "email": email,
    //             "password": password,
    //         };
    //         axios.post('User/PostUserItem', payload)
    //             .then(function (response) {
    //                 if(response.status === 200){
    //                     setSuccessMessage( 'Registration successful. Redirecting to home page..');
    //                     // redirectToHome();
    //                     setError(null)
    //                 } else{
    //                     alert("Some error ocurred");
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     } else {
    //         alert('Please enter valid username and password');
    //     }
    // };

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
                                <TextField
                                    id="standard-search"
                                    label= {<span><EmailIcon/> Email</span>}
                                    type="email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                    className="input"

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
                                                [/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)) ||
                                                "The password must contain uppercase, lowercase, number and a special character."
                                            )
                                        }
                                    })}
                                    name={"password"}
                                />
                                {errors.password ? <p>{errors.password.message}</p> : null}
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
                                <input className={"input"} type="submit" value="Sign Up"/>
                                {/*<label className={"d-flex agreeToRules"}>*/}
                                    {/*<input type="checkbox" checked={checkedAgree} onChange={()=>setCheckedAgree(!checkedAgree)}/>*/}
                                    {/*I accept the*/}
                                {/*</label>*/}

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

