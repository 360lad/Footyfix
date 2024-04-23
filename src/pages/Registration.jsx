import Registrationhero from "../components/Registrationhero";
import Tournamentform from "../components/Tournamentform";
// import poolsform from "../components/Poolsform";
import { useState } from "react";

function Registration() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-[#fff] ">
      <Registrationhero showModal={showModal} setShowModal={setShowModal} />

      {showModal && <Tournamentform showModal={showModal} setShowModal={setShowModal}/>}

      {/* <poolsform /> */}
    </div>
  );
}
export default Registration;
