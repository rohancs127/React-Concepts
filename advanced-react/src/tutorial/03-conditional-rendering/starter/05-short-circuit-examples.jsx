import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  // const [text, setText] = useState('');
  const [text, setText] = useState('Friend in need is a friend indeed.');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  // const handleClick = ()=>{
  //   setIsEditing(true);
  // }

  return ( 
    <section>
    <h2>short circuit - examples</h2>
    <h2>{name || 'Anonymous'}</h2>
    
    {/* how && could be used. */}
    {text && <div>
      <h2>This is the text: </h2>
      <h3>{text}</h3>
      </div>}

    {user && <SomeComponent name = {user.name}/>}

    <h2>Ternary operator:</h2>
    <button className='btn'>{isEditing? 'Edit in progress' : 'Add edit'}</button>

    </section>
   );
};

const SomeComponent = ({name})=>{
  return (
    <section>
      <h2>name object:</h2>
      <h1>{name}</h1>
    </section>
  );
}

export default ShortCircuitExamples;
