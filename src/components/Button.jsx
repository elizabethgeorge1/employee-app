
// import '../styles/styles.css';
const Button = (props)=>{
    const { label, handleClick,className}= props

    return(
        <button onClick={(e)=>handleClick(e)} className={className}>
            {label}
        </button>
    );
};
export default Button;
