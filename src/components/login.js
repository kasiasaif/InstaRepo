
import React, { useState } from "react";
export const Login= ({setter, handler})=>{
    const [val, setVal] = useState();

    
    
    return (
        <form onSubmit={handler}>
            
        <input placeholder="username" type="text" value={val} onChange={(e)=> setter(e.target.value)}></input>
        <input placeholder="password"  type="password"  value={val}   ></input>
        
        

        <button onClick={() => setVal(() => "")}>Login</button>

        
        </form>
    );
};
