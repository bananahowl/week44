import React from 'react';
import {useState} from 'react';

export default function AppDay2() {

  const [count, setCount] = useState(0);
  const [cremt, setCremt] = useState();

  /* var date = Date();
  var curenTime =  date.toLocaleTimeString(); */

//onChange={val => setcount(val.target.value)}
  return (
    <div className="App">
      <h2>form 1 to the 29/10 assigment </h2>

      
      <p> count is {count}</p>
      
      <label>set a count value </label><input value = {count}  onChange={val =>setCount(Number(val.target.value))}/> 
      <br></br>
      <label>set a crement value </label><input value = {cremt}  onChange={val =>setCremt(Number(val.target.value))}/> 
      <br></br>
      <button onClick={()=> setCount(count + cremt)}> press to incremt </button>
      <button onClick={()=> setCount(count - cremt)}> press to decrement</button>
      <br></br>
      
      
      {/* <p>  time:  {curenTime }</p> */}
    </div>
  );
}
/*

b) Add a new button to the Component which when pressed, should decrement the count value

c) Change the component, so an initial value for count can be passed in via props

c) Change the component so the value used for increments can be passed in (if you pass in the number five, 
  the count value should increment/decrement with 5 for each click)

     d) Add a side effect, using useEffect, that can store the count value in your Browsers L
     ocal Storage so that next time the user accesses the page (after having closed the browser) 
     it will render the count value used last time he visited the page

Hint: All modern browsers include a “Local Storage” and “Session Storage” area to store values 
for the current user or session. Open developer tools and check as sketched here.
The JavaScript API, used to read/write is extremely simple, you can do like this:
localStorage.setItem("count", count);
localStorage.getItem("count") //Returns value as a string

*/ 