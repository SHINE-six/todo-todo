import React from "react";
import Todolist from "./components/Todolist";
import "./App.css";

const App = () => {

    return (
        <div className="h-screen w-full bg-gradient-to-br from-sky-200 to-indigo-700">
            <div>
                <h1 className=" w-fit mx-auto pt-8 font-bold text-purple-600 hover:text-blue-700 hover:text-4xl text-4xl">What's the plan today</h1>
                <Todolist />
            </div>
        </div>
    )
}
export default App;