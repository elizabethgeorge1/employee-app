import "../styles/createEmpStyle.css";
import Button from "./Button";
import InputField from "./InputField";
import InputSelect from "./InputSelect";

const EmployeeForm = ({
  fields,
  update,
  empDetails,
  shouldDisable,
  handleClick,
  buttonLabel,
  heading,
  navigate,
}) => {
  return (
    <section className="flex">
      <div className="createEmp">
        <h1>{heading}</h1>
      </div>
      <div className="empForm">
        <form>
          {fields?.map((item) => (
            <InputField
              key={item.key}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              onchange={(text) => {
                update(item.key, text);
              }}
              value={empDetails[item.key]}
              shouldDisable={shouldDisable}
              required={item.required}
            />
          ))}
          <InputSelect
            label="Status:"
            options={[
              {
                key: "Choose",
                label: "Choose Status",
                selected: true,
                disabled: true,
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
                selected: true,
                disabled: true,
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
                label={buttonLabel}
                handleClick={!!empDetails?.empId && handleClick}
                type="submit"
              />
              <Button
                className="cancel"
                label="Cancel"
                handleClick={navigate}
              />
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
export default EmployeeForm;
