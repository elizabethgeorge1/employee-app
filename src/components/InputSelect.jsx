// import '../styles/styles.css';
const InputSelect = ({
    label,
    options,
    onchange,
    shouldDisable
}) => {
    return(
        <div>
            <label>{label}</label>
            {/* <select>
                <option>{val}<option/>
            </select> */}
            {/* <select value={[{val}]}/> */}
            <select name={label} onChange={(event) => onchange(event.target.value)} disabled={shouldDisable}>
                            {options.map((item)=>
                 (<option key={item.key} value={item.label}>{item.label}</option>
            ))};
               
            </select>
            
        </div>
    );
};
export default InputSelect;