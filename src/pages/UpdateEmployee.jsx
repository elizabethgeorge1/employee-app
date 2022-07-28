import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../services/employee";
import EmployeeForm from "../components/EmployeeForm";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";

const UpdateEmployee = () => {
  const [updatePost, { isLoadings }] = useUpdateEmployeeMutation();
  const { empId } = useParams();
  const { data, error, isLoadingss } = useGetEmployeeByIdQuery(empId);
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

  useEffect(() => {
    if (data) {
      setEmpDetails({
        empName: data.empName,
        empId: data.empId,
        empJoiningDate: data.empJoiningDate,
        empExperience: data.empExperience,
        empAddress: data.empAddress,
        empUpload: data.empUpload,
        empStatus: data.empStatus,
        empRole: data.empRole,
      });
    }
  }, [data]);

  const update = (key, text) => {
    setEmpDetails({ ...empDetails, [key]: text });
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      updatePost({ id: empId, data: empDetails });
      navigate("/employeeList");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };
  return (
    <>
      <LeftNav />
      <EmployeeForm
        fields={fields}
        heading="Update Employee"
        buttonLabel="Update"
        update={update}
        empDetails={empDetails}
        handleClick={handleClick}
        navigate={() => navigate("/employeeList")}
      ></EmployeeForm>
    </>
  );
};
export default UpdateEmployee;
