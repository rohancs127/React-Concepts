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
        const {id, login, avatar_url, html_url}  =user
        return <li key={id}>
          <img src={avatar_url} alt={login}></img>
          <div>
            <h5>{login}</h5>
            <a href={html_url}>Profile</a>
            </div>
        </li>
      })}</ul>
    </section>
  );
};
export default FetchData;
