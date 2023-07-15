import { CDN_URL } from "../utils/constants";

const CartItems=({name , imageId,price})=>{



    return(
        <div>
        <div
   
        className="text-left  w-12/12 border-gray-300 border-b-2"
      >
        <div className="flex justify-between">
       
            <div  className="w-48 p-4"> <img   className="rounded-lg" src={CDN_URL+imageId}  /> </div>
            <div className="mx-12 "> <div className="font-semibold">{name} </div>
            <div>
              {"Rs."}
              {price / 100 }
            </div>
          </div>
          
        </div>
    
      </div>
   
      </div>
    );


};

export default CartItems ;