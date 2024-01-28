import Home from "./components/Home";
import Login from "./components/Login";
import LoginAvocat from "./components/LoginAvocat.jsx";
import Register from "./components/Register";
import RegisterAvocat from "./components/RegisterAvocat.jsx";
import Search from "./components/Search.jsx";
import ProfilAvocat from "./components/ProfilAvocat.jsx";
import Commentaire from "./components/Commentaire.jsx";

import "./index.css";


import {/* BrowserRouter,*/ Route, Routes } from "react-router-dom";
import LoginHandler from "./components/LoginHandler.jsx";
import Dashboard from "./components/Dashboard.jsx";
import RegisterClient from "./components/RegisterClient.jsx";
import Rendez from "./components/Rendez.jsx";
import Appointments from "./components/Appointments.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Choice from "./components/Choice.jsx";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginAvocat" element={<LoginAvocat />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/RegisterAvocat" element={<RegisterAvocat/>}/>
        <Route path="/Search" element={<Search />} />
        <Route path="/ProfilAvocat/:id" element={<ProfilAvocat />} />
        <Route path="/ProfilAvocat/:id/Commentaire" element={<Commentaire />} />
        <Route path="/login-handler" element={<LoginHandler />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/RegisterClient" element={<RegisterClient />}/>
        <Route path="/Render-vous/:id" element={< Rendez/>}/>
        <Route path="/lawyers/appointments" element={< Appointments/>}/>
        <Route path="/lawyers" element={<EditProfile />}/>
        <Route path="/choices" element={<Choice />}/>

      </Routes>
    // </BrowserRouter>
  );
}

export default App;
