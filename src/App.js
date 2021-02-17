import './App.css';
import {SignUp} from "./SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import {Sign_Up_Valid} from "./Sign_Up_Valid/Sign_UP_Valid";
import {SignUp_HOOK} from "./SignUp_HOOK/SignUp_HOOK";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignUp_HOOK/>
                    {/*<Sign_Up_Valid/>*/}
                </Route>
                <Route path="/SignUp">
                    <SignUp/>
                </Route>
                <Route path="/SignUpSuccess">
                    <p>Sign Up Successfully</p>
                </Route>
                <Route path="/SignIn">
                    <p>Sign In</p>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
