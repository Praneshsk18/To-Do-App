import React, { useState } from 'react';
import './Addtodo.css'

function Addtodo({ onAddTask }) {
  const [cacheData, setCacheData] = useState('');

  const addTask = () => {
    if (cacheData) {
      onAddTask(cacheData);
      setCacheData('');
    } else {
      console.log("Please enter a task.");
    }
  };

  return (
    <div className="addtodocomponent">
      <p>Add the elements</p>
      <input
        type="text"
        value={cacheData}
        onChange={(e) => setCacheData(e.target.value)}
      />
      <button className='button' onClick={addTask}>Submit</button>
    </div>
  );
}

export default Addtodo;
