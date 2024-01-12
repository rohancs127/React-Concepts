import { useState } from "react";
const MultipleInputs = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e)=>{
    // console.log(e.target.name);
    setInfo({...info, [event.target.name]: event.target.value});
    // console.log("Entered ", e.target.name, " as ", e.target.value);
  }
  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={info.name} onChange={handleChange} name="name"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' value={info.email} onChange={handleChange} name="email"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' value={info.password} onChange={handleChange} name="password"/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
