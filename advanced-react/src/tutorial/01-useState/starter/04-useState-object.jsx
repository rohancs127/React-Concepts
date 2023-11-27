import { useState } from 'react';

const UseStateObject = () => {
  const [person, SetPerson] = useState({
    name: 'Peter',
    age: '24',
    hobby: 'Reading books'
  })
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState('24')
  // const [hobby, setHobby] = useState('Reading books')

  const handleClick = ()=>{
    SetPerson({
      name:'John',
      age: '30',
      hobby: 'Screaming on computer'
    })
    // setName('John')
    // setAge('30')
    // setHobby("Screaming on computer")
  }

  return (
  <section>
  <h2>useState object example</h2>
  <h2>Name: {person.name}</h2>
  <h3>Age: {person.age}</h3>
  <h3>Enjoys: {person.hobby}</h3>
  <button className='btn' onClick={handleClick}>Click me</button>
  </section>
  )
};

export default UseStateObject;
