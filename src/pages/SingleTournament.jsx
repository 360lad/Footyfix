import { useLocation } from "react-router-dom";

export default function SingleTournament() {
  const { state } = useLocation();

  const { tournamentName, teamNames, teamNum, id } = state;
   
  function handleTeamGroupings(){
    const teamGroupings = {}
    const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
  const groupings=chunk(teamNames,teamNum)
  
  groupings.map((group,index)=>{
    console.log(`Group ${letters[index]} teams are ${group}`)
  })

  console.log(teamGroupings)

  }
  return (
    <div>
        {console.log(id)}
      <h1 className="text-white text-[2em] font-bold text-center">Welcome to the {tournamentName} tournament</h1>
    
        <h2>Tournament Teams</h2>
        <div>
        {
            teamNames.map(teamName=>{
                return (
                  <div className="flex text-[1em] ">
                    <p className="text-white ">{teamName}</p>
                    </div>
                )
            })
        }
        </div>
        <button className="bg-[#fff] rounded p-[1em] text-black flex items-center" onClick={handleTeamGroupings}>Group Teams</button>
      </div>
  
  );
}

