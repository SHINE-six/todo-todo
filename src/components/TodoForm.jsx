import React, { useState } from "react";
import {AiOutlinePlusSquare } from "react-icons/ai";

const TodoForm = ({onSubmit}) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        })

        setInput("");
    }

    return (
        <div className="w-2/3 mx-auto text-center align-middle">
            <form  onSubmit={handleSubmit}>
                <input 
                    className="text-xl font-bold text-white border-2 border-black h-full w-5/6 rounded-l-xl p-2 bg-transparent hover:bg-gradient-to-tr from-black to-blue-900"
                    type="text" 
                    value={input}
                    placeholder="Add a todo"
                    onChange={(e) => setInput(e.target.value)}
                />
                <AiOutlinePlusSquare
                    className="ml-3 inline-block text-5xl h-full"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}
export default TodoForm;