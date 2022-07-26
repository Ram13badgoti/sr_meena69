import React from "react";

import Pcard from "./ProjectCardData";
import Project from "./ProjectCard";

const project =(props)=>{
 
    return(
        <>
           { Pcard.map((val,index)=>{
 
 return (
 <Project

key = {val.id}
 src ={val.src} 
 title ={val.title}
 details ={val.details}
 language = {val.language}
 link={val.link}

 />
 )
 })}
       
        
        </>
    )
}

export default project;