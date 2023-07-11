import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {


  const {resIds}=useParams();
  const resDetails = useRestaurantMenuData(resIds);

  if (!resDetails?.cards || resDetails.cards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines } = resDetails.cards[0]?.card?.card?.info || {};
const {itemCards}= resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(",")}</h2>
      <h2>Menu</h2>
      <ul>
       {itemCards.map( allitems=>(
<li key={allitems.card.info.id}> {allitems.card.info.name}</li>
       )  ) }
 
     
      </ul>
    </div>
  );
};

export default RestaurantMenu;
