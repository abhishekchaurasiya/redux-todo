import {
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "./TodoMethods";
import {
  addTodoReducer,
  updateTodoReducer,
  removeTodoReducer,
  toggleTodoReducer,
} from "./todoReducers";
import { ITodo, RemoveAndToggle, TodoItemProps, TodoState } from "./TodoType";

import TodoSliceReducer, {
  addTodo,
  updateTodo,
  removeTodo,
  toggleTodo,
} from "../todo/todoSlice";

export {
  TodoSliceReducer,
  addTodo,
  updateTodo,
  removeTodo,
  toggleTodo,
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
  addTodoReducer,
  updateTodoReducer,
  removeTodoReducer,
  toggleTodoReducer,
};

export type { ITodo, RemoveAndToggle, TodoItemProps, TodoState };
