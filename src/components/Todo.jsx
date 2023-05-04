import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({todos, removeTodo, completeTodo}) => {

    
    return todos.map((todo, index) => (
        <div className={todo.isComplete? "" : ""}>
            <div
                key={index} 
                onClick={() => completeTodo(todo.id)}
                className={todo.isComplete? "h-28 my-2 block w-2/3 text-xl font-bold bg-gray-400 opacity-40 rounded-lg mx-auto":"h-28 my-2 block w-2/3 text-xl font-bold rounded-lg mx-auto bg-gradient-to-r from-pink-300 to-purple-300 hover:from-indigo-500 from-50% hover:to-yellow-100 to-100%"}>
                <div className="flex justify-between items-center h-full">
                    <div className={todo.isComplete? "line-through  float-left ml-3":"float-left ml-3"}>
                        {todo.text}
                    </div>
                    <div className="float-right mr-2">
                        <AiFillDelete className="rounded-lg bg-blue-400 text-5xl"
                            onClick={(e) => {removeTodo(todo.id); e.stopPropagation()}}
                        />
                    </div>
                </div>
            </div>
        </div>
    ));
}
export default Todo;