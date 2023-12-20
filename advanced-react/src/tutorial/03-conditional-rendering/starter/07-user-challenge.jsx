import { useState } from "react";

const UserChallenge = () => {
  const userObj = {name: 'Rohan'};
  const [user, setUser] = useState();

  const handleClick = ()=>{
    if(!user)
    setUser(userObj.name);
    else
    setUser();
  }
  return (
    user ? 
    <section style={{marginTop:'200px'}}>
      <h1>Hello There, {user}</h1>
      <button className="btn" onClick={handleClick}>Logout</button>
    </section>
    :
    <section style={{marginTop:'200px'}}>
      <h1>Please Login</h1>
      <button className="btn" onClick={handleClick}>Login</button>
    </section>
  );
};

export default UserChallenge;
