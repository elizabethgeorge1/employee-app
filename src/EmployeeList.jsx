import LeftNav from "./components/LeftNav";
import "./styles/empListStyle.css";
import "./styles/createEmpStyle.css";
import { useNavigate } from "react-router-dom";
import EmpRow from "./components/EmpRow";
import CreateEmployee from "./CreateEmployee";
import Dialog from "./components/Dialog";
import {
  useGetEmployeeByIdQuery,
  useGetEmployeeListQuery,
  useUpdateEmployeeMutation,
} from "./services/empoyee";
import { useDeleteEmployeeMutation } from "./services/empoyee";
import { useState } from "react";

const Employeelist = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetEmployeeListQuery();
  const [deletePost, { isLoading: isDeleting }] = useDeleteEmployeeMutation();
  const [showPopup, setShowPopup] = useState(false);
  const [empDeleteId, setEmpDeleteId] = useState("");

  const empList = data;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onDeleteHandler = (id) => {
    setShowPopup(true);
    setEmpDeleteId(id);
  };
  const onPopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <LeftNav />

      <div className="employeeListHeadingBox">
        <div className="employeeListHeading">Employee List</div>
        <div>
          <button
            className="createEmpButton"
            onClick={() => navigate("/create")}
          >
            <div className="blueRound">
              <img className="plusPng" src={require("./assets/plus.png")} />
            </div>
            <div className="btnText"> Create Employee</div>
          </button>
        </div>
      </div>
      <div>
        <div className="empTableHeading flexRow">
          <div className="columnSize">Employee Name</div>
          <div className="columnSize">Employee ID</div>
          <div className="columnSize">Joining Date</div>
          <div className="columnSize">Role</div>
          <div className="columnSize">Status</div>
          <div className="columnSize">Experience</div>
          <div className="columnSize">Active</div>
        </div>
        <div>
          {empList?.map((item) => (
            <EmpRow
              key={item.id}
              empName={item.empName}
              empId={item.empId}
              empJoiningDate={item.empJoiningDate}
              empRole={item.empRole}
              empStatus={item.empStatus}
              empExperience={item.empExperience}
              empAction={item.empAction}
              deleteOnClick={(event) => {
                onDeleteHandler(item.empId);
                event.stopPropagation();
              }}
              editOnClick={(event) => {
                navigate(`/edit/${item.empId}`);
                event.stopPropagation();
              }}
              rowClick={() => {
                navigate(`/employee/${item.empId}`);
              }}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="dialogBox">
          {" "}
          <Dialog
            title="Are you sure ?"
            subtitle="Do you really want to delete employee ?"
            close={() => {
              onPopupClose();
              setEmpDeleteId("");
            }}
            cancel={() => {
              onPopupClose();
              setEmpDeleteId("");
            }}
            confirm={() => {
              deletePost(empDeleteId);
              setEmpDeleteId("");
              onPopupClose();
            }}
          />
        </div>
      )}
    </>
  );
};
export default Employeelist;
