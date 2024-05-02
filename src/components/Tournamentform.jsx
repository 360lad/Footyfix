
import {  useState } from "react";
import { MdCancel } from "react-icons/md";

import { useState } from "react";
// import { MdCancel } from "react-icons/md";


import { db } from "../Firebase";
import { collection, addDoc ,getDocs} from "firebase/firestore";


function Tournamentform({ showModal, setShowModal, handleSubmit }) {
  const [formData, setFormData] = useState({
    tournamentName: "",
    teamNames: [],
    teamNum: "",
  });
  
  
  

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [teamList, setTeamList] = useState([]);
  function cancelModal() {
    setShowModal(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked")
    if (
      formData.tournamentName.length == 0 ||
      formData.teamNames.length == 0 ||
      formData.teamNum.length == 0
    ) {
      setError(true);
    } else {
      setError(false);
      setSucess(true);

      shuffle(formData.teamNames);

      // Save data

      const docRef = await addDoc(collection(db, "tournaments"), formData);
      console.log("Document written with ID: ", docRef.id);

      if (docRef.id) {
        setFormData({ tournamentName: "", teamNames: "", teamNum: "" });
      }
    }
  }
  


  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  


  


    };
  

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-[1em] bg-[#000] justify-center relative  border rounded min-w-[500px] p-[1em]">
        <form       
                onChange={(e) => setTeamNames(e.target.value)}
>
          <div className="flex items-center justify-around">
            <div className="w-full">
              {sucess ? (
                <h3 className="text-[green] text-center">
                  Tournament Added succesfully
                </h3>
              ) : (
                ""
              )}

              {error && formData.tournamentName.length <= 0 ? (
                <h3 className="text-[red] h-[20px] text-center">
                  Enter Tournament Name!!
                </h3>
              ) : (
                ""
              )}
              <input
                className="block w-[90%] mx-auto p-[1em] text-[#000] my-[1em]"
                type="text"
                placeholder="Tournament Name"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tournamentName: e.target.value,
                  }))
                }
                value={formData.tournamentName}
              />
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
            {error && formData.teamNames.length <= 0 ? (
              <h3 className="text-[red] h-[20px] text-center">
                Enter teams to participate!!
              </h3>
            ) : (
              ""
            )}
            <textarea

              className="outline-none block w-full text-[#000] rounded   mx-auto p-[1em]"

              className="outline-none block  text-[#000] rounded  w-[90%] mx-auto p-[1em]"

              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter the teams that are to participate and they are to be separated by a comma (,)"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  teamNames: e.target.value.split(","),
                }))
              }
              value={formData.teamNames}
            ></textarea>

                          
              {/* <label>
              <h3>The Number of teams must be included</h3>
            </label> */}
            {error && formData.teamNum.length <= 0 ? (
            <h3 className="text-[red] h-[20px] text-center">
              Specify number of pools!!
            </h3>
          ) : (
            ""
          )}
              <div className="flex items-center ">

        
         
            
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
</form>

        <textarea   onChange={(e) => setTeamNames(e.target.value)}>
            </textarea>
            <label>
              <h3>Tournament Name must be included</h3>
            </label>
          </div>
          <div className="flex items-center j">

            <input
              className="  w-[90%] mx-auto outline-none rounded p-[1em] my-[1em] text-[#000]"
              type="text"
              placeholder="Enter number of pools :"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, teamNum: e.target.value }))
              }
              value={formData.teamNum}
            />
          </div>
         
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#fff] text-[#000] py-[.5em] cursor-pointer px-[2em] rounded items-center justify-center" onClick={(e)=>{handleSubmit(e)}}>
              Create
            </button>

          </div>



        </form>
      
        
         </div>

         </div>
);

        
      </div>
    
    
  );

}

export default Tournamentform;

         



























  