import React from "react";

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md mb-3"
                >
                    <span className="text-lg font-medium">
                        {todo.title}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onEdit(todo)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg shadow"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg shadow"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
