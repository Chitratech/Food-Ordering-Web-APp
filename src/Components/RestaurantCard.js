import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  return (
    <div className="Card-Container"  >
      <img
        className="main-food-banner"
        src={CDN_URL + resData.data.cloudinaryImageId}
        alt="meghana foods image banner"
      />
      <h3> {resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(",")} </h4>
      <h4>₹{resData.data.costForTwo / 100} For Two</h4>
      <h4>{resData.data.avgRating}stars</h4>
      <h4>{resData.data.deliveryTime}minutes delivery</h4>
    </div>
  );
};

export default ResCard;
