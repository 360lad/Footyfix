import { MdCancel } from "react-icons/md";

function Tournamentform({showModal,setShowModal}) {
    function cancelModal(){
        setShowModal(false)
    }
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-[1em] bg-[#000] justify-center relative  border rounded min-w-[500px] p-[1em]">
        <div className="flex items-center justify-around">
          <div className="w-full">
            <input className="block w-[90%] mx-auto p-[1em]" type="text" placeholder="Tournament Name"/>
          </div>
          <div>
            <MdCancel className="absolute right-0 top-0 cursor-pointer  m-[.5em]" size={20} onClick={cancelModal} />
          </div>
        </div>
        <div className="w-full block"> 
        
            <textarea
              className="outline-none block w-full text-[#000] rounded  w-[90%] mx-auto p-[1em]"
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter the teams that are to participate and they are to be separated by a comma (,)"
            ></textarea>
        
        </div>
        <div className="flex items-center j">
          <input
            className="  w-[90%] mx-auto outline-none rounded p-[1em]"
            type="text"
            placeholder="The number of the pools wanted:"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#fff] text-[#000] py-[.5em] cursor-pointer px-[2em] rounded items-center justify-center">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tournamentform;
