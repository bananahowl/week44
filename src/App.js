import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./File1";

function App() {
  return (
    <div className="App">
      <h2>add some codey here</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      
    </div>
  );
}

export default App;
