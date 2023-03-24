import { useSelector } from "react-redux";
import TodoItem from "../interface/TodoItem";
import { RootState } from "../store";
import AddTodos from "./AddTodos";
import TodoItems from "./TodoItems";


const Todo: React.FC = () => {
  const todo = useSelector((state: RootState) => state.todo);
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <AddTodos/>
          <>
            <div>
            {todo.map((t: TodoItem)=><TodoItems key={t.id} todo={t}/>)}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Todo;