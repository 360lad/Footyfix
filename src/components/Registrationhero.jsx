import { IoMdAdd } from "react-icons/io";


function Registrationhero({showModal,setShowModal}) {
    function handleShowmodal(){
        setShowModal(true)
    }
  return (
    <div className="container text-[white]">
        <div>
      <h1 className="text-[white] text-[2em]">Welcome to Footyfix</h1>
      <p className="text-[white]">
        Here you'll kindly create your tournament here .If you have an existing
        tournament login into the am existing tournament
      </p>
      <button className="bg-[#fff] text-[#000] p-[1em] m-[1em] border rounded justify-center" onClick={handleShowmodal}> <IoMdAdd />Create NewTournament </button>
    
      </div>
    
    </div>
  );
}
export default Registrationhero;
