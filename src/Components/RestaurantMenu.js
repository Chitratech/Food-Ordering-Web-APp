import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [pToggle, setPToggle] = useState(0);
  const { resId } = useParams();
  const resDetails = useRestaurantMenuData(resId);

  if (!resDetails?.cards || resDetails.cards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines } = resDetails.cards[0]?.card?.card?.info || {};

  const categories =
    resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center" data-testid="menu">
      <h1 className="font-bold m-4 p-5 text-2xl">{name}</h1>
      <h2 className="font-semibold">{cuisines?.join(",")}</h2>
      <h2 className="font-semibold">Menu</h2>

      {categories.map((cat, index) => (
        <RestaurantCategory 
          key={Math.random()}
          presentdata={index === pToggle ? true : false}
          modData={() => setPToggle(index === pToggle ? null : index)}
          datacat={cat.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
