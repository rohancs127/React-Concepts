import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);

  
  // const handleClick = ()=>{
  //     if(alert){
  //       setAlert(false);
  //       return;
  //     }
  //     setAlert(true);
  // }

  return (
    <section>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={()=> setAlert(!alert)}>Toggle Alert</button>
      {alert && <AlertDisplay/>}
    </section>
  );
};

const AlertDisplay = ()=>{
  return(
    <div style={{backgroundColor:'pink', color:'red', marginTop:'30px'}}>
      <h3>Hello World</h3>
    </div>
  )
};

export default ToggleChallenge;
