import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  let location = useLocation();

  const [id, setId] = useState(location.state.payload.id);
  const [text, setText] = useState(location.state.payload.text);
  const [Description, setDescription] = useState(
    location.state.payload.Description
  );
  const [Category, setCategory] = useState(location.state.payload.Category);
  const [date, setDate] = useState(location.state.payload.date);
  const [status, setStatus] = useState(location.state.payload.status);

  const UpdateTask = () => {
    if (!text) {
      window.alert("Incomplete Details");
      return;
    }

    const payload = {};
    payload.id = id;
    payload.text = text;
    payload.Description = Description;
    payload.Category = Category;
    payload.date = date;
    payload.status = status;

    axios
      .put(
        `https://63e889595f3e35d898f1cf26.mockapi.io/to-do-list/${location.state.payload.id}`,
        payload
      )
      .then(() => {
        navigate(-1);
      });

    alert("Hello! Data added Successfully");
  };
  return (
    <div>
      <Form>
        <div class="form-outline mb-4 text-center">
          <input
            type="text"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
            value={location.state.payload.id}
          />
        </div>
        <div class="form-outline mb-4 text-center">
          <input
            type="text"
            placeholder="Task Name"
            onChange={(e) => setText(e.target.value)}
            defaultValue={location.state.payload.text}
          />
        </div>
        <div class="form-outline mb-4 text-center">
          <input
            type="text"
            placeholder="Task Name"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={location.state.payload.Description}
          />
        </div>
        <div class="form-outline mb-4 text-center">
      <select value={Category} onChange={(e) => setCategory(e.target.value)} >
        <option value="">Category</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Shopping">Shopping</option>
        <option value="Meeting">Meeting</option>
        <option value="Travelling">Travelling</option>
      </select>
    </div>
        <div class="form-outline mb-4 text-center">
          <input
            type="datetime-local"
            id="Test_DatetimeLocal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            defaultValue={location.state.payload.date}
          />
        </div>
        <div class="form-outline mb-4 text-center">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="" >Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <Button onClick={UpdateTask}>Submit</Button>
      </Form>
    </div>
  );
}
