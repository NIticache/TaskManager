import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask,deleteTask } from "../slice/taskSlice";

export const TaskCard =({task})=>{
    const dispatch=useDispatch()
return <div style={{width:"200px" ,height:"200px"}}>
    <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))}/>
    <span>{task.title}</span>
    <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
</div>
}