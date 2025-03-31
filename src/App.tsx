import { AddTodo } from "./components/index";

const App = () => {
  return (
    <div className="text-gray-100 flex flex-col justify-center items-center w-full">
      <h1 className="text-2xl font-semibold mt-6 ">
        Todos Using Redux Toolkit
      </h1>
      <AddTodo />
    </div>
  );
};
export default App;
