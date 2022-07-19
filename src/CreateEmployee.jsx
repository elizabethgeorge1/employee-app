import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import LeftNav from "./components/LeftNav";
import { useGetEmployeeByIdQuery, usePostEmployeeMutation } from "./services/empoyee";
import "./styles/createEmpStyle.css";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const fields = [
    {
      key: "empName",
      type: "text",
      label: "Employee Name",
      placeholder: "Employee Name",
    },
    { key: "empId", type: "text", label: "ID:", placeholder: "Email ID" },
    {
      key: "empJoiningDate",
      type: "text",
      label: "Joining Date:",
      placeholder: "Joining Date",
    },
    {
      key: "empExperience",
      type: "text",
      label: "Experience:",
      placeholder: "Experience",
    },
    {
      key: "empAddress",
      type: "text",
      label: "Address:",
      placeholder: "Address",
    },
    {
      key: "empUpload",
      type: "file",
      label: "Upload:",
      placeholder: "Upload file",
    },
  ];
  // const [empName,setEmpName]= useState("");
  // const [empId,setEmpId]= useState("");
  // const [empJoiningDate,setEmpJoining]= useState("");
  // const [empExperience,setEmpExperience]= useState("");
  // const [empAddress,setEmpAddress]= useState("");
  // const [empUpload,setUpload]= useState("");
  // const [empStatus,setEmpStatus]= useState("");
  // const [empRole,setEmpRole]= useState("");
  const [empDetails, setEmpDetails] = useState({
    empName: "",
    empId: "",
    empJoiningDate: "",
    empExperience: "",
    empAddress: "",
    empUpload: "",
    empStatus: "",
    empRole: "",
  });

  const update = (key, text) => {
    setEmpDetails({ ...empDetails, [key]: text });
  };
  // console.log(empDetails);
  const [addEmp, { isLoading }] = usePostEmployeeMutation();
  // const {getById}= useGetEmployeeByIdQuery();


  const handleClick = (e) => {
    e.preventDefault();
    try {
      addEmp(empDetails).unwrap();
      // console.log(empDetails, "succ");
      setEmpDetails({
        empName: "",
        empId: "",
        empJoiningDate: "",
        empExperience: "",
        empAddress: "",
        empUpload: "",
        empStatus: "",
        empRole: "",
      });
      navigate('/employeeList');
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

  return (
    <>
      <LeftNav />
      <section className="flex">
        <div className="createEmp">
          <h1>Create Employee</h1>
        </div>
        <div className="empForm">
          <form>
            {fields.map((item) => (
              <InputField
                key={item.label}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                onchange={(text) => update(item.key, text)}
              />
            ))}

            <InputSelect
              label="Status:"
              options={[
                // {key:'choose',label:"Choose", value:""}
                { key: "Single", label: "Single" },
                { key: "Married", label: "Married" },
              ]}
              onchange={(text) => update("empStatus", text)}
            />
            <InputSelect
              label="Role:"
              options={[
                { key: "Dev", label: "Developer" },
                { key: "QA", label: "QA" },
              ]}
              onchange={(text) => update("empRole", text)}
            />
            <div>
              <Button
                className="create"
                label="Create"
                handleClick={handleClick}
              />
              <Button
                className="cancel"
                label="Cancel"
                handleClick={() => navigate("/employeeList")}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateEmployee;
