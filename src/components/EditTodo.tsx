import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../interface/TodoItem";
import { AppDispatch } from "../store";
import { editTodo } from "../store/todoSlice";

interface Props {
  todo: TodoItem,
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const EditTodo: React.FC<Props> = ({ todo, setEditStatus}) => {

  const [inputEdit, setInputEdit] = useState<string>(todo.title);
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(inputEdit !== '') {
       const data = {
        id: todo.id,
        value: inputEdit
       }
       dispatch(editTodo(data))
    }
    setInputEdit("")
    setEditStatus(false)
  }

  return (
    <>
    <form onSubmit={onSubmit} className="flex mb-4 items-center">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" value={inputEdit} onChange={e => setInputEdit(e.target.value) }/>
        <button type="submit" className="flex-no-shrink p-2 ml-2 border-2 rounded text-gray-4s00 border-gray-400 hover:text-gray-800 hover:bg-gray-400">Edited</button>
    </form>
  </>
  );
}

export default EditTodo;