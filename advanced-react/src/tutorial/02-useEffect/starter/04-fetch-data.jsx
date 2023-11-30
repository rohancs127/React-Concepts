import { useState, useEffect } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log('hello');

    const fetchData = async() =>{

      try {   
      const response  = await fetch(url);
      const users = await response.json();
      setUsers(users)
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
      <h2>Github Users</h2>
      <ul className="users">{users.map((user)=>{
        return <li>{user.login}</li>
      })}</ul>
    </section>
  );
};
export default FetchData;
