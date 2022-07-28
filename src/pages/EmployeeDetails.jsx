import { useGetEmployeeByIdQuery } from "../services/employee";
import EmployeeForm from "../components/EmployeeForm";
import LeftNav from "../components/LeftNav";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EmployeeDetails = () => {
  const { empId } = useParams();
  const { data, error, isLoadingss } = useGetEmployeeByIdQuery(empId);
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

  return (
    <>
      <LeftNav />
      <EmployeeForm
        fields={fields}
        heading="Employee Detail"
        shouldDisable
        empDetails={empDetails}
      ></EmployeeForm>
    </>
  );
};
export default EmployeeDetails;
