import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';


import AOS from 'aos';
import 'aos/dist/aos.css';

const project =(props)=>{
    AOS.init({ duration : 2000});
 return(
        <>
 <div data-aos="fade-up" data-aos-anchor-placement="top-center">

<div className="cards" >
<div data-aos="flip-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-anchor-placement="top-center">
      <div className="card">
   

         <img src={props.src} alt="dark" />
       
        
         
        
         <span className="title">{props.title}</span>
        <div className="details">
         <span >{props.details}</span>
         </div>
         <div style={{fontSize:"14px",fontWeight:"500",marginLeft:"10px"}}> Language: { props.language}</div>
        
         <a href={props.link} traget="_nextpage" style={{marginLeft:"10px"}}><button className="button"> <GitHubIcon/>  GITHUB</button> </a>
             
            
        
   

   </div>
   </div>
  </div>
  </div>
  </>
)
}

export default project;