import React from 'react';
import {useState} from 'react';

export default function form1() {

  const[count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>form 1 </h2>
      <p> count is {count}</p>

      <button onClick={()=> setCount(count +1)}> press </button>
      
    </div>
  );
}