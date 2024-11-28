import React, { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "./services/api"; // Import API methods
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Fetch todos when component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response.data); // Set the fetched todos in state
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (todo) => {
    try {
      const response = await addTodo(todo);
      setTodos([...todos, response.data]); // Add the new todo to the list
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      const response = await updateTodo(updatedTodo._id, updatedTodo);
      setTodos(
        todos.map((t) => (t._id === updatedTodo._id ? response.data : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id)); // Remove the deleted todo
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto max-w-lg py-10">
        <h1 className="text-4xl font-bold text-center mb-6">🌟 Todo App</h1>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          {/* Pass the functions and selectedTodo to the TodoForm component */}
          <TodoForm
            onAdd={handleAddTodo}
            onUpdate={handleUpdateTodo}
            selectedTodo={selectedTodo}
            setSelectedTodo={setSelectedTodo}
          />
          {/* Pass todos and handlers to the TodoList component */}
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onEdit={setSelectedTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;