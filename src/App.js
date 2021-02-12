import './App.css';
import {SignIn} from "./SignIn/SignIn";
import {SignUpSuccess} from "./SignUpSuccess/SignUpSuccess";
import {SignUp} from "./SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {SignInSuccess} from "./SignInSuccess/SignInSuccess";
import {ForgetPassword} from "./ForgetPassword/ForgetPassword";
import {SendLink} from "./SendLink/SendLink";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignUp/>
                </Route>
                <Route path="/SignUp">
                    <SignUp/>
                </Route>
                <Route path="/ForgotPassword">
                    <ForgetPassword/>
                </Route>
                <Route path="/SendLink">
                    <SendLink/>
                </Route>
                <Route path="/SignUpSuccess">
                    <SignUpSuccess/>
                </Route>
                <Route path="/SignIn">
                    <SignIn/>
                </Route>
                <Route path="/SignInSuccess">
                    <SignInSuccess/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
