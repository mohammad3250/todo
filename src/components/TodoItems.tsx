import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { idText } from "typescript";
import TodoItem from "../interface/TodoItem";
import { AppDispatch } from "../store";
import { deleteTodo, doneTodo } from "../store/todoSlice";
import EditTodo from "./EditTodo";

interface Props{
  todo : TodoItem,
}

const TodoItems : React.FC<Props> = ({ todo }) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const deleteTodoHandller = (id: number): void => {
    dispatch(deleteTodo(id))
  }

  const setDoneTodoHandller = (id: number): void => {
    dispatch(doneTodo(id))
  }

  return(
    ! editStatus ?
      <>
        <div className="flex mb-4 items-center">
            {todo.is_done ?
              <>
                <p className="w-full line-through text-green">{todo.title}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-gray-900 text-gray-900 border-grey-900 hover:bg-grey-900 w-[30%]">Not Done</button>
              </>
              :
              <>
                <p className="w-full text-grey-darkest">{todo.title}</p>
                <button onClick={() => setDoneTodoHandller(todo.id)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400">Done</button>
              </> 
            } 
            <button onClick={() => setEditStatus(true)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-gray-4s00 border-gray-400 hover:text-gray-800 hover:bg-gray-400">Edit</button>
            <button onClick={() => deleteTodoHandller(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-400">Remove</button>
        </div>
      </>
    :
    <EditTodo todo={todo} setEditStatus={setEditStatus}/>
  );
}

export default TodoItems;