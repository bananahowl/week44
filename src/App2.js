import React from 'react';
import Person from "./File2.js";
import {males} from "./File2.js";
import {females} from "./File2.js";

const {firstName, email} = Person ;

const all = [males,females];
const all2 = [males, "Kurt", "Helle",females,"Tina"];
console.log(all)
console.log(all2)

export default function App2(){
   
    return(
        
        <div>
            
        <p> {Person.firstName}</p>

        <p> -- SPACE -- </p>
        <p> {Person.email} </p>
        <p> {all2}</p>
        </div>
    )
}
