import './App.css';
import {SignIn} from "./SignIn/SignIn";
import {SignUpSuccess} from "./SignUpSuccess/SignUpSuccess";
import {SignUp} from "./SignUp/SignUp";


function App() {
  return (
    <div className="App">
        <SignUp/>
        <SignUpSuccess/>
        <SignIn/>
    </div>
  );
}

export default App;
