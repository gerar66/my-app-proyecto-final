import "./App.css";
import Register from "./pages/Register/register";
import Login from "./pages/Login/Login";
import {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home.js";


function App() {
  const [Email, setEmail] = useState();
  const [Clave, setClave] = useState();
  const [NombreCompleto, setNombreCompleto] = useState();
  const [UserName, setUserName] = useState();

  return (
    
    <Router>
      <Switch>
        <Route path="/home">
          {/* localStorage.getItem("idDeUsuario") */true ? (
            <Home/>
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route path="/login">
          {localStorage.getItem("idDeUsuario") ? (
            <Redirect to="/home" />
          ) : (
            <Login/>
          )}
        </Route>
        <Route path="/register">
          <Register
            Email={Email}
            Clave={Clave}
            NombreCompleto={NombreCompleto}
            UserName={UserName}
          />
        </Route>
        <Route path="/">
          {/* localStorage.getItem("idDeUsuario") */true ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
