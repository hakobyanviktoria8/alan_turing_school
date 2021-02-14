import './App.css';
import {SignUp} from "./SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
