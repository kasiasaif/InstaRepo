
import "../App.css";
import React, { useState, useEffect } from "react";
import { signUpFetch, tokenCheck , logInFetch} from "../utils";


export const Register =  () =>{
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [arr, setArr] = useState([]);
  const [logBool, setLogBool] = useState(true);


  useEffect(()=>{
    fetchReq();
  },[])


  useEffect(() => {
    tokenCheck(setUser);
  }, []);

const fetchReq = async () =>{
  const response = await fetch('https://picsum.photos/v2/list');
  const data = await response.json();
  setArr(data);
    
        }


const submitHandler = (e) => {
  e.preventDefault();
  if (email) {
    signUpFetch(username, email, password, setUser);
  } else {
    logInFetch(username, password, setUser);
  }
};
  return(
    <div className="App">
      
    {!user ? (
      <div className="container">
         <div className="welcome">WELCOME ON INSTACLONE </div>
          <div className="register">Register now</div>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          {logBool && (
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" type="email"
            />
          )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" type="password"
          />
          <button  className="button" type="submit"><span>Register</span></button>
        </form>
        <button  className="button" onClick={() => setLogBool(!logBool)}><span>
            {logBool ? "Do you want to log in?" : "Do you want to sign up?"}
          </span></button>
         
      </div>) : (<div >
                <h2 className="user" >Welcome {user}</h2>
                {arr.map((item, index)=>{
              return(
                <div className="row">
                  <div className="column">
                <p key={index}>{item.author}</p>
                <img  className="image" src= {item.download_url} alt="random"></img></div>
                </div>
                
              );
            })}
                </div>
              )}
            </div>
            
          )}

export default Register;
//     <div className="App">
    
//       {!user ?(
//         <div className="container">
//           <div className="welcome">WELCOME ON INSTACLONE </div>
//           <div className="register">Register now</div>
//           <form onSubmit={submitHandler}>
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//             />
//             {logBool && (
//               <input type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//               />
//             )}
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password" type="password"
//             />
//             <button className="button" type="submit"><span>Register</span></button>
//           </form>
//           <button className="button" onClick={() => setLogBool(!logBool)}><span>
//             {logBool ? "Do you want to log in?" : "Do you want to sign up?"}
//             </span></button>
//         </div>  ) : (<div >
//                 <h2 className="user" >Welcome {user}</h2>
//                 {arr.map((item, index)=>{
//               return(
//                 <div className="row">
//                   <div className="column">
//                 <p key={index}>{item.author}</p>
//                 <img  className="image" src= {item.download_url} alt="random"></img></div>
//                 </div>
                
//               );
//             })}
//                 </div>
//               )}
//             </div>
            
//           )}

// export default Register;










