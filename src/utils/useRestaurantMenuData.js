import { RES_URL } from "./constants";
import { useState ,useEffect } from "react";

const useRestaurantMenuData = (resid)=>{

const [resinfo, setResInfo]= useState(null);
    

useEffect(
    ()=>{
        fechdata();  
    },[]);

    const fechdata= async()=>{
        const data =await fetch(RES_URL+resid);
   const datajson = await data.json();
  setResInfo( datajson.data);
    }
    return resinfo;
}


export default useRestaurantMenuData;