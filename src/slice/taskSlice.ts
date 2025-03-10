import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  interface TaskState {
    tasks: Task[];
  }
  
  const initialState: TaskState = {
    tasks: []
  };

export const taskSlice =createSlice({
name:"tasks",
initialState,reducers:{
    addTask:(state,action: PayloadAction<Task>)=>{
        state.tasks.push(action.payload)
    },
    toggleTask:((state,action: PayloadAction<number>)=>{
        state.tasks=state.tasks.map((task)=>task.id === action.payload ?{...task,completed:!task.completed}:task)
       
    }),
    deleteTask:((state,action: PayloadAction<number>)=>{
        state.tasks=state.tasks.filter((task)=>task.id !== action.payload )
       
    }),
    importTasks:((state,action: PayloadAction<Task[]>)=>{
        state.tasks=[...state.tasks,...action.payload]
       
    }),
}

})

export const{addTask,toggleTask,deleteTask,importTasks}=taskSlice.actions;
export default taskSlice.reducer;