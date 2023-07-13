import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime}=resData.data;

  return (
    <div className=" relative flex flex-wrap w-[250px] h-[350px] m-4 p-4 border-black bg-slate-200  hover:bg-slate-400"  >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="meghana foods image banner"
      />
      <p className="font-bold text-lg  " > {name}</p>
      <div className="text-sm break-words line-clamp-3 overflow-hidden ">{cuisines.join(",")} </div>
      <p className="">₹{costForTwo / 100} For Two</p>
      <p className="">{avgRating}stars</p>
      <p className="">{deliveryTime}minutes delivery</p>
    </div>
  );
};


export const withPromoted =(ResCard)=>{
return(props)=>{
  return(
    <div>
    <label className="absolute z-10 bg-black text-white  shadow-lg mx-4 p-1">Promoted</label>
    <ResCard  {...props} />
    </div>
  );
};
};
export default ResCard;
