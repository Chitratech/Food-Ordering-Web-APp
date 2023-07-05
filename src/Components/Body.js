import React from "react";
import ResCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const arr= useState(resList)
  const listofRestaturant =arr[0];
  const setlistofRestaturant =arr[1];
 //  const [listofRestaturant,setlistofRestaturant]=arr;

  const RatingBtn = () => { 
   const  filteredData = resList.filter((rating) => rating.data.avgRating > 4);
   setlistofRestaturant(filteredData);
   console.log(setlistofRestaturant);
  };

  const ResetBtn=()=>{
    setlistofRestaturant(resList);
  }
  return (
    <div>
      <div>
        <button onClick={RatingBtn} className="filter-btn" >
          4+ Ratings
        </button>
        <button onClick={ResetBtn} className="filter-btn">
          Reset
        </button>
      </div>
      <div className="res-Container">
        {listofRestaturant.map((restaturants) => (
          <ResCard key={restaturants.data.id} resData={restaturants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
