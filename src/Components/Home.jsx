
import React from "react";
import { useEffect,useRef } from "react";
import Typed from "typed.js";



const Home =()=>{

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer", "Full-Stack Developer", "java Programmer","Tech Enthusiast","Freelancer"], 
    
      typeSpeed: 100,
      backSpeed: 100,
      loop:true,
      smartBackspace: true, showCursor: true,
      
   
    });

  
    return () => {
      typed.destroy();
    };
  });
    return (
        <>
        
       
      <div  className="Home " >
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
    <div className="Home_content ">
      <div className="table_cell">
        <div className="container">
        <p>Hello,</p>
          <h1 className="Home_title ">I am Siyaram Meena</h1>
<span  className="Typeing"   ref={el} ></span>
      
       
      </div>
      </div>
    </div>
  </div>

       </div>   
        </>
    )
}
export default Home;