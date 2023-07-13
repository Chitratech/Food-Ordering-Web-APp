import { useState } from "react"

const Acoords = ({name,descp, isVisible, setIsVisible})=>{


    return(
        <div className="border-solid border-2 border-black m-4" >
             <h2>{name}</h2>
                  { isVisible ? ( 
                    <button onClick={setIsVisible(true)}>show  </button>
                  ) :(<button  onClick={setIsVisible(false)}> hide</button>) }
             
           
             { isVisible  &&      <p>{descp} </p> }

        </div>
     
        
     
    )
}


const InstaMart=()=>{


    const [configureaccrd , setConfigureaccrd]=useState(
        {
            showAbout: false,
            showTeam:false,
            showgoals:false,
            showcareers:false,
        }
    );
    return(
<>   
 <h1> INstaMart</h1>
 <div className="p-4 ">
        <Acoords isVisible={configureaccrd.showAbout} 
         setIsVisible={ ()=> 
            setConfigureaccrd ({
              showAbout: true,
            showTeam:false,
            showgoals:false,
            showcareers:false,
            }) }  name={"about "} descp={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium fermentum ultrices. Nam ornare sagittis eleifend. Vestibulum quam dolor, tristique ac viverra ultrices, rutrum quis justo. Donec sed risus in magna porttitor facilisis vitae vitae tortor. Nulla vehicula tincidunt arcu, a bibendum dolor pretium eu. Fusce ac viverra ipsum, vitae ultricies purus. Etiam viverra fringilla orci, vitae malesuada elit facilisis in."} />
        <Acoords  isVisible={configureaccrd.showTeam}
         setIsVisible={ ()=>setConfigureaccrd({
            showAbout: true,
            showTeam:false,
            showgoals:false,
            showcareers:false,
            })}   name={"tems"} descp={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium fermentum ultrices. Nam ornare sagittis eleifend. Vestibulum quam dolor, tristique ac viverra ultrices, rutrum quis justo. Donec sed risus in magna porttitor facilisis vitae vitae tortor. Nulla vehicula tincidunt arcu, a bibendum dolor pretium eu. Fusce ac viverra ipsum, vitae ultricies purus. Etiam viverra fringilla orci, vitae malesuada elit facilisis in."} />
    
    <Acoords  isVisible={configureaccrd.showgoals} 
    setIsVisible={()=>setConfigureaccrd({ 
        showAbout: false,
            showTeam:true,
            showgoals:false,
            showcareers:false,
            })}  name={"goals"} descp={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium fermentum ultrices. Nam ornare sagittis eleifend. Vestibulum quam dolor, tristique ac viverra ultrices, rutrum quis justo. Donec sed risus in magna porttitor facilisis vitae vitae tortor. Nulla vehicula tincidunt arcu, a bibendum dolor pretium eu. Fusce ac viverra ipsum, vitae ultricies purus. Etiam viverra fringilla orci, vitae malesuada elit facilisis in."} />
    
    <Acoords  isVisible={configureaccrd.showcareers} 
    setIsVisible={()=>
        setConfigureaccrd({ 
            showAbout: false,
            showTeam:false,
            showgoals:false,
            showcareers:true,
            })
            }  name={"Careers"} descp={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium fermentum ultrices. Nam ornare sagittis eleifend. Vestibulum quam dolor, tristique ac viverra ultrices, rutrum quis justo. Donec sed risus in magna porttitor facilisis vitae vitae tortor. Nulla vehicula tincidunt arcu, a bibendum dolor pretium eu. Fusce ac viverra ipsum, vitae ultricies purus. Etiam viverra fringilla orci, vitae malesuada elit facilisis in."} />
    </div>
    </>
    
    )
}


export default InstaMart;