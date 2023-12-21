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
    const scrollFunction = ()=>{
      console.log('scrolled');
    }
    window.addEventListener('scroll', scrollFunction())
    return window.removeEventListener('scroll', scrollFunction())
  },[])
  return <h1 style={{marginBottom:'500px'}}>Hello World!</h1>
} 

export default CleanupFunction;
