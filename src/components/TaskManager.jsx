import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, importTasks } from "../slice/taskSlice";
import { TaskCard } from "./TaskCard";

export const TaskManager =()=>{

 const[title,setTitle]=useState("");
 const[filter,setFilter]=useState("all")
 const dispatch=useDispatch();
 const tasks =useSelector((state)=>state.tasks.tasks)
const handelFetch= async()=>{
     const fetchTasks= async()=>{
        try{
           const res= await  fetch("/tasks.json");
           const data=await res.json()
           console.log(data,"data")
           dispatch(importTasks(data))
        }
        catch(error){
            console.log(error)
        }
        
     }
     fetchTasks()
}


 const handleAddTask=()=>{
    if(title.trim()!=="")
    {
        const newTask ={id:Date.now(),title,completed:false}
        dispatch(addTask(newTask))
        setTitle("")
    }
    setTitle("")
 }
console.log(tasks,"tasks")
const filteredTasks =tasks.filter((task)=>filter==="all"?true:filter==="completed" ?task.completed:!task?.completed)
return (<>

<div>Task Manager</div>
<div style={styles?.taskWrapper}>
    <div style={styles.inputContainer}>
<input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add a new Task" />
<button onClick={handleAddTask}>Add Task</button>
<button onClick={handelFetch}>Fetch Tasks</button>
    </div>
    <p>Filter :</p>
    <select onChange={(e)=>setFilter( e.target.value)} >
    <option value="all">All</option>
    <option value ="completed">Completed</option>
    <option value ="pending">Pending</option>

</select>
<div style={styles?.taskList}>
{filteredTasks?.length >0 ?filteredTasks.map((task)=><TaskCard task={task}/>):<h2>{`No Tasks :)`}</h2>}

</div>
</div>



</>)
}
const styles={
    taskWrapper:{
        width:"90%",
       
        background:"#fff",
        padding:"20px",
        borderRadius:"8px",

    },
    inputContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        gap:"10px"
    },
   taskList:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr)",
    justifyContent:"center",
    marginTop:"2rem",
    gap:"10px"
   }

}
