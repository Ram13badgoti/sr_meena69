import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

import { ModalFooter } from "react-bootstrap";

const Contact =()=>{
 return (
    <>
    
       <div data-aos="fade-up" data-aos-anchor-placement="top-center">
       <Form>
        <div className="FContainer  mt-4 ">
        <Row className= " mb-2 p-4  ">
        <Form.Group className="" as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="fs-5" type="text" placeholder=" First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"  className="fs-5" placeholder="Last Name" />
        </Form.Group>
    </Row>
        <Form.Group className="  p-4" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ctype="email" className="fs-5" placeholder="Enter email" />
        </Form.Group>

        <Form.Group  className=" p-4"  controlId="formGridPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" className="fs-5" placeholder="number" />
        </Form.Group> 
     
        <div className="p-4">
  <label  className="form-label">How i can help you!</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      <Button   className="mt-4 position-absolute " variant="primary" type="submit" >
        Submit
      </Button>
      </div>
     </Form>
     </div>
     

     <ModalFooter   className="text-center text-white footer_bar   " style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
    
    <div className="container   p-4 ">
    
      
        <a
           className="btn btn-primary btn-floating rounded-circle m-2"
           style={{backgroundColor: "#3b5998"}}
           href="https://www.facebook.com/srmeena.kondli/"
         
           ><i className="fab fa-facebook-f"></i
          ></a>

     
        <a
           className="btn btn-primary  rounded-circle btn-floating m-2"
           style={{backgroundColor:"#55acee"}}
           href="https://twitter.com/SR_Meena13?t=-AJ3EXHeZuauO-FpsdQLLQ&s=09"
          
           ><i className="fab fa-twitter"></i
          ></a>

      <a
           className="btn btn-primary rounded-circle btn-floating m-2"
           style={{backgroundColor:"#ac2bac"}}
           href="https://www.instagram.com/sr_meena69/"
       
           ><i className="fab fa-instagram"></i
          ></a>

    
        <a
           className="btn btn-primary  rounded-circle btn-floating m-2"
           style={{backgroundColor: "#0082ca"}}
           href="https://www.linkedin.com/in/siyaram-meena-437614212/"
          
           ><i className="fab fa-linkedin-in"></i
          ></a>
      
        <a
           className="btn btn-primary rounded-circle btn-floating m-2"
           style={{backgroundColor:"#333333"}}
           href="https://github.com/Ram13badgoti"
        
           ><i className="fab fa-github"></i
          ></a>
    
 

 
    <div className="text-center " >
      © 2022 Copyright :
      <a className="text-white" href=" #"> sr_meena69</a>
    </div>
   </div>
  </ModalFooter>

   
       
        </>
    )
}

export default Contact;