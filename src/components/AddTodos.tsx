import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodos : React.FC = () => {

  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const submitHandler = (e : React.FormEvent) => {
      e.preventDefault();
      if(input !== '') {
        dispatch(addTodo(
          {
            id: Date.now(),
            title: input,
            is_done: false
          }
        ));
      }
      setInput('');
  }

  return (
      <form onSubmit={submitHandler}>
          <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <div className="flex mt-4">
                  <input value={input} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" onChange={(e) => {setInput(e.target.value)}}/>
                  <button className="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400">Add</button>
              </div>
          </div>
      </form>
  );
}

export default AddTodos;