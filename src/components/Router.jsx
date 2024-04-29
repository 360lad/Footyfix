import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Registration from "../pages/Registration";
import Createtournament from "../pages/Createtournament";
import SingleTournament from "../pages/SingleTournament";
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
        <Route path="/tournaments/:id" element={<SingleTournament/>}/>
       </Routes>
       
       
       </BrowserRouter>
    )
}
export default Router;