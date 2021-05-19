import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID } from "../../Actions";
import { socket } from "../../constants";

const NewGame = () => {
  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);

  const [inputID, setInputID] = useState("");

  useEffect(() => {
    return () => {
      setInputID("");
    };
  }, []);

  const dispatch = useDispatch();

  const create = () => {
    socket.emit("create-game");
  };

  socket.on("created-game", ({ newGame, cliID }) => {
    dispatch(changeMyID(cliID));
    dispatch(changeGame(newGame));
  });

  const handleInputID = (e) => {
    setInputID(e.target.value);
  };

  const joinGame = (e) => {
    e.preventDefault();
    socket.emit("join-game", inputID);
  };

  socket.on("joining-game", ({ joinGame }) => {
    const x = joinGame.clients.length;
    dispatch(changeMyID(joinGame.clients[x - 1]));
    dispatch(changeGame(joinGame));
  });

  return (
    <div>
      <button onClick={create}>Create</button>
      <p>{game.gameID}</p>
      <form onSubmit={joinGame}>
        <input value={inputID} onChange={handleInputID}></input>
        <button type="submit">Join</button>
      </form>
      <p>{myID}</p>
    </div>
  );
};

export default NewGame;
