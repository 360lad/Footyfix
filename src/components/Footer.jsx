// import { MdPhone } from "react-icons/md";


function Footer(){
    return(
        <div>
        <footer className="flex items-center justify-evenly text-[white]">
            <div>
                <h2>Quick links</h2>
                <ul>

                <li>Home</li>
                <li>Registration</li>
                <li>My Tournaments</li>
                <li>Login</li>
                <li>Sign up</li>
                </ul>
            </div>
            <div>
                <h2>Busines</h2>
                <ul>
                    <li>Payments</li>
                    <li>TOurnaments</li>
                    <li>Updates</li>
                    <li>Group</li>
                </ul>
            </div>
            <div>
                <h2>More</h2>
                <ul>
                    <li>Terms and conditions</li>
                    <li>Data privacy statement</li>
                    <li>Frequently asked questions</li>
                    <li>Press releases</li>
                </ul>
            </div>
            <div>
                <h2>Social links</h2>
                <div className="flex items-center">
                    {/* <MdPhone /> */}
<h3>Contact us</h3></div>
                <div className="flex items-center"><h3>Email</h3></div>
                <div className="flex items-center"><img src="" alt="" /><h3>Facebook</h3></div>
                <div className="flex items-center"><img src="" alt="" /><h3>x</h3></div>
                <div className="flex items-center"><img src="" alt="" /><h3>Linked in</h3></div>
            </div>
        </footer>
        </div>
    )
}

export default Footer