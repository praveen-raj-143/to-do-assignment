import React, { useState } from 'react';
import './Todoinput.css'
function Todoinput({ addTodo }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div className="todo-input">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new todo"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
}

export default Todoinput;
