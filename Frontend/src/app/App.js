// import react from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Authenticate/login";
import Signup from "../components/Authenticate/Signup";
import "./App.css"

function App() {

  return (
    <div>
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
