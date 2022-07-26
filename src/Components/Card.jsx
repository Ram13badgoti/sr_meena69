import  React  from "react";



function Card(props){
  
   return ( 
   <>
 
   <div className="cards" >
      <div className="card">
       
         <img src={props.imgsrc} alt="dark" />
         <div className="card_info">
         <span className="card_category">{props.cname}</span>
         <h3 className="sname">{props.sname} </h3>
            <a href={props.link}target="_link">
               <button>Watch Now</button>
            </a>
        
      </div>
   </div>
   </div>
 
  
   </>
   );

}
   
 
export default Card;

 
 