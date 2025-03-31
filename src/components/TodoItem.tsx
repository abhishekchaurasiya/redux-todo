import { useDispatch, useSelector } from "react-redux";
import { Pencil, Trash2 } from "lucide-react";
import { FC } from "react";
import {
  ITodo,
  TodoItemProps,
  TodoState,
  removeTodo,
  toggleTodo,
} from "../features/todo/index";

const TodoItem: FC<TodoItemProps> = ({
  setTodoInput,
  setIsTodoEditable,
  setId,
}) => {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  const updateTodoHandler = (todo: ITodo) => {
    if (!todo.completed) {
      setTodoInput(todo.title);
      setId(todo.id);
      setIsTodoEditable(true);
    }
  };

  const removeTodoHandler = (id: string) => {
    dispatch(removeTodo({ id }));
  };

  const toggleTodoHandler = (id: string) => {
    dispatch(toggleTodo({ id }));
    setTodoInput("");
    setIsTodoEditable(false);
  };

  return (
    <>
      <ul className="list-none">
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-amber-700 px-4 py-2 rounded"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoHandler(todo.id)}
                  className="form-checkbox h-4 w-4 text-amber-500"
                />
                <div
                  className={`text-white
                     ${todo.completed ? "line-through" : ""} `}
                >
                  {todo.title}
                </div>
              </div>
              <div className="space-x-6">
                <button
                  className={`cursor-pointer ${
                    todo.completed ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => updateTodoHandler(todo)}
                  disabled={todo.completed}
                >
                  <Pencil size={22} />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() => removeTodoHandler(todo.id)}
                >
                  <Trash2 size={22} />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoItem;
