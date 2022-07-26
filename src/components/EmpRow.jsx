//each employee row in the employee list page
import "../styles/empListStyle.css";

const EmpRow = ({
  empName,
  empId,
  empJoiningDate,
  empRole,
  empStatus,
  empExperience,
  empAction,
  deleteOnClick,
  editOnClick,
  rowClick,
  className,
}) => {
  return (
    <div className="flexRow empTableRow" onClick={rowClick}>
      <div className="columnSize">{empName}</div>
      <div className="columnSize">{empId}</div>
      <div className="columnSize">{empJoiningDate}</div>
      <div className="columnSize">{empRole}</div>
      <div className="columnSize">
        <div className={`${empStatus}`}>{empStatus}</div>
      </div>

      <div className="columnSize">{empExperience}</div>
      <div className="columnSize">
        <button onClick={deleteOnClick} className="deleteEditBtn">
          <img
            src={require("../assets/trash.png")}
            alt="trash icon"
            className="deleteEditIcon"
          />
        </button>
        <button onClick={editOnClick} className="deleteEditBtn">
          <img
            src={require("../assets/pencil.png")}
            alt="edit icon"
            className="deleteEditIcon"
          />
        </button>
      </div>
    </div>
  );
};
export default EmpRow;
