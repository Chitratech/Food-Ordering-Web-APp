import { useRouteError } from "react-router-dom"
const Error=()=>{
const err= useRouteError();
console.log(err);
    return(
        <div >Error hai bhaya
            <h2>{err.status} : {err.data}</h2>
            </div>
        
    )
}

export default Error;