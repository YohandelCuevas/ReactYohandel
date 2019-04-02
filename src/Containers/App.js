import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Person/Person'

class App extends Component {

  state={
    list:false,
    persons:[
      { id:'id1', name: 'Yohandel', lastName: 'Cuevas', age:21, address:'En mi casa duhh'},
      { id:'id2', name: 'Nelson', lastName: 'Romero', age:21, address:'En su casa de él duhh'},
      { id:'id3', name: 'Escarlet', lastName: 'Jimenez', age:21, address:'En su casa de ella duhh'}
    ]
  }
  toogleListHandler = () => {
     let toggledList = this.state.list;
     this.setState({list:!toggledList})
  }

  deletePersonHandler = (personIndex) =>{
     const arrPersons = this.state.persons.slice();
     arrPersons.splice(personIndex,1)
     this.setState({persons:arrPersons});
  }
  
  changeNameHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    })
  }
  
  render() {
    let persons = null;
      if (this.state.list ===true) {
        persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return (
                <Persons name={person.name}
                lastName={person.lastName} 
                age={person.age}
                address={person.address}
                key ={person.id}

                click={()=>this.deletePersonHandler(index)}
                changed = { (event) =>this.changeNameHandler(event,person.id)}
               />
              );
            })}
        </div>
        );
      } 
  
    return (
      <div className="App">
        {persons}
        <br/>
        <button type="button" className="btn btn-success"  onClick={this.toogleListHandler}>Toggle list</button>
      </div>
    );
  }
}

export default App;
