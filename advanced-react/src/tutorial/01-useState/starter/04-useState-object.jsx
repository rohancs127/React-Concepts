import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Peter');
  const [age, setAge] = useState('24')
  const [hobby, setHobby] = useState('Reading books')

  const handleClick = ()=>{
    setName('John')
    setAge('30')
    setHobby("Screaming on computer")
  }

  return (
  <section>
  <h2>useState object example</h2>
  <h2>{name}</h2>
  <h3>{age}</h3>
  <h3>{hobby}</h3>
  <button className='btn' onClick={handleClick}>Click me</button>
  </section>
  )
};

export default UseStateObject;
