import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/index";
import {TodoItem} from "./index"

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState<string>("");
  const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const addSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput) {
      dispatch(addTodo({ id: id, title: todoInput }));
      setTodoInput("");
    }
  };

  const saveTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTodo({ id, title: todoInput }));
    setTodoInput("");
    setIsTodoEditable(false);
  };

  return (
    <div>
      <form
        onSubmit={isTodoEditable ? saveTodoHandler : addSubmitHandler}
        className="mt-5 flex justify-center items-center space-x-3 flex-wrap gap-y-3"
      >
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo..."
          className="outline-none border border-slate-500 rounded-sm px-2 py-1 placeholder:capitalize "
          required
        />
        <button
          type="submit"
          className="text-white bg-teal-700 rounded-sm px-2 py-1 hover:bg-teal-900 transition duration-200 text-xl flex justify-center items-center space-x-1 cursor-pointer"
        >
          {isTodoEditable ? "Save" : "Add"} Todo
        </button>
      </form>
      <TodoItem
        setTodoInput={setTodoInput}
        setIsTodoEditable={setIsTodoEditable}
        setId={setId}
      />
    </div>
  );
};

export default AddTodo;
