import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Createtournament from "../pages/Createtournament";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Registration from "../pages/Registration"


function Router(){
    return(
       <BrowserRouter>
       <Routes>
        <Route 
        path="/"
        element={<Layout><Home/></Layout>}/>
        <Route path="/registration" element={<Layout><Registration/></Layout>}/>
        <Route path="/tournament"
        element={<Layout><Createtournament/></Layout>}/>
        <Route path="/login-page"element={<Layout><Login/></Layout>}/>
        <Route path="/signup"element={<Layout><Signup/></Layout>}/>
       </Routes>
       
       
       </BrowserRouter>
    )
}
export default Router;