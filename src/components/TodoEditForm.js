// // src/components/TodoEditForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateTodo } from '../store/todoSlice';

// const TodoEditForm = ({ todo, onClose }) => {
//     const [text, setText] = useState('');
//     const [Description, setDescription] = useState('');
//     const [Category, setCategory] = useState('');
//     const [date, setDate] = useState('');
//     const [status, setStatus] = useState('');
//     const dispatch = useDispatch();

//     const handleOptionChange = (event) => {
//         setCategory(event.target.value);
//       };
//       const handleOptionsChange = (event) => {
//         setStatus(event.target.value)
//       };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       updateTodo({
//         id: todo.id,
//         text,
//         Description,
//         Category,
//         date,
//         status,
//       })
//     );
//     onClose();
//   };

//   return (
   

// <form class="d-flex justify-content-around" onSubmit={handleSubmit}>
// <div class="form-group" >
// <input
//   type="text"
//   value={text}
//   onChange={(e) => setText(e.target.value)}
//   placeholder="Tittle"
// />
// </div>
// <div class="form-group">
//  <input
//   type="text"
//   value={Description}
//   onChange={(e) => setDescription(e.target.value)}
//   placeholder="Description"
// />
// </div>
// <div class="form-group">
// <select value={Category} onChange={handleOptionChange}>
//   <option value="">Choose an option</option>
//   <option value="Personal" selected>Personal</option>
//   <option value="Work">Work</option>
//   <option value="Shopping">Shopping</option>
//   <option value="Meeting">Meeting</option>
//   <option value="Travelling">Travelling</option>
// </select>
// </div>
// <div class="form-group">
//  <input
//  type="datetime-local"
//   id="Test_DatetimeLocal"
//   value={date}
//   onChange={(e) => setDate(e.target.value)}
//   placeholder="Date"
// />
// </div>
// <div class="form-group">
// <select value={status} onChange={handleOptionsChange}>
//   <option value="">Choose an option</option>
//   <option value="Active" >Active</option>
//   <option value="Completed">Completed</option>
// </select>
// </div>
// <button type="submit">Update</button>
// <button type="button" onClick={onClose}>Cancel</button>
// </form>
//   );
// };

// export default TodoEditForm;


// {/* <form onSubmit={handleSubmit}>
// <input
//   type="text"
//   value={text}
//   onChange={(e) => setText(e.target.value)}
// />
// <button type="submit">Update</button>
// <button type="button" onClick={onClose}>Cancel</button>
// </form> */}