import '../styles/empListStyle.css'
const EmpRow=({
    empName,
    empId,
    empJoiningDate,
    empRole,
    empStatus,
    empExperience,
    empAction ,
    deleteOnClick,
    editOnClick
})=>{
    console.log(empName)
    return (
        <div className="flexRow empTableRow">
            <div>{empName}</div>
            <div>{empId}</div>
            <div>{empJoiningDate}</div>
            <div>{empRole}</div>
            <div>{empStatus}</div>
            <div>{empExperience}</div>
            <div>{empAction}</div>
            <div><button onClick={deleteOnClick}>Delete</button>
            <button onClick={editOnClick}>Edit</button></div>
        </div>
    )
}
export default EmpRow;
