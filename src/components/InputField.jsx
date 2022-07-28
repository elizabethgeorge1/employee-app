const InputField = ({
  label,
  type,
  placeholder,
  onchange,
  value,
  shouldDisable,
  required
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
        required={required}
      />
    </div>
  );
};
export default InputField;
