import React from "react";
import './SignUp.css'
import { useState } from "react";

const Signup =() =>{
    const [leftPosition, setLeftPosition] = useState(0);
  
    const shiftRight = () => {
      setLeftPosition(prevPosition => prevPosition + 20);
    };
  return(
    
    <div className="d-flex justify-content-center bg-primary align-items-center vh-100" id="b-img">
    <div className="border border-5 border-light p-4 bg-white"> 
        <form>
            <h3 className="text-center">Sign Up</h3>
           <div className="mb-3">
            <div className="mb-3">
            <span role="img" aria-label="User Icon">&#x1F464;</span>
                <input type="email" placeholder="Your Name"
                className="form-control"
                name="Name"/> 
            </div>
            <div className="mb-3">
            <span role="img" aria-label="Envelope Icon">&#x2709;</span>
                <input type="signup" placeholder="Your Email"
                className="form-control"
                name="Email"/>
            </div>
            <div className="mb-3">
            <span role="img" aria-label="Password Icon">&#x1F511;</span>
                <input type="signup" placeholder="Password"
                className="form-control"
                name="Password"/>
            </div>
            <div className="mb-3">
            <span role="img" aria-label="Lock Icon">&#x1F512;</span>
                <input type="signup" placeholder="Repeat your password"
                className="form-control"
                name="Password"/>
            </div>
            <div>
               
                <input type="checkbox" className="custom-control custom-checkbox mb-1"/>
                <label htmlFor="checkbox" className="ms-1">I agree all statements in Terms of service</label>
            </div>
            <div className="d-grid">
                <button className="btn btn-secondary" type="submit">Register</button>
            </div>
            </div>
        </form>
    </div>
</div>
    
    );
};
export default Signup


