// react component for input field
// import '../styles/styles.css';
const InputField = ({
  label,
  type,
  placeholder,
  onchange,
  value,
  shouldDisable,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(event) => onchange(event.target.value)}
        disabled={shouldDisable}
      />
    </div>
  );
};
export default InputField;
