import React, { useState, useEffect } from "react";

const TodoForm = ({ onAdd, onUpdate, selectedTodo, setSelectedTodo }) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(selectedTodo ? selectedTodo.title : "");
    }, [selectedTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTodo) {
            onUpdate({ ...selectedTodo, title });
            setSelectedTodo(null);
        } else {
            onAdd({ title });
        }
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
        >
            <input
                type="text"
                placeholder="Enter a todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
            >
                {selectedTodo ? "Update Todo" : "Add Todo"}
            </button>
        </form>
    );
};

export default TodoForm;
