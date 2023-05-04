import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todolist = () => {
    const [todos, setTodos] = useState([]); //id: , text: " "


    //function
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        setTodos([todo, ...todos]);
    }

    const removeTodo = (id) => {
        const removed_todoList = [...todos].filter((todo) => todo.id !== id);
        setTodos(removed_todoList);
    }
    
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
            
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="mx-auto mt-5">
            <TodoForm 
                onSubmit={addTodo}
            />

            <Todo
                todos = {todos}
                removeTodo = {removeTodo}
                completeTodo={completeTodo}
            />
        </div>
    )
}
export default Todolist;