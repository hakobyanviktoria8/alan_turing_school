import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Sign_Up_Valid} from "./Sign_Up_Valid/Sign_UP_Valid";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Sign_Up_Valid/>
                </Route>
                <Route path="/SignUp">
                    <Sign_Up_Valid/>
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
