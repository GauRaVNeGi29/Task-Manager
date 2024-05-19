import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { toast } from "react-toastify";
import axios from "axios"

const TaskList = () => {
  const [formData, setformData] = useState({
    name:"",
    completed: false
  })
  const {name} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setformData({ ...formData, [name]: value })
  }

  const createtask = async (e) => {
    e.preventDefault()
    if(name === ""){
      return toast.error("Input field cannot be empty!!")
    }
    try {
      await axios.post("http://localhost:5000/api/tasks", formData)
      toast.success("Task added successfully")
      setformData({...formData, name: ""})
    } catch (error) {
      toast.error(error.message)
      console.log(error.message);
    }
  }
  
  return (  
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange} createTask={createtask}/>
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> 0
        </p>
        <p>
          <b>Completed Tasks:</b> 0
        </p>
      </div>
      <hr />
      <Task/>
    </div>
  );
}

export default TaskList