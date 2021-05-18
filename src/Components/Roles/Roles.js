import React, { useEffect, useRef } from "react";
import io from "socket.io-client";
import "./roles.css";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from "../../Actions";

//setGame, game,

const Roles = ({ socket, myID }) => {
  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const game = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const handleRole = (e) => {
    const id = game.gameID;
    const role = e.target.value;
    socket.emit("set-role", { id, myID, role });
  };

  const subToRoleUpdate = useRef(false);

  useEffect(() => {
    if (!subToRoleUpdate.current) {
      socket.on("role-update", ({ gameUpdate }) => {
        // setGame(gameUpdate);
        dispatch(changeGame(gameUpdate));
      });
      subToRoleUpdate.current = true;
    }
  }, [socket]);

  return (
    <div className="roles">
      <button
        onClick={handleRole}
        className={`p1 ${game[myID] === "p1" ? "selected" : "unselected"}`}
        value="p1"
      >
        p1
      </button>
      <button
        onClick={handleRole}
        className={game[myID] === "spectator" ? "selected" : "unselected"}
        value="spectator"
      >
        spectator
      </button>
      <button
        onClick={handleRole}
        className={`p2 ${game[myID] === "p2" ? "selected" : "unselected"}`}
        value="p2"
      >
        p2
      </button>
    </div>
  );
};

export default Roles;
