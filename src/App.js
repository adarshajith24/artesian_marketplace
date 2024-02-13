import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "remixicon/fonts/remixicon.css";
import UserRegistration from "./Components/User/UserRegistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/user_login" element={<Login data='user'/>} />
          <Route path="/user_register" element={<UserRegistration/>} />
          <Route path="/artist_login" element={<Login data='artist'/>} />
          <Route path="/delivery_agent_login" element={<Login data='deliveryAgent'/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
