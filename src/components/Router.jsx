import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Registration from "../pages/Registration";
import Createtournament from "../pages/Createtournament";
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
       </Routes>
       
       
       </BrowserRouter>
    )
}
export default Router;