
import { useState } from "react";
import ResItemList from "./ResItemList";



const RestaurantCategory = ({ datacat , presentdata ,modData}) => {


    const togglehead=()=>{
   
      modData();
      
    }

  return (
    <div className="px-40">
      <div onClick={togglehead} className=" cursor-pointer text-center flex bg-gray-200 p-4  justify-between">
        <p className="font-bold">{datacat.title}({datacat.itemCards.length})</p> <p>^</p>
        
      </div>
      <div className="p-4 bg-gray-50">
        {presentdata &&  <ResItemList key={datacat.itemCards.title}  items ={datacat.itemCards}/>}
       
        </div>
    </div>
  );
};

export default RestaurantCategory;
