// react component for input field
// import '../styles/styles.css';
const InputField = ({
    label,
    type,
    placeholder,
    onchange
}) => {
    return(
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={(event) => onchange(event.target.value)}/>
            
        </div>
    );
};
export default InputField;