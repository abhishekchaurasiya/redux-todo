import { nanoid } from "@reduxjs/toolkit";
import {ITodo, RemoveAndToggle, saveTodosToLocalStorage, TodoState} from "../todo/index"

export interface AddTodoAction {
  payload: {
    title: string;
    completed?: boolean | undefined;
    id?: string;
  };
}
export const addTodoReducer = (state: TodoState, action: AddTodoAction) => {
  const newTodo: ITodo = {
    id: nanoid(),
    title: action.payload.title,
    completed: false,
  };
  if (newTodo) {
    state.todos.push(newTodo);
  }
  saveTodosToLocalStorage(state.todos);
};

export const updateTodoReducer = (state: TodoState, action: AddTodoAction) => {
  const { id, title } = action.payload;
  const todo = state.todos.find((todo) => todo.id === id);
  if (todo) {
    todo.title = title;
    saveTodosToLocalStorage(state.todos);
  }
};

export const removeTodoReducer = (
  state: TodoState,
  action: RemoveAndToggle
) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  saveTodosToLocalStorage(state.todos);
};

export const toggleTodoReducer = (
  state: TodoState,
  action: RemoveAndToggle
) => {
  const { id } = action.payload;
  const todo = state.todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodosToLocalStorage(state.todos);
  }
};
