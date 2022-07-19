import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/createEmpStyle.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="layout">
      <h2>Home</h2>
      <div>
        <InputField label="User Name" onchange={() => {}} />
        <InputField label="Password" />
      </div>
      <Button
        className="login"
        label="Login"
        handleClick={() => navigate("/employeeList")}
      />
    </div>
  );
}

export default App;
