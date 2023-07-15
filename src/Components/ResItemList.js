import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ResItemList = ({ items }) => {
  
  const dispatch =useDispatch();
const addToCart=(item)=>{

  dispatch(addItem(item));
  console.log(item);
}

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left  w-12/12 border-gray-300 border-b-2"
        >
          <div className="flex justify-between">
            <div className=" ">
              <div className="font-semibold">{item.card.info.name} </div>
              <div>
                {"Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </div>
            </div>
            {item.card.info.imageId ? (
              <div>
                <button className="bg-black text-white absolute mt-24 m-16 p-2 rounded-lg font-semibold" onClick={()=> addToCart(item)}>
                
                  Add +
                </button>

                <div className="w-48 ">
                  <img
                    className="rounded-lg"
                    src={CDN_URL + item.card.info.imageId}
                   />
                </div>
              </div>
            ) : (
              <button className="bg-black text-white mr-16 p-2 rounded-lg font-semibold" onClick={()=> addToCart(item)}>
          
                Add +
              </button>
            )}
          </div>
          <div className="w-9/12"> {item.card.info.description} </div>
        </div>
      ))}
    </div>
  );
};

export default ResItemList;
