import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e)=>{
    console.log(event.target.name);
  }
  return (
    <section>
      <form className="form">
        <h1>Controlled inputs</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-input" value={name} onChange={handleChange}/>
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" className="form-input" value={email} onChange={handleChange}/>
        </div>

          <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
};
export default ControlledInputs;
