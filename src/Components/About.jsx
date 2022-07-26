import React from "react";

const About = () => {


  return (
    <>
   
   <div className="about_container" >
     
       

      <div className="container">
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
  <div className="row ">

    <div className="col "> <img src="srphoto.jpg" className=" rounded-circle mx-auto d-block " alt="" /></div>

    <div className="col col2  ">
      <div className="about_title text-capitalize mx-auto text-center ">
      <p >about me</p>
      <hr className=" w-25 mx-auto "/> </div>
      <p className="fs-3 mx-5 text-success  ">
         
         Hi! I'm <strong>Siyaram Meena</strong> an multi-tasking,
         quick learner and  talented person budding information of multiple coding language and can work as a front-end development and back-end development. I am pursuing my B.TECH (2020-24) in Computer
         Science from IIIT BHOPAL.
         <br />
        Apart from web development i'm java programar and intermediate java developer.
         <br />
         My goal is to be placed in a reputed company where I can expand my
         skills, knowledge and experience.
       </p>
       <div className="resume_btn d-flex align-items-center  mt-5 justify-content-center  ">
       <button className="btn mt-5 btn-outline-success btn-lg w-25"  onClick={()=>{
        window.open("https://drive.google.com/file/d/1tylH7Xwqh11u3YNBiYJqMLM4sxYM4ZHj/view?usp=sharing");
       }}> RESUME</button>
       </div>
       </div>
  


</div>
       
</div>
        
     </div>  
      </div>

    
    </>
  );
};
export default About;
