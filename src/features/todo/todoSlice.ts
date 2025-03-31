import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoReducer,
  ITodo,
  loadTodosFromLocalStorage,
  removeTodoReducer,
  toggleTodoReducer,
  updateTodoReducer,
} from "./index";

const initialState: { todos: ITodo[] } = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: addTodoReducer,
    updateTodo: updateTodoReducer,
    removeTodo: removeTodoReducer,
    toggleTodo: toggleTodoReducer,
  },
});

export const { addTodo, updateTodo, removeTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
