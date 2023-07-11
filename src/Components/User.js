
import { useState } from "react";
const User=({name})=>{

    const [counts,setCount]=useState(0);

    const IncCount=()=>{

        setCount(abc=> abc+1);
    }
    
    

    return(

        <div> 
            <input type="number" value={counts} />
            <button onClick={IncCount}> Ince</button>
            <h2>{name}</h2>
            <h4>Designation</h4>
          <p>description</p>
        </div>

    )
}

export default User;