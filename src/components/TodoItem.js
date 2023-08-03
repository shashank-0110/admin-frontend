import {Table} from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../store/todoSlice';
import TodoEditForm from './TodoEditForm';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
        <Table  className='table' striped bordered hover size="sm"  >
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{todo.text}</td>
          <td>{todo.Description}</td>
          <td>{todo.Category}</td>
          <td>{todo.date}</td>
          <td>{todo.status}</td>
          {/* <td>
          <button onClick={handleEdit}>Edit</button>
          </td> */}
          <td>
          <button onClick={handleDelete}>Remove</button>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default TodoItem;
