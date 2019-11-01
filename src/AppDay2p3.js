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
  /*
  a) Add a feature, so that every 10 second (don’t decrease this number, the risk is that they will block our IP) a joke is fetched from this API: https://icanhazdadjoke.com/api.
Hint: You need to set the accept header to get a response in your desired format, Add this as the second argument to fetch (un-comment the format you prefer):
 {
     headers: {
          //Accept: 'text/plain'
          //Accept: 'application/json'
     }
  }

b) Make sure that you don’t fetch a new Chuck Norris Joke also every 10 seconds. This should only happen on a click on the button, rated: Under 17 requires accompanying parent or adult guardian ;-)

c) Ensure that the require
  */
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
