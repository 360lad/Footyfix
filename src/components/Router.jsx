import { BrowserRouter,Routes,Route } from "react-router-dom";


import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Createtournament from "../Pages/Createtournament";
import Login from "../Pages/Login";
import SignUp from "../Pages/Sign-up";
function Router(){
    return(
       <BrowserRouter>
       <Routes>
        <Route 
        path="/"
        element={<Layout><Home/></Layout>}/>
        <Route path="/Createtournament"
        element={<Layout><Createtournament/></Layout>}/>
        <Route path="/Login"element={<Layout><Login/></Layout>}/>
        <Route path="/Sign-up"element={<Layout><Sign-up/></Layout>}/>
       </Routes>
       
       
       </BrowserRouter>
    )
}
export default Router;