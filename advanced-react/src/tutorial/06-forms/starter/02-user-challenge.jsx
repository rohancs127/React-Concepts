import { useState } from "react";
import {data} from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  console.log(data);

  const handleNameChange = (e)=>{
    setName(event.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name, ' has logged in...');
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={handleNameChange}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h1>User List</h1>
      {users.map((user)=>{
        return (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
