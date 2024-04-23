import { useState } from "react";
import { MdCancel } from "react-icons/md";


function Tournamentform({showModal,setShowModal,handleSubmit}) {


  const [formData,setFormData]=useState({
    tournamentName:"",
    teamNames:"",
    teamNum:""
  })
  
  const [error,setError]=useState(false);
    function cancelModal(){
        setShowModal(false)


}
function handleSubmit(e){
  e.preventDefault();
  if(formData.tournamentName.length==0||formData.teamNames.length==0||formData.teamNum.length==0){
          setError(true)
  }

    };
  return (

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-[1em] bg-[#000] justify-center relative  border rounded min-w-[500px] p-[1em]">
        <form onSubmit={handleSubmit}>
     
        <div className="flex items-center justify-around">
          <div className="w-full">
          {error &&formData.tournamentName.length<=0 ?
            <h3 className="text-[red] h-[20px] text-center">Enter Tournament Name!!</h3>:""}
            <input className="block w-[90%] mx-auto p-[1em] text-[#000] my-[1em]" type="text" placeholder="Tournament Name"  onChange={e=>setFormData(prev=>({...prev, tournamentName:e.target.value}))}/>
          </div>
          <div>
            <MdCancel className="absolute right-0 top-0 cursor-pointer  m-[.5em]" size={20} onClick={cancelModal} />
          </div>
        </div>
        <div className="w-full block"> 
        {error&&formData.teamNames.length<=0?
              <h3 className="text-[red] h-[20px] text-center">Enter teams to participate!!</h3>:""}
            <textarea
              className="outline-none block  text-[#000] rounded  w-[90%] mx-auto p-[1em] my-[1em]"

// import { useState } from "react";

function Tournamentform({ showModal, setShowModal }) {
  // const [error,setError]=useState(true)
  // const validateInput=e=>{
  // if(input.value===""){
  //   setError(true)
  // }
  // }
  const [tournamentName, setTournamentName] = useState("");
  const [teamNames, setTeamNames] = useState("");
  const [teamNum, setTeamNum] = useState("");
  function cancelModal() {
    setShowModal(false);
    // const handleCreate=e=>{

    // }
  }
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-[1em] bg-[#000] justify-center relative  border rounded min-w-[500px] p-[1em]">
        <form>
          {/* onSubmit={handleCreate} */}
          <div className="flex items-center justify-around">
            <div className="w-full">
              <input
                onChange={(e) => setTournamentName(e.target.value)}
                className="block w-[90%] mx-auto p-[1em]"
                type="text"
                placeholder="Tournament Name"
              />
              <label>
                <h3>Tournament Name must be included</h3>
              </label>
            </div>
            <div>
              <MdCancel
                className="absolute right-0 top-0 cursor-pointer  m-[.5em]"
                size={20}
                onClick={cancelModal}
              />
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

              onChange={e=>setFormData(prev=>({...prev, teamNames:e.target.value}))}
            ></textarea>
        
         
            
        </div>
        {error&& formData.teamNum.length<=0?
            <h3 className="text-[red] h-[20px] text-center">Specify number of pools!!</h3> :""}
        <div className="flex items-center ">
          <input
            className="  w-[90%] mx-auto outline-none rounded p-[1em] my-[1em] text-[#000]"
            type="text"
            placeholder="Enter number of pools :"
            onChange={e=>setFormData(prev=>({...prev, teamNum:e.target.value}))}
          />
       
        </div>
        
        <div className="flex items-center justify-center">
          <button className="bg-[#fff] text-[#000] py-[.5em] cursor-pointer px-[2em] rounded items-center justify-center" onClick={(e)=>handleSubmit(e)}>
            Create
          </button>
        </div>

              onChange={(e) => setTeamNames(e.target.value)}
            ></textarea>
            <label>
              <h3>Tournament Name must be included</h3>
            </label>
          </div>
          <div className="flex items-center j">
            <input
              className="  w-[90%] mx-auto outline-none rounded p-[1em]"
              type="text"
              placeholder="The number of the pools wanted:"
              onChange={(e) => setTeamNum(e.target.value)}
            />
            <label>
              <h3>The Number of teams must be included</h3>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#fff] text-[#000] py-[.5em] cursor-pointer px-[2em] rounded items-center justify-center">
              Create
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Tournamentform;
