import React, { useEffect } from "react";
import ResCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalRestaturants, setOriginalRestaturants] = useState([]);
  const [listofRestaturant, setlistofRestaturant] = useState([]);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    fetchData();
  }, []);
 
   //fetch api code
  const fetchData = async () => {
    const foodApi = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0970811&lng=77.57698669999999&page_type=DESKTOP_WEB_LISTING"
    );
    const foodApiJsonFormat = await foodApi.json();

    const restaturants = foodApiJsonFormat?.data?.cards[2]?.data?.data?.cards;
    setOriginalRestaturants(restaturants || []);
     setlistofRestaturant(restaturants || []);
   
  };

  //search bar code
  const handelSearchChnages = (e) => {
    setSearchValue(e.target.value);
  };
  const searchChanges = () => {
    const nameFilter = originalRestaturants.filter((restaturantname) =>
      restaturantname.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setlistofRestaturant(nameFilter);
  };

  //four star rating code 
  const RatingBtn = () => {
    const filteredData = originalRestaturants.filter(
      (rating) => rating.data.avgRating > 4
    );
    setlistofRestaturant(filteredData);
  };

  const ResetBtn = () => {
    setlistofRestaturant(originalRestaturants);
  };

 
  if (originalRestaturants.length === 0) {

    return <Shimmer />;
  }
  return (
    <div>
      <div>
        <input
          type="search"
          value={searchValue}
          onChange={handelSearchChnages}
        />
        <button className="filter-btn" onClick={searchChanges}>
          Search
        </button>
      </div>
      <div>
        <button onClick={RatingBtn} className="filter-btn">
          4+ Ratings
        </button>
        <button onClick={ResetBtn} className="filter-btn">
          Reset
        </button>
      </div>
      
   {listofRestaturant.length === 0 ? <h2>Data not found</h2> : null}
  <div className="res-Container">
        {listofRestaturant.map((restaturants) => (
          <ResCard key={restaturants.data.id} resData={restaturants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
