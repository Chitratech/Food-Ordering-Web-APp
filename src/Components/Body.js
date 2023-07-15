import React, { useContext, useEffect } from "react";
import ResCard,{withPromoted} from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [originalRestaturants, setOriginalRestaturants] = useState([]);
  const [listofRestaturant, setlistofRestaturant] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const LablePromtedResCard= withPromoted(ResCard);
  useEffect(() => {
    fetchData();
  }, []);

  //fetch api code
  const fetchData = async () => {
    const foodApi = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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
    if (!searchValue) {
      setlistofRestaturant(originalRestaturants);
    } else {
      const nameFilter = originalRestaturants.filter((restaturantname) =>
        restaturantname.data.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

      setlistofRestaturant(nameFilter);
    }
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

  const {username ,setUserName}= useContext(UserContext);

  

  const onlineStatusCheck = useOnlineStatus();

  if (onlineStatusCheck == false) {
    return <h2>Internet gayo </h2>;
  }
  return originalRestaturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex p-6">
        <input data-testid="search-input"
          type="search"
          className="border-solid border-2 border-black"
          value={searchValue}
          onChange={handelSearchChnages}
        />
        <button data-testid="search-btn"
          className=" ml-4 bg-gray-200 border-blue-200  px-4  py-2 rounded-lg"
          onClick={searchChanges}
        >
          Search
        </button>
        <div >
         
          <button  className="bg-slate-500 ml-4 px-4  py-2 text-red-100" onClick={RatingBtn}>
            4+ Ratings
          </button>
          <button  className="bg-slate-500 px-4  py-2 ml-4 " onClick={ResetBtn} >
            Reset
          </button>

          <input type="text" className="border-black border-2"  value={username} 
          onChange={(e)=> setUserName(e.target.value) }/>
        </div>
      </div>
      {listofRestaturant.length === 0 ? <h2>Data not found</h2> : null}

      <div className=" flex flex-wrap m-4" data-testid="resList">
        {listofRestaturant.map((restaturants) => (
          <Link
            key={restaturants.data.id}
            to={"/restaurants/" + restaturants.data.id}
          >
          {restaturants.data.promoted ? (<LablePromtedResCard resData={restaturants}  /> ): (   <ResCard resData={restaturants} />) }
         
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
