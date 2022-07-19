import "../styles/createEmpStyle.css";
const LeftNav=()=>{
    return(
        <aside>
        <div>
          <img src={require("../assets/kv logo.png") }alt="kv logo" />
        </div>
        <div className="List">
          <img src={require("../assets/List.png")} alt="icon" />
          <span className="empList"> Employee list</span>
        </div>
        </aside>
        )        

}
export default LeftNav;
