import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import TodoItem from '../interface/TodoItem'

const initialState : TodoItem[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    addTodo: (state, action: PayloadAction<TodoItem> ) => {
        state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number> ) => {
      return state.filter(t => t.id !== action.payload)
    },
    doneTodo: (state, action: PayloadAction<number>)=>{
      return state.map(el => (el.id == action.payload ? {...el, is_done: true} : el))
    },
    editTodo: (state, action: PayloadAction<{id:number, value: string}>) => {
      return state.map(el => (el.id == action.payload.id ? {...el, title:action.payload.value} : el))
    }
  },
});

export const {addTodo, deleteTodo, doneTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;