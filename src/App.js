import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllTasks from './pages/AllTasks';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateTask from './pages/UpdateTask';
const App = () => {
  const todos = useSelector((state) => state.todo);
  return (
<div className='main'>
         <Routes>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/UpdateTask" element={<UpdateTask />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/AllTasks" element={<AllTasks />}/>
      </Routes>
      </div>
   
  );
};

export default App;
