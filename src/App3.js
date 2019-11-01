import React from 'react';
import PropTypes from 'prop-types';
import {names} from './File2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  Welcome.propTypes = {
    name : PropTypes.string.isRequired 
  }
function WelcomePerson(props){
    const{firstName, lastName, gender, email, phone} = names;
    return <p> first name :{firstName}, last name :{lastName}, email :{email} </p>;
}
  
  export default function App3() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
       {/*  <Welcome />
        <Welcome name={45} /> */}
        <WelcomePerson person={names[0]}  />
        <WelcomePerson person={names[1]}  />

        
      </div>
      
    );
  }
  