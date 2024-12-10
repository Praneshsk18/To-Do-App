import React from 'react';
import './Displayitems.css';

function Displayitems({ appdata = [] ,deletedata}) {
  return (
    <div>
      {appdata.length > 0 ? (
        appdata.map((task, index ) => (
          <div key={index} className="container1">
          <div className='asd'><p>{task}</p></div>
            <button className='b' onClick={() => deletedata(index)}>Delete</button>
          </div>
        ))
      ) : (
        <div className='container1'><p>No tasks available</p></div>
      )}
    </div>
  );
}

export default Displayitems;
