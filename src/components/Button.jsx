const Button = (props) => {
  const { label, handleClick, className, type } = props;

  return (
    <button onClick={(e) => handleClick(e)} className={className} type={type}>
      {label}
    </button>
  );
};
export default Button;
