import { useState, useEffect } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    console.log('hello');

    const fetchData = async() =>{

      try {   
      const response  = await fetch(url);
      const users = await response.json();
      console.log(users);
      // console.log(response);
      } catch (error) {
        console.log(error);
      }

    }

    fetchData();
  }, []);
  return (
    <section>
      <h2>fetch data example</h2>
    </section>
  );
};
export default FetchData;
