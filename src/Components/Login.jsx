import React, { useState } from 'react';
import './Login.css'
import Food7 from "../Images/Food7.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() { 
  const [loginFormVisible, setLoginFormVisible] = useState(true);

  const switchToLogin = () => {
    setLoginFormVisible(true);
  };

  const switchToRegister = () => {
    setLoginFormVisible(false);
  };

  return (
    <div className="App">
      <div className="account-page">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img src={Food7} alt="First slide" />
            </div>
            <div className="col-4"> 
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={switchToLogin}>Login</span>
                  <span onClick={switchToRegister}>Register</span>
                  <hr id="indicator" style={{ transform: loginFormVisible ? 'translateX(0px)' : 'translateX(100px)' }} />
                </div>
                {loginFormVisible ? (
                  <form action="" id="LoginForm">   
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-dark ms-auto px-4 rounded-pill">Login</button>
                    <a href="#">Forgot Password</a>
                  </form>
                ) : (
                  <form action="" id="RegForm">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-dark ms-auto px-4 rounded-pill">Register</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
