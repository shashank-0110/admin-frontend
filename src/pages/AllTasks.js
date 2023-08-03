import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AllTasks.css'

 
    function AllTasks() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
        const [filterValue, setFilterValue] = useState('');
        const [selectedStatus, setSelectedStatus] = useState('');
        const [currentPage, setCurrentPage] = useState(1);

    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`https://63e889595f3e35d898f1cf26.mockapi.io/to-do-list`)
              setData(response.data);        
        }
        getData();
        }, [])

        const handlePageChange = (page) => {
            setCurrentPage(page);
          };

        // const filteredData = data.filter(
        //     (item) =>
        //       item.text.toLowerCase().includes(filterValue.toLowerCase())
        //   );

        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        const currentData = data.slice(startIndex, endIndex);

          const handleStatusChange = (event) => {
            setSelectedStatus(event.target.value);
          };
        
          const filterData = selectedStatus
            ? currentData.filter((item) => item.status === selectedStatus)
            : currentData;
    
  return (
    <div className='maindiv'>
      <div >
      <button type='button' className='addbutton' onClick={()=>handleCreate()} >Add New Task</button>
      <select id="status" value={selectedStatus} onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="Active" >Active</option>
        <option value="Completed">Completed</option>
      </select>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / 5) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div>
    <Table  className='table' striped bordered hover size="sm"  >
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {filterData.map((datas) =>  
         (
        <tr key={datas.id}>
          <td>{datas.text}</td>
          <td>{datas.Description}</td>
          <td>{datas.Category}</td>
          <td>{datas.date}</td>
          <td>{datas.status}</td>

          <td>
             <button type='button' className='edit' onClick={()=>handleUpdate(datas)} >EDIT</button>
          </td>
          <td>
             <button type='button' className='delete'  onClick={()=>handleDelete(datas.id)} >DELETE</button>
          </td>
          <td>{datas.done}</td>
        </tr>
        ))} 
      </tbody>
    </Table>
    </div>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`https://63e889595f3e35d898f1cf26.mockapi.io/to-do-list/`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
        payload.id = data.id;
        payload.text = data.text;
        payload.Description = data.Description;
        payload.Category = data.Category;
        payload.date = data.date;
        payload.status = data.status;
      navigate("/UpdateTask",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
      navigate("/")
    }

}

export default AllTasks;