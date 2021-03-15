import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {SignUp} from "./SignUp/SignUp";
import {SignUpSuccess} from "./SignUpSuccess/SignUpSuccess";
import {SignIn} from "./SignIn/SignIn";
import {SignInSuccess} from "./SignInSuccess/SignInSuccess";

function App() {
  return (
    <div className = "App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignUp/>
                </Route>
                <Route path="/SignUp">
                    <SignUp/>
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
