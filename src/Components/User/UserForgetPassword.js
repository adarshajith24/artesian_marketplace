import React from "react";
import "../User/UserLogin.css";
import logo from "../../Assets/logo.svg";
import"../User/UserFP.css"

function UserForgetPassword() {
  return (
    <div>
    <div className="user_reg">
      <div className="row user_reg_box">
        <div className="col-lg-6 col-md-6 col-sm-6 user_reg_box1">
          <div className="user_reg_box1_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="user_reg_name">
            <h3>Museofire</h3>
            <p>The art of connection</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 FPimg" >
        <div>
            
            <div className="user_log_box_white userFP">
              <p className="user_reg_title">User Reset Password</p>
              <div className="row">
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0 password_icon_input"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0 password_icon_input"
                    placeholder="Password again"
                  />
                </div>
                
                <div className="col-12 mt-2 user_reg_btn userbtn">
                  <button>Change</button>
                </div>
                <div className="col-12 mt-2 user_log_forgot_pass FPp">
                  <p>Don't have an account? Register</p>
                </div>
              </div>
            </div>

            {/* <div className="user_reg_link" >
              <p>Have an account Login</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserForgetPassword