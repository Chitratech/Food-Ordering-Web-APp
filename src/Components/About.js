
import User from "./User"; 
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component {
    constructor(){
        super();
        console.log("Parent Constructor");
    }

    componentDidMount(){
   
       


    }

    render(){
      console.log("Parent render");
        return(
            <><div>About</div>
       
            <UserClass name={"Prasanna"}  />
            </>
            
        )
    }

}


export default About;