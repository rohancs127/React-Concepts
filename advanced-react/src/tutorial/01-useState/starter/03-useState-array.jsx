import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clearAll = ()=>{
    setPeople([])
  }
  const removeOne = (id)=>{
    const newPeople = people.filter((person)=>{
      if(person.id !== id)
      return true
    })
    setPeople(newPeople);
  }
  return (
    <section>
      <h2>UseState Array Example</h2>
      {people.map((person)=>{
        const {id,name} = person;
        
        return (
          <div key={id}>
          <h4>{name}</h4>
          <button className="btn" onClick={()=>removeOne(id)}>remove</button>
          </div>
        )
      })}
      <button style={{marginTop: '50px', boxShadow: '0px 0px 2px black'}} className="btn" onClick={clearAll}>Clear All</button>
    </section>
  );
};

export default UseStateArray;
