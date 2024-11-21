import React, { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "./services/api.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data.data);
      } catch (error) {
        console.error("Error fetching todos:", error.message);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (todo) => {
    try {
      const addedTodo = await addTodo(todo);
      setTodos([...todos, addedTodo.data]);
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      const todo = await updateTodo(updatedTodo.id, updatedTodo);
      setTodos(
        todos.map((t) => (t.id === updatedTodo.id ? todo.data : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto max-w-lg py-10">
        <h1 className="text-4xl font-bold text-center mb-6">🌟 Todo App</h1>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <TodoForm
            onAdd={handleAddTodo}
            onUpdate={handleUpdateTodo}
            selectedTodo={selectedTodo}
            setSelectedTodo={setSelectedTodo}
          />
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
