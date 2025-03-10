import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask,deleteTask } from "../slice/taskSlice";

export const TaskCard =({task})=>{
    const dispatch=useDispatch()
return <div style={styles.taskContainer}>
    <div  style={styles.leftSection}> <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))} style={styles.checkBox}/>
    <span > {task.title}</span></div>
   
    <button onClick={()=>dispatch(deleteTask(task.id))} style={styles.deleteButton}>Delete</button>
</div>
}

const styles={
    taskContainer:{
        display :"grid",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"12px",
        border:"5px solid #ddd",
        background:"#fff",
        borderRadius:"5px",
        flexWrap:"wrap",
        gap:"10px"

    },
    leftSection:{
        display:"flex",
        alignItems:"center",
        gap:"10px",
        flex:"1"
    },
    checkBox:{
        width:"18px",
        height:"18px",

    },
    taskTitle:{
        fontSize:"16px",
        wordBreak:"break-wrod",
        maxWidth:"70%"

    }
    ,
    deleteButton:{
background:"transparent",
color:"red",
cursor:"poninter"
    }

}