import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../slice/taskSlice";
import { TaskCard } from "./TaskCard";

export const TaskManager =()=>{

 const[title,setTitle]=useState("");
 const[filter,setFilter]=useState("all")
 const dispatch=useDispatch();
 const tasks =useSelector((state)=>state.tasks.tasks)
 console.log(tasks,"tasks")
 const handleAddTask=()=>{
    if(title.trim()!=="")
    {
        const newTask ={id:Date.now(),title,completed:false}
        dispatch(addTask(newTask))
        setTitle("")
    }
    setTitle("")
 }

const filteredTasks =tasks.filter((task)=>filter==="all"?true:filter==="completed" ?task.completed:!task?.completed)
return (<>


<input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add a new Task"/>

<button onClick={handleAddTask}>Add Task</button>
<select onChange={(e)=>setFilter( e.target.value)} >
    <option value="all">All</option>
    <option value ="completed">Completed</option>
    <option value ="pending">Pending</option>

</select>
{filteredTasks?.length >0 ?filteredTasks.map((task)=><TaskCard task={task}/>):<h2>{`No Tasks :)`}</h2>}

</>)
}