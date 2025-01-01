const express = require('express');
const app = express();
app.use(express.json());

// Sample in-memory database
const tasks = [];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js API!' });
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = { id: tasks.length + 1, title };
  tasks.push(task);
  res.status(201).json(task);
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

module.exports = app;
