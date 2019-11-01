import React,{useEffect} from 'react';
import {useState}from 'react';


export default function AppDay2p3() {

  const [chuck, setChuck] = useState({ value: ""});
  const [selector, setSelector] = useState(false);

  const [dad, setDad] = useState({value: ""});

  useEffect( () => {

    function getChuk(){

        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {setChuck(data)})
        .then(data => {console.log(data)})
    }
    getChuk()
  },[selector])
  // tried to do as seen on a website to make a timer to fetch the data
  useEffect(()=> {
      const timer = setTimeout(()=>{
         function getDad(){
            fetch('https://icanhazdadjoke.com/')
            .then(res => res.json())
            .then(data => {setDad(data)})  
         } 
         getDad()
      },10000)

  },[])

  /* var date = Date();
  var curenTime =  date.toLocaleTimeString(); */

//onChange={val => setcount(val.target.value)}

/* 

// https://api.chucknorris.io/jokes/random 
https://icanhazdadjoke.com/api

 */
  return (
    <div className="App">
      <h2>day 2 ex 3 </h2>

      <button onClick={()=>setSelector(!selector)}> press to Get ChuckNorris</button>
      <p> chuck joke : {chuck.value}</p>

      <p> dad joke : {dad.value}</p>
      
      
    </div>
  );
}
