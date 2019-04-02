import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person,index)=>{
        return (
          <Person name={person.name}
          lastName={person.lastName} 
          age={person.age}
          address={person.address}
          key ={person.id}
          click={()=>this.deletePersonHandler(index)}
          changed = { (event) =>this.changeNameHandler(event,person.id)}
         />
        );
      })
export default Persons;