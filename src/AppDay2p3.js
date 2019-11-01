import React,{useEffect} from 'react';
import {useState}from 'react';


export default function AppDay2p3() {

  const [chuck, setChuck] = useState();
  const [selector, setSelector] = useState(false);

  useEffect( () => {

    function getChuk(){

        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(chucks => {setChuck(chucks)})
    }
    getChuk()
  },[selector])

  /* var date = Date();
  var curenTime =  date.toLocaleTimeString(); */

//onChange={val => setcount(val.target.value)}

// https://api.chucknorris.io/jokes/random 
  return (
    <div className="App">
      <h2>day 2 ex 3 </h2>

      <button onClick={()=>setSelector(!selector)}> press to get a joke</button>
      <p> chuck joke : {chuck.value}</p>
      
      
    </div>
  );
}
