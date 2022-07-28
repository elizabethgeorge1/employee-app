import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usePostEmployeeMutation } from "../services/employee";
import LeftNav from "../components/LeftNav";
import "../styles/createEmpStyle.css";
import EmployeeForm from "../components/EmployeeForm";

const CreateEmployee = () => {
  const [addEmp, { isLoading }] = usePostEmployeeMutation();

  const navigate = useNavigate();
  const fields = [
    {
      key: "empName",
      type: "text",
      label: "Employee Name",
      placeholder: "Employee Name",
    },
    {
      key: "empId",
      type: "text",
      label: "ID:",
      placeholder: "ID",
      required: true,
    },
    {
      key: "empJoiningDate",
      type: "date",
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

  const onCreate = (e) => {
    e.preventDefault();
    try {
      addEmp(empDetails).unwrap();
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
      navigate("/employeeList");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

  return (
    <>
      <LeftNav />
      <EmployeeForm
        heading="Create Employee"
        fields={fields}
        buttonLabel="Create"
        navigate={() => navigate("/employeeList")}
        empDetails={empDetails}
        handleClick={onCreate}
        update={update}
      ></EmployeeForm>
    </>
  );
};

export default CreateEmployee;
