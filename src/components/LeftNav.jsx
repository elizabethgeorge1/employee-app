//employee page left nav component
import { useNavigate } from "react-router-dom";
import "../styles/createEmpStyle.css";
const LeftNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="kvLogo">
        <img src={require("../assets/kv logo.png")} alt="kv logo" />
      </div>
      <aside className="leftNav">
        <button
          
          className="List"
          onClick={() => navigate("/employeeList")}
        >
          <div className="leftNavBtn">
            <img src={require("../assets/List.png")} alt="icon" />
            <div> Employee list</div>
          </div>
        </button>
      </aside>
    </>
  );
};
export default LeftNav;
