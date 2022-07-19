// import '../styles/styles.css';
const InputSelect = ({
    label,
    options,
    onchange
}) => {
    return(
        <div>
            <label>{label}</label>
            {/* <select>
                <option>{val}<option/>
            </select> */}
            {/* <select value={[{val}]}/> */}
            <select name={label} onChange={(event) => onchange(event.target.value)}>
                            {options.map((item)=>
                 (<option key={item.key} value={item.label}>{item.label}</option>
            ))};
               
            </select>
            
        </div>
    );
};
export default InputSelect;