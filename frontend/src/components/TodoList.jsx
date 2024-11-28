import React from "react";

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <div
                    key={todo._id} // Use _id as key to prevent issues with React rendering
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md mb-3"
                >
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">{todo.title}</span>
                        <span className="text-sm text-gray-500 font-medium">{todo.description}</span>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => onEdit(todo)} // Pass the whole todo object to onEdit
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg shadow"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(todo._id)} // Use _id for delete
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