const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tasksdb');
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
}
connectDB();

const Task = mongoose.model('Task', {
  name: String,
  status: Boolean
});

app.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: '✅ Task deleted' });
});

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
