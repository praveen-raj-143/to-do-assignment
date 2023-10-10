import React from 'react';
import './ResetButton.css'
function ResetButton({ resetTodos }) {
  const handleResetClick = () => {
    resetTodos();
  };

  return (
    <div >
      <button className="reset-button" onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default ResetButton;
