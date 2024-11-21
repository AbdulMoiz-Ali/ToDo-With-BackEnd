import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Update origin as needed
app.use(express.json());

// In-memory database for todos
let todos = [

];

// Routes

// 1. Get all todos
app.get("/todos", (req, res) => {
  res.status(200).json({ data: todos });
});

// 2. Add a new todo
app.post("/todo", (req, res) => {
  const { name, completed = false } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Todo name is required" });
  }

  const newTodo = {
    id: Date.now(),
    name,
    completed,
  };

  todos.push(newTodo);
  console.log(newTodo);
  res.status(201).json({
    message: "Todo added successfully",
    data: newTodo,

  });
});

// 3. Update a todo
app.put("/updatetodo/:id", (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (name) todos[todoIndex].name = name;
  if (completed !== undefined) todos[todoIndex].completed = completed;
  console.log(todoIndex);
  res.status(200).json({
    message: "Todo updated successfully",
    data: todos[todoIndex],
  });

});

// 4. Delete a todo
app.delete("/deletetodo/:id", (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = todos.splice(todoIndex, 1);
  console.log(deletedTodo);
  res.status(200).json({
    message: "Todo deleted successfully",
    data: deletedTodo,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
