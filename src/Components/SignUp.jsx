
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Food9 from "../Images/Food9-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

function App() {
  /* signup*/
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const changeHandler = (t) => {
    let name1 = t.target.name;
    let val = t.target.value;
    setData({ ...data, [name1]: val });
  };

  const submitHandler = async (t) => {
    t.preventDefault();
    // try {
    //   let userData = Axios.post("http://localhost:3500/user", { ...data });
    //   console.log(userData);

    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const fdata = await Axios.post("http://localhost:3500/user", {
        ...data,
      });
      const { status, data: response } = fdata;
      const message = response.msg;
      console.log(message);
      if (status === 201) {
        alert("User creted Sucessfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  // if(!json.success){
  //  alert("Enter valid credentials")
  // }else{
  //   alert("Account created")
  //   navigate('/')
  // }

  /**/

  return (
    <div className="App">
      <div className="account-page">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img id="img" src={Food9} alt="First slide" />
            </div>
            <div className="col-4">
              <div className="form-container">
                <div className="form-btn">
                  <span>Sign-Up</span>
                </div>

                <form action="POST" id="RegForm" onSubmit={submitHandler}>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={changeHandler}
                  />
                  <button
                    type="Submit"
                    className="btn btn-dark ms-auto px-4 rounded-pill"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;