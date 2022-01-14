import "../App.css";
import Register from "./Register";

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

      <button className="btnout" onClick={logOut}><span></span>Log out</button></div>
    </div>
  );
};



