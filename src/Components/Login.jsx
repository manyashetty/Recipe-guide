import React from "react";
import { useState } from "react";
import './Login.css'

    

const Login =() =>{
    const [leftPosition, setLeftPosition] = useState(0);
  
    const shiftRight = () => {
      setLeftPosition(prevPosition => prevPosition + 200); // Adjust the shift amount as needed
    };
  return(
    <div className="d-flex justify-content-center bg-primary align-items-center vh-100" id="b-img">
        <div className="border border-5 border-light p-4 bg-white"> 
            <form>
                <h3 className="text-center">Log In</h3>
               <div className="mb-3">
                <div>
                <span role="img" aria-label="User Icon">&#x1F464;</span>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email"
                    className="form-control"
                    name="Email"/> 
                </div>
                <div className="mb-3">
                <span role="img" aria-label="Lock Icon">&#x1F512;</span>
                    <label htmlFor="signup">Password</label>
                    <input type="signup" placeholder="Enter your password"
                    className="form-control"
                    name="Password"/>
                </div>
                <div>
                   
                    <input type="checkbox" className="custom-control custom-checkbox mb-1"/>
                    <label htmlFor="checkbox" className="ms-1">Remember Me</label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-secondary" type="submit">Log In</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    );
};
export default Login