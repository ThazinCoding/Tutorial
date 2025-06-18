'use client';
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (taskName.trim() === '') return;
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = taskName;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, taskName]);
    }
    setTaskName('');
  };

  const handleEditTask = (index) => {
    setTaskName(tasks[index]);
    setEditingIndex(index);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <TextField
        fullWidth
        label="Enter Task"
        variant="outlined"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleAddTask}
        sx={{ backgroundColor: 'olive', mb: 4 }}
      >
        {editingIndex !== null ? 'Save Task' : 'Add Task'}
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleEditTask(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemoveTask(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}