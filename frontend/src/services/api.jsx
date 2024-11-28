import axios from "axios";

const api = axios.create({
    baseURL: "https://j2zkt07v-4000.inc1.devtunnels.ms/api", // Replace with your actual backend URL
});

// Fetch all todos
export const getTodos = async () => {
    return await api.get("/todos");
};

// Add a new todo
export const addTodo = async (todo) => {
    return await api.post("/todo", todo);
};

// Update a todo
export const updateTodo = async (id, todo) => {
    return await api.put(`/todo/${id}`, todo);
};

// Delete a todo
export const deleteTodo = async (id) => {
    return await api.delete(`/todo/${id}`);
};
