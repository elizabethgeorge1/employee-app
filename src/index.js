import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';
import GetEmployeeById from './GetEmployeeById';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import store from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/create' element={<CreateEmployee/>}/> 
    <Route path='/employeeList' element={<EmployeeList/>}/>
    <Route path='/view/:empId' element={<GetEmployeeById/>}/>
  </Routes>

   {/* <CreateEmployee /> */}
    {/* <App/> */}
    {/* <Login/> */}
  
  </BrowserRouter>
   
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
