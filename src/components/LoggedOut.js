import "../App.css";
import {Link} from 'react-router-dom'

export const LoggedOut = ({ user, setUser }) => {
  

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("myToken");
    setUser();
  };
  return (
    <div className="div">
      <span className="logoutq">{user}Do you want to logout?</span>
      <div className="btncon">

      <button className="btnout" onClick={logOut}><Link to="/" className="link">Log out</Link></button></div>
    </div>
  );
};



