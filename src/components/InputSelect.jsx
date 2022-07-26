const InputSelect = ({ label, options, onchange, shouldDisable }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        name={label}
        onChange={(event) => onchange(event.target.value)}
        disabled={shouldDisable}
      >
        {options.map((item) => (
          <option
            key={item.key}
            value={item.label}
            selected={item.selected}
            disabled={item.disabled}
          >
            {item.label}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};
export default InputSelect;
