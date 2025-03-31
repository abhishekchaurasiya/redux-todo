import { ITodo } from "./TodoType";

export const loadTodosFromLocalStorage = (): ITodo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveTodosToLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
