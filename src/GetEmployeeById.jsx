import { useParams } from "react-router-dom";
import {
  useGetEmployeeByIdQuery,
  useGetEmployeeListQuery,
} from "./services/empoyee";

const GetEmployeeById = () => {
  const {empId}=useParams();
  const { data,error,isLoading } = useGetEmployeeByIdQuery(empId);
  
console.log(data,"id")

  return (
    <>
     {/* <LeftNav />
      <section className="flex">
        <div className="createEmp">
          <h1>Create Employee</h1>
        </div>
        <div className="empForm">
          <form>
             */}
    </>
  );
};
export default GetEmployeeById;
