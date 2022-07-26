import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import LeftNav from "./components/LeftNav";
import {
  useGetEmployeeByIdQuery,
  usePostEmployeeMutation,
  useUpdateEmployeeMutation,
} from "./services/empoyee";
import "./styles/createEmpStyle.css";
const CreateEmployee = ({ isdetailsPage }) => {
  const shouldDisable = isdetailsPage;
  const [addEmp, { isLoading }] = usePostEmployeeMutation();
  const { empId } = useParams();
  const [updatePost, { isLoadings }] = useUpdateEmployeeMutation();
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
      empId
        ? updatePost({ id: empId, data: empDetails })
        : addEmp(empDetails).unwrap();
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
  console.log(empDetails, "data");

  return (
    <>
      <LeftNav />
      <section className="flex">
        <div className="createEmp">
          <h1>
            {shouldDisable
              ? "Employee Details"
              : empId
              ? "Update Employee"
              : "Create Employee"}
          </h1>
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
                value={empDetails[item.key]}
                shouldDisable={shouldDisable}
              />
            ))}

            <InputSelect
              label="Status:"
              options={[
                {
                  key: "Choose",
                  label: "Choose Status",
                  selected: "true",
                  disabled: "disabled",
                },
                { key: "Active", label: "Active" },
                { key: "Inactive", label: "Inactive" },
                { key: "Probation", label: "Probation" },
              ]}
              onchange={(text) => update("empStatus", text)}
              value={empDetails.empStatus}
              shouldDisable={shouldDisable}
            />
            <InputSelect
              label="Role:"
              options={[
                {
                  key: "Choose",
                  label: "Choose Role",
                  selected: "true",
                  disabled: "disabled",
                },
                { key: "Dev", label: "Developer" },
                { key: "QA", label: "QA" },
              ]}
              onchange={(text) => update("empRole", text)}
              value={empDetails.empRole}
              shouldDisable={shouldDisable}
            />

            {!shouldDisable && (
              <div>
                <Button
                  className="create"
                  label={empId ? "Update" : "Create"}
                  handleClick={handleClick}
                />
                <Button
                  className="cancel"
                  label="Cancel"
                  handleClick={() => navigate("/employeeList")}
                />
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateEmployee;
