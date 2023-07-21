
 const Shimmer =()=>{
    const ShimerCards =()=>{ 
        return(
            <div className="border-2 bg-slate-500 w-72 h-80 m-8">
      <div className="bg-gray-600 border-l-blue-300  h-40 w-40  p-10 relative left-14 top-10 "> </div>
      <div > </div>
      <div className="bg-gray-600 w-60 h-2 rounded left-2 relative top-16" > </div>
      <div className="bg-gray-600 w-60 h-2 rounded left-2 relative top-20" > </div>
      <div className="bg-gray-600 w-60 h-2 rounded left-2 relative top-24" > </div>
          </div>
          
        )
    } ;

return(
<div data-testid="shimmer" className="shimmer-Warp flex flex-wrap m-10   ">
<ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />
   <ShimerCards />

   </div>    
)

} 

export default Shimmer;