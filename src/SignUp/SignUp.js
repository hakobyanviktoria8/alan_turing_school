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

    // const classes = useStyles();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi " + email + " " +password)
    };
    console.log("hello" + email + " " +password);
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
                            <form action="#" onSubmit={handleSubmit} noValidate autoComplete="off" method={"post"}>
                                <TextField
                                    id="standard-search"
                                    label= {<span><EmailIcon/> Email</span>}
                                    type="email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                    className="input"
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
                                <Button className="btnSignUp" color="primary" type="submit" variant="contained"  disableElevation disabled={!checkedAgree}>
                                    Sign Up
                                </Button>




                                {/*<label>*/}
                                    {/*<input className={"input"} type="email" placeholder={"Email"} value={email} onChange={handleChangeEmail}/>*/}
                                {/*</label>*/}
                                {/*<label>*/}
                                    {/*<input className={"input"} type="password" placeholder={"Password"} value={password} onChange={handleChangePassword}/>*/}
                                {/*</label>*/}
                                {/*<label>*/}
                                    {/*<input className={"input"} type="password" placeholder={"Confirm Password"} value={password} onChange={handleChangePassword}/>*/}
                                {/*</label>*/}
                                {/*<label className={"d-flex"}>*/}
                                    {/*<input type="checkbox" checked={checkedAgree} onChange={()=>setCheckedAgree(!checkedAgree)}/>*/}
                                    {/*I accept the*/}
                                    {/*<ModalComponent title={"Terms of Use"}/> &*/}
                                    {/*<ModalComponent title={"Privacy Policy"}/>*/}
                                {/*</label>*/}
                                {/*<label className={"signUpBtn"}>*/}
                                    {/*<input type="submit" value="Sign Up" disabled={!checkedAgree} />*/}
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
