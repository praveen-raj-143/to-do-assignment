import React, { useState, useEffect } from 'react';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
import ResetButton from './components/ResetButton';
// import Card from './components/card/Card';
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    // Load data from localStorage when the app initializes
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    setTodos(savedTodos);
    setCompletedTodos(savedCompletedTodos);
  }, []);

  useEffect(() => {
    // Save data to localStorage when todos change
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const markTodoAsComplete = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      const updatedTodo = { ...todos[todoIndex], completed: true };
      setCompletedTodos([updatedTodo, ...completedTodos]);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const resetTodos = () => {
    setTodos([]);
    setCompletedTodos([]);
  };

  return (
    <div className="App">
      <div className='head'>
      <h1>Todo List</h1>
      <ResetButton resetTodos={resetTodos} />
      </div>
      <Todoinput addTodo={addTodo} />
      <TodoList todos={todos} completedTodos={completedTodos} markTodoAsComplete={markTodoAsComplete} />
      
      
    </div>
  );
}

export default App;