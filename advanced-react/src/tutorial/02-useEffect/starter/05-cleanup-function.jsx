import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = ()=>{
    setToggle(!toggle);
  }
  return(
    <section>
      <h2>cleanup function</h2>
      <button className="btn" onClick={handleClick}>Toggle Component</button>

      {toggle && <SecondComponent/>}
    </section>
  );
};

const SecondComponent  = ()=>{
  useEffect(()=>{
    console.log("Hello render");
  },[])
  return <h1>Hello World!</h1>
} 

export default CleanupFunction;
