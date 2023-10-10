import React from 'react';
import Card from './card/Card';
import './TodoList.css'
function TodoList({ todos, completedTodos, markTodoAsComplete }) {
  return (
    <div className="todo-list">
      <h2>Active Todos</h2>
      {todos.length === 0 ? <p className='comment'>No active todos</p> : null}
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} markTodoAsComplete={markTodoAsComplete} />
      ))}

      <h2>Completed Todos</h2>
      {completedTodos.length === 0 ? <p className='comment'>No completed todos</p> : null}
      {completedTodos.map((todo) => (
        <Card key={todo.id} todo={todo} markTodoAsComplete={markTodoAsComplete} />
      ))}
    </div>
  );
}

export default TodoList;
