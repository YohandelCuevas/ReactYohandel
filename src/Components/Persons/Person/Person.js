import React from 'react';
import './Person.css'

const Persons = props =>{

    return(
        <div className="pContainer">
            <ul className="list">
            <p> Full name: {props.name} {props.lastName}</p>
            <p>Age: {props.age} </p>
            <p>Address: {props.address}</p>
            </ul>
            <input 
                onChange ={props.changed}
                value ={props.name}
                type="text" 
                className="form-control" 
                style={{marginBottom: 5, marginLeft: 20, height:30} }
             />
             <button  onClick={props.click} className="btn btn-sm btn-danger">eliminar</button>
        </div>
    );
}

export default Persons;