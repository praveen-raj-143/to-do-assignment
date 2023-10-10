import React from 'react';
import './Card.css'
function Card({ todo, markTodoAsComplete }) {
  const handleCompleteClick = () => {
    markTodoAsComplete(todo.id);
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-text" onClick={handleCompleteClick}>{todo.text}</div>
      {/* <div className="actions">
        {!todo.completed && (
          <button className="complete-button" onClick={handleCompleteClick}>
            Complete
          </button>
        )}
      </div> */}
    </div>
  );
}

export default Card;
