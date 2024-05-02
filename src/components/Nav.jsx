import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="flex items-center justify-between sticky  Z-2000  border-b-2">
      <div className=" w-[10%] mx-[2em]">
        <img
          className="bg-[black]"
          src="src/assets/footy-images/footy-logo.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center text-[white] gap-[1em]">
          <Link to="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          {/* <Link to="/"><li>Registration</li></Link> */}
          <Link to="/Registration">
            <li>Tournaments</li>
          </Link>
        </ul>
      </div>
      <div className="mx-[2em]">
        <ul className="flex items-center justify-center text-[white] gap-[1em]">
          <Link to="/Login">
            <li>Sign in</li>
          </Link>
          <Link to="/Signup">
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
