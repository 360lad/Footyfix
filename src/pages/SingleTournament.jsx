import { useLocation } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import Tournamentform from "../components/Tournamentform";

export default function SingleTournament() {
  const { state } = useLocation();

  const { tournamentName, teamNames, teamNum, id, pools, matches } = state;
  const teamPools = Object.keys(pools);
  const teams = Object.keys(matches).sort();

  const [showForm, setShowForm] = useState(false);
  const [selectedTeams, setSelectedteams] = useState([]);

  function updateScores(teams) {
    setSelectedteams(teams);
    setShowForm(true);
  }

  function uniquePairs(array) {
    if (!Array.isArray(array)) {
      throw new TypeError("First argument must be an array");
    }

    if (array.length < 3) {
      return [array];
    }

    return array.reduce(
      (previousValue, currentValue, index) =>
        previousValue.concat(
          array.slice(index + 1).map((value) => ({
            [currentValue]: { score: 0, points: 0 },
            [value]: { score: 0, points: 0 },
          }))
        ),
      []
    );
  }

  function handleTeamGroupings(e) {
    if (e.target.textContent.toLowerCase() === "group teams") {
      const teamGroupings = {};
      const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
        );
      const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
      const groupings = chunk(teamNames, parseInt(teamNum));

      // console.log(teamNames, teamNum);

      groupings.map((group, index) => {
        teamGroupings[letters[index]] = group;

        // console.log(`Group ${letters[index]} teams are ${group}`)
      });

      // Save to firebase

      (async (e) => {
        //...
        await updateDoc(doc(db, "tournaments", id), {
          groupings: teamGroupings,
        });
      })();
    } else if (e.target.textContent.toLowerCase() === "assign teams") {
      const teamList = {};
      teamPools.map((teamPool) => {
        // const assignedTeams= uniquePairs(pools[teamPool])

        teamList[teamPool] = uniquePairs(pools[teamPool]);

        // save to firebase
      });

      console.log(teamList)(async (e) => {
        //...
        await updateDoc(doc(db, "tournaments", id), {
          assignedGroupMatches: teamList,
        });
      })();
    }
  }
  console.log(matches);
  function changeButtonName() {
    if (pools) {
      return "Assign Teams";
    } else {
      return "Group Teams";
    }
  }

  const testRender = () => {
    const teams = Object.keys(matches).sort();

    teams.map((team) => {
      return `This is team ${team}`;
    });
  };

  return (
    <div>
      {console.log(id)}

      <h1 className="text-white text-[2em] font-bold text-center">
        Welcome to the {tournamentName} tournament
      </h1>

      <h2 className="text-white text-center text-[2em]">Tournament Teams</h2>
      <div className="flex items-center justify-center flex-wrap text-center text-[1em] border rounded w-[fit] m-[2em]">
        {teamNames &&
          teamNames.map((teamName) => {
            return (
              <div>
                <p className="text-white text-center p-[2em]">{teamName}</p>
              </div>
            );
          })}
      </div>
        <h2 className="text-white text-center text-[2em]">Team Pools</h2>
      <div className="flex items-center justify-center flex-wrap gap-[1em]">
        <div className="flex items-center justify-center flex-wrap gap-[1em]">
          {teamPools &&
            teamPools.map((teamPool) => (
              <div>
                <h3 className="text-white text-center text-[1em]">Group {teamPool}</h3>
                <div className="flex text-center justify-center w-[200px] h-[200px] text-black rounded p-[3em] bg-[#313131] ">
                  <div>
                    {pools[teamPool].map((item) => (
                      <p className="">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <h2 className="text-white text-center text-[2em] m-[1em]">Group fixtures</h2>
      <div className="flex items-center justify-center text-white">
        <div className="flex items-center justify-center flex-wrap text-white">
          {teams.map((team) => {
            console.log(team);
            return (
              <div>
                <h3 className="text-center">Group {team}</h3>
                <div>
                  {matches[team].map((match) => {
                    const singleMatch = Object.keys(match);
                    console.log(match[singleMatch[0]]);
                    return (
                      <div className="flex items-center justify-center flex-wrap m-[2em] border p-[1em] rounded">
                        <div className="flex items-center justify-center m-[1em]">
                          <div>
                            <h3>{singleMatch[0]}</h3>
                            <p>{`Score: ${match[singleMatch[0]].score}`}</p>
                            <p>{`points:${match[singleMatch[0]].points}`}</p>
                          </div>
                          <p className="p-[1em]">vs</p>
                          <div>
                            <h3>{singleMatch[1]}</h3>
                            <p>{`Score:${match[singleMatch[1]].score}`}</p>
                            <p>{`Points:${match[singleMatch[1]].points}`}</p>
                          </div>
                        </div>
                        <div>
                          <button
                            className="bg-white text-black rounded p-[.5em] "
                            onClick={() =>
                              updateScores([singleMatch[0], singleMatch[1]])
                            }
                          >
                            {" "}
                            Update Scores
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showForm && (
        <div className="  flex flex-col items-center justify-center  flex-wrap gap-[1em] p-[2em] absolute top-[55vh] right-[50%] translate-x-[50%]	translate-y-[55vh]	   border rounded bg-black text-white  ">
          <div className="absolute top-[1%] right-[0%] p-[1em] cursor-pointer">
            <MdCancel size={20} onClick={() => setShowForm(false)} />
            {/* onClick={formCancellation()} */}
          </div>
          <form action="">
              <h3 className="text-center"> {`${selectedTeams[0]} vs  ${selectedTeams[1]}: `}</h3>
            <div className="flex items-center justify-center">
              <div>
                <label className=" text-white" htmlFor="">
                  {`${selectedTeams[0]}: `}
                </label>
                <input
                  className="border outline-none m-[.5em] p-[.5em] text-black"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-center m-[1em]  ">
              <label className="text-white" htmlFor="">
                {`${selectedTeams[1]}: `}
              </label>
              <input
                className="border outline-none rounded m-[.5em] p-[.5em] text-black"
                type="text"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center bg-white text-black p-[.5em] border rounded">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
      {console.log(showForm)}
      <button
        className="bg-[#fff] rounded p-[1em] text-black flex items-center text-center"
        onClick={handleTeamGroupings}
      >
        {changeButtonName()}
      </button>
    </div>
  );
}
