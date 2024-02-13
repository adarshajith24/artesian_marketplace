import React from 'react'
import { Link } from 'react-router-dom'

function DeliveryAgent() {
  return (
    <div>
            <div className="user_log_box_blue">
              <p>Sign In as :</p>
              <Link to='/user_login'><p>User</p></Link>
              <Link to='/artist_login'><p>Artist</p></Link>
              <Link to='/delivery_agent_login' ><p className='active' >Delivery Agent</p></Link>
              {/* <p>Admin</p> */}
            </div>
            <div className="user_log_box_white">
              <p className="user_reg_title">Sign In as Delivery Agent</p>
              <div className="row">
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0 login_icon_input"
                    placeholder="First name"
                  />
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0 password_icon_input"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12 mt-2 user_log_forgot_pass">
                  <p>Forgot Password</p>
                </div>
                <div className="col-12 mt-2 user_reg_btn">
                  <button>Register</button>
                </div>
                <div className="col-12 mt-2 user_log_forgot_pass">
                  <p>Don't have an account? Register</p>
                </div>
              </div>
            </div>

            {/* <div className="user_reg_link" >
              <p>Have an account Login</p>
            </div> */}
          </div>
  )
}

export default DeliveryAgent
