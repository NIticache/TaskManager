import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 const initialState= {
    tasks:[]
}

export const taskSlice =createSlice({
name:"tasks",
initialState,reducers:{
    addTask:(state,action)=>{
        state.tasks.push(action.payload)
    },
    toggleTask:((state,action)=>{
        state.tasks=state.tasks.map((task)=>task.id === action.payload ?{...task,completed:!task.completed}:task)
       
    }),
    deleteTask:((state,action)=>{
        state.tasks=state.tasks.filter((task)=>task.id !== action.payload )
       
    }),
    importTasks:((state,action)=>{
        state.tasks=[...state.tasks,...action.payload]
       
    }),
}

})

export const{addTask,toggleTask,deleteTask,importTasks}=taskSlice.actions;
export default taskSlice.reducer;