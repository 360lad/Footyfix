import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Tournamentform from "./Tournamentform";
import { collection, addDoc, getDocs,updateDoc } from "firebase/firestore";

function Registrationhero({ showModal, setShowModal }) {
  const [tournaments, setTournaments] = useState([]);
  function handleShowmodal() {
    setShowModal(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const tornamentsArray = [];
      const querySnapshot = await getDocs(collection(db, "tournaments"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tornamentsArray.push({ id: doc.id, data: doc.data() });
        console.log(doc);
      });
      setTournaments(tornamentsArray);
    })();
  }, []);

  function handleTourrnament(path, options) {
    navigate(path, options);



  }

  
  
  return (
    <div className=" flex flex-col items-start justify-center flex-wrap container text-[white] m-[2em]">
      {console.log(tournaments)}

      {
        showModal && <Tournamentform/>
      }
      <div className=" ">
        <h1 className="text-[white] text-[2em] ">Welcome to Footyfix</h1>
        <p className="text-[white]">
          Here you'll kindly create your tournament here .If you have an
          existing tournament login into the am existing tournament
        </p>
        <button
          className="bg-[#fff] text-[#000] p-[1em] m-[1em] border rounded flex flex-col items-center justify-center"
          onClick={handleShowmodal}
        >
          {" "}
          <IoMdAdd />
          Create NewTournament{" "}
        </button>
      </div>
      <div className="border rounded min-h-[500px] min-w-[500px] items-center">
        <h2 className="text-center  font-bold text-[3em]">TOURNAMENTS</h2>
{console.log(tournaments)}
        <div>
          {tournaments.length === 0 ? (
            <h3>No tournaments found</h3>
          ) : (
            tournaments.map((tournament) => {
              const { tournamentName, teamNames, teamNum, groupings, assignedGroupMatches } = tournament.data;
              return (
                <div className="flex  items-center justify-evenly flex-wrap m-[2em]">

                <h3
                  className="cursor-pointer font-bold flex gap-[2em]"
                  onClick={() =>
                    handleTourrnament(`/tournaments/${tournamentName}`, {
                      state: { tournamentName, teamNames, teamNum, id:tournament.id, pools:groupings, matches:assignedGroupMatches},
                    })
                  }
                >
                  {tournamentName}
                </h3>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default Registrationhero;
