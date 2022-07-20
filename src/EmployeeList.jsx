import LeftNav from "./components/LeftNav";
import "./styles/empListStyle.css";
import "./styles/createEmpStyle.css";
import { useNavigate } from "react-router-dom";
import EmpRow from "./components/EmpRow";
import CreateEmployee from "./CreateEmployee";
import {
  useGetEmployeeByIdQuery,
  useGetEmployeeListQuery,
  useUpdateEmployeeMutation,
} from "./services/empoyee";
import { useDeleteEmployeeMutation } from "./services/empoyee";

const Employeelist = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetEmployeeListQuery();
  const [deletePost, { isLoading: isDeleting }] = useDeleteEmployeeMutation();
  // const [updatePost, { isLoading: isUpdating }] = useUpdateEmployeeMutation()

  const empList = data;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(empList);
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
            <h3> Create Employee</h3>
          </button>
        </div>
      </div>
      <div>
        <div className="empTableHeading flexRow">
          <div>Employee Name</div>
          <div>Employee ID</div>
          <div>Joining Date</div>
          <div>Role</div>
          <div>Status</div>
          <div>Experience</div>
          <div>Active</div>
        </div>
        <div>
          {empList?.map((item) => (
            <EmpRow
              empName={item.empName}
              empId={item.empId}
              empJoiningDate={item.empJoiningDate}
              empRole={item.empRole}
              empStatus={item.empStatus}
              empExperience={item.empExperience}
              empAction={item.empAction}
              deleteOnClick={(event) => {
                deletePost(item.empId);
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
      <div></div>
    </>
  );
};
export default Employeelist;
