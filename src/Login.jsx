import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/createEmpStyle.css";
import "./styles/login.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="illustrationSize"><img src={require("./assets/illustration.png")} alt="illustration"/></div>
      <div className="loginInput">
        <div>
          <img src={require("./assets/kv logo.png")} alt="kv logo" />
        </div>
        <div>
          <InputField label="User Name" onchange={() => {}} />
          <InputField label="Password" />
        </div>
        <Button
          className="loginButton"
          label="Login"
          handleClick={() => navigate("/employeeList")}
        />
      </div>
    </div>
  );
}

export default App;
