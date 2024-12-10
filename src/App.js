import React, { useState } from 'react';
import Addtodo from './component/Addtodo';
import Displayitems from './component/Displayitems';
import './App.css'

function App() {
  const [addData, setAddData] = useState([]);

  const handleAddTask = (task) => {
    setAddData([...addData, task]);
  };

  const deletedata = (indexr) => {
    setAddData((prevTasks) => prevTasks.filter((_, index) => index !== indexr))
  }

  return (
    <div className="App">
    <div className='header'><h1>Todo App</h1></div>
      <Addtodo onAddTask={handleAddTask} />
      <Displayitems appdata={addData} deletedata={deletedata}/>
    </div>
  );
}

export default App;
