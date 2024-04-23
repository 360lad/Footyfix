import { BrowserRouter,Routes,Route } from "react-router-dom";


import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Createtournament from "../Pages/Createtournament";
function Router(){
    return(
       <BrowserRouter>
       <Routes>
        <Route 
        path="/"
        element={<Layout><Home/></Layout>}/>
        <Route path="/Createtournament"
        element={<Layout><Createtournament/></Layout>}/>
       </Routes>
       
       
       </BrowserRouter>
    )
}
export default Router;