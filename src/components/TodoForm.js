// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import '../pages/Login.css'
const TodoForm = () => {
  const [text, setText] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };
  const handleOptionsChange = (event) => {
    setStatus(event.target.value)
  };

  const handleSubmit = (e) => {

    if(!text || !Description || !Category || !date || !status){
        window.alert("Incomplete Details")
        return;
    }
    else{
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(
      addTodo({
        id: uuidv4(),
        text,
        Description,
        Category,
        date,
        status,
      })
    );

    axios.post(`https://63e889595f3e35d898f1cf26.mockapi.io/to-do-list`, {
        text,
        Description,
        Category,
        date,
        status,
    })
     setText('')
    alert("Hello! Data added Successfully");
    }
      };


  return (
    <div className='top'>
    <form class="d-flex justify-content-around" onSubmit={handleSubmit}>
      <div class="form-group" >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tittle"
      />
      </div>
      <div class="form-group">
       <input
        type="text"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      </div>
      <div class="form-group">
      <select value={Category} onChange={handleOptionChange}>
        <option value="">Choose an option</option>
        <option value="Personal" selected>Personal</option>
        <option value="Work">Work</option>
        <option value="Shopping">Shopping</option>
        <option value="Meeting">Meeting</option>
        <option value="Travelling">Travelling</option>
      </select>
    </div>
    <div class="form-group">
       <input
       type="datetime-local"
        id="Test_DatetimeLocal"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      </div>
      <div class="form-group">
      <select value={status} onChange={handleOptionsChange}>
        <option value="">Choose an option</option>
        <option value="Active" >Active</option>
        <option value="Completed">Completed</option>
      </select>
      </div>
       <button type="submit">Add</button>
    </form>
    </div>
   
  );
};

export default TodoForm;


