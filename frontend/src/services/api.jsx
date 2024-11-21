import axios from "axios";

const API_URL = "http://localhost:3000"; // Replace with your API URL

export const getTodos = async () => {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
};

export const addTodo = async (todo) => {
    const response = await axios.post(`${API_URL}/todo`, todo);
    return response.data;
};

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}/deletetodo/${id}`);
    return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`${API_URL}/updatetodo/${id}`, updatedTodo);
    return response.data;
};
