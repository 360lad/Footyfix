// import { Children } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function Layout({Children}){
    return(
        <div>
            <Nav />
<main>
    {Children}
</main>
        <Footer/>
        </div>
    )
}
export default Layout