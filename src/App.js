import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "remixicon/fonts/remixicon.css";
import UserForgetPassword from "./Components/User/UserForgetPassword";

import UserRegistration from "./Components/User/UserRegistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import DeliveryAgentForgetPassword from "./Components/DeliveryAgent/DeliveryAgentForgetPassword";
import ArtistForgetPassword from "./Components/Artist/ArtistForgetPassword";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/user_login" element={<Login data='user'/>} />
          <Route path="/user_register" element={<UserRegistration/>} />
          <Route path="/user_forgetpassword" element={<UserForgetPassword/>}/>
          <Route path="/artist_login" element={<Login data='artist'/>} />
          <Route path="/artist_forgetpassword" element={<ArtistForgetPassword/>}/>
          <Route path="/delivery_agent_login" element={<Login data='deliveryAgent'/>} />
          <Route path="/delivery_agent_forgetpassword" element={<DeliveryAgentForgetPassword/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
