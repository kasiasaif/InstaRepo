import React, {useEffect, useState} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router';
import './App.css';
import { Login } from './components/login';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [arr, setArr] = useState([]);
  
   
  useEffect(()=>{
    fetchReq();
  },[])

  const submitHandler = (e) => {
e.preventDefault();
setUsername(user);
  }

  const fetchReq = async () =>{
  const response = await fetch('https://picsum.photos/v2/list');
  const data = await response.json();
  setArr(data);

    }

  return (
    <div className="App">
      
      {/* <h1>{user}</h1> */}
      {username ? <h1>Welcome {username}</h1> : <h1>Please Log In</h1>}
      {/* {username && <h2>Success</h2>} */}
    <Login setter={setUser} handler={submitHandler} />

    {arr.map((item, index)=>{
      return(
        <div>
        <p key={index}>{item.author}</p>
        <img  className="image" src= {item.download_url} alt="random"></img>
        </div>
        
      );
    })}
    
    </div>
    
  );
};
export default App;
